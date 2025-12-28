
import React, { useState, useEffect, useRef } from 'react';
import { OnboardingProgress } from '@/api/entities';
import { User } from '@/api/entities';
import { sectionsData } from '../components/onboarding/sectionsData';

import WelcomeHome from '../components/onboarding/WelcomeHome';
import WelcomeHub from '../components/onboarding/WelcomeHub';
import Sidebar from '../components/onboarding/Sidebar';
import SectionContent from '../components/onboarding/SectionContent';
import OnboardingForm from '../components/onboarding/OnboardingForm';
import CompletionCelebration from '../components/onboarding/CompletionCelebration';

export default function OnboardingPage() {
  const [progress, setProgress] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [error, setError] = useState(null);
  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    loadUserAndProgress();
  }, []);

  // Debounce localStorage saves to prevent excessive writes
  useEffect(() => {
    // Only save if progress exists and has an ID
    if (!progress || !progress.id) {
      return;
    }

    // Clear any existing timeout to ensure only the latest state is saved
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set a new timeout to save the progress to localStorage
    debounceTimeoutRef.current = setTimeout(async () => {
      try {
        // Save progress to localStorage (update will handle the persistence)
        await OnboardingProgress.update(progress.id, progress);
      } catch (e) {
        console.warn('Failed to save progress to localStorage:', e);
      }
    }, 500); // 500ms delay

    // Cleanup function: clear the timeout if the component unmounts or dependencies change before timeout fires
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [progress]); // Rerun effect whenever the 'progress' state changes

  const loadUserAndProgress = async () => {
    try {
      const userData = await User.me();
      setUser(userData);

      // Get progress for current user
      const progressList = await OnboardingProgress.filter({ created_by: userData.email });
      
      let userProgress;
      if (progressList.length > 0) {
        userProgress = progressList[0];
        
        let needsUpdate = false;
        const updates = {};

        // Force to home page to show welcome screen
        if (userProgress.current_section !== 'home') {
            updates.current_section = 'home';
            updates.current_step = 0;
            needsUpdate = true;
        }

        // Sanitize data structure to prevent errors from old/corrupted records
        if (typeof userProgress.completed_steps !== 'object' || userProgress.completed_steps === null || Array.isArray(userProgress.completed_steps)) {
          console.log("Invalid 'completed_steps' format detected, resetting to object.");
          updates.completed_steps = {};
          needsUpdate = true;
        }
        
        if (!Array.isArray(userProgress.completed_sections)) {
            console.log("Invalid 'completed_sections' format detected, resetting to array.");
            updates.completed_sections = [];
            needsUpdate = true;
        }

        if (typeof userProgress.form_data !== 'object' || userProgress.form_data === null || Array.isArray(userProgress.form_data)) {
            console.log("Invalid 'form_data' format detected, resetting to object.");
            updates.form_data = {};
            needsUpdate = true;
        }

        if(needsUpdate) {
            try {
              console.log("Updating user progress record to fix data inconsistencies.", updates);
              await OnboardingProgress.update(userProgress.id, updates);
              userProgress = { ...userProgress, ...updates };
            } catch (updateError) {
              console.warn("Failed to update progress, using local changes:", updateError);
              userProgress = { ...userProgress, ...updates };
            }
        }

      } else {
        try {
          userProgress = await OnboardingProgress.create({
            current_section: 'home',
            current_step: 0,
            completed_sections: [],
            completed_steps: {},
            form_data: {},
            started_at: new Date().toISOString()
          });
        } catch (createError) {
          console.warn("Failed to create progress record, using default:", createError);
          // If creation fails, we still want to render something and allow the user to proceed locally
          // The data will just not be persisted until connection is restored or user refreshes and a retry occurs.
          userProgress = {
            current_section: 'home',
            current_step: 0,
            completed_sections: [],
            completed_steps: {},
            form_data: {},
            started_at: new Date().toISOString()
          };
        }
      }
      setProgress(userProgress);
      setError(null);

    } catch (error) {
      console.error('Error loading user and progress:', error);
      setError(error.message || 'Failed to load user data');
      // In local mode, we don't need authentication redirect
      // If there's an error, create default progress
      if (!progress) {
        const defaultProgress = {
          id: 'local-progress',
          current_section: 'home',
          current_step: 0,
          completed_sections: [],
          completed_steps: {},
          form_data: {},
          started_at: new Date().toISOString()
        };
        setProgress(defaultProgress);
      }
    }
    setIsLoading(false);
  };

  // This function now only updates the local state.
  // The actual API call is handled by the debounced useEffect.
  const updateProgress = (updates) => {
    if (!progress) return;
    setProgress(prevProgress => ({ ...prevProgress, ...updates }));
  };

  const handleStartTutorial = () => {
    updateProgress({ current_section: 'welcome' });
  };

  const handleBackToHome = () => {
    updateProgress({ current_section: 'home', current_step: 0 });
  };

  const handleSectionChange = (sectionId) => {
    updateProgress({
      current_section: sectionId,
      current_step: 0
    });
  };

  const handleNavigateToSection = (sectionId, stepIndex = 0) => {
    updateProgress({
      current_section: sectionId,
      current_step: stepIndex,
    });
  };

  const handleStepChange = (stepIndex) => {
    updateProgress({
      current_step: stepIndex
    });
  };

  const handleNext = () => {
    if (!progress) return;
    
    const currentSectionData = sectionsData[progress.current_section];
    if (!currentSectionData) return;
    
    const isLastStep = progress.current_step >= currentSectionData.steps.length - 1;
    
    if (isLastStep) {
      const completedSections = [...(progress.completed_sections || [])];
      if (!completedSections.includes(progress.current_section)) {
        completedSections.push(progress.current_section);
      }
      
      const sectionKeys = Object.keys(sectionsData);
      const currentIndex = sectionKeys.indexOf(progress.current_section);
      const nextSection = sectionKeys[currentIndex + 1];
      
      if (nextSection) {
        updateProgress({
          completed_sections: completedSections,
          current_section: nextSection,
          current_step: 0
        });
      } else {
        updateProgress({
          completed_sections: completedSections,
          current_section: 'form',
          current_step: 0
        });
      }
    } else {
      updateProgress({
        current_step: progress.current_step + 1
      });
    }
  };

  const handlePrevious = () => {
    if (!progress) return;
    
    if (progress.current_step > 0) {
      updateProgress({
        current_step: progress.current_step - 1
      });
    } else {
      const sectionKeys = Object.keys(sectionsData);
      const currentIndex = sectionKeys.indexOf(progress.current_section);
      const prevSection = sectionKeys[currentIndex - 1];
      
      if (prevSection) {
        const prevSectionData = sectionsData[prevSection];
        updateProgress({
          current_section: prevSection,
          current_step: prevSectionData.steps.length - 1
        });
      }
    }
  };

  const handleStepComplete = (stepIndex) => {
    if (!progress) return;
    
    const completedSteps = { ...progress.completed_steps };
    const sectionSteps = completedSteps[progress.current_section] || [];
    
    if (!sectionSteps.includes(stepIndex)) {
      sectionSteps.push(stepIndex);
      completedSteps[progress.current_section] = sectionSteps;
      
      updateProgress({ completed_steps: completedSteps });
    }
  };

  const handleFormUpdate = (formData) => {
    if (!progress) return;
    updateProgress({ form_data: formData });
  };

  const handleFormComplete = () => {
    updateProgress({
      current_section: 'completed',
      completed_at: new Date().toISOString()
    });
  };

  const handleNavigateToGlossary = () => {
    handleNavigateToSection('glossary', 2);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your learning experience...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 text-2xl">⚠️</span>
          </div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Connection Issue</h2>
          <p className="text-slate-600 mb-6">We're experiencing some database connectivity issues. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  if (!progress) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">Unable to load progress. Please try again.</p>
      </div>
    );
  }

  const renderContent = () => {
    const { current_section, current_step } = progress;

    // Show Welcome Home if current_section is 'home'
    if (current_section === 'home') {
        return <WelcomeHome onStartTutorial={handleStartTutorial} />;
    }

    // Always show Welcome Hub if current_section is 'welcome'
    if (current_section === 'welcome') {
      return (
        <div className="p-8">
          <WelcomeHub 
            onSectionSelect={handleSectionChange}
            onBackToHome={handleBackToHome}
            progress={progress}
          />
        </div>
      );
    }

    if (current_section === 'form') {
      return (
        <div className="p-8">
          <OnboardingForm
            formData={progress.form_data}
            currentStep={1}
            totalSteps={2}
            onFormUpdate={handleFormUpdate}
            onNext={handleFormComplete}
            onPrevious={() => handleSectionChange(Object.keys(sectionsData).slice(-1)[0])}
            onMarkComplete={() => {}}
          />
        </div>
      );
    }

    if (current_section === 'completed') {
      return (
        <div className="p-8">
          <CompletionCelebration
            userForm={progress.form_data}
            currentStep={2}
            totalSteps={2}
            onPrevious={() => handleSectionChange('form')}
          />
        </div>
      );
    }

    const sectionData = sectionsData[current_section];
    if (!sectionData) {
      // Fallback to WelcomeHome if section doesn't exist
      return <WelcomeHome onStartTutorial={handleStartTutorial} />;
    }

    return (
      <div className="p-8">
        <SectionContent
          sectionData={sectionData}
          currentStep={current_step}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onStepComplete={handleStepComplete}
          onStepChange={handleStepChange}
          onNavigateToGlossary={handleNavigateToGlossary}
          onNavigateToSection={handleNavigateToSection}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {progress.current_section !== 'home' && progress.current_section !== 'welcome' && (
        <Sidebar
          currentSection={progress.current_section}
          currentStep={progress.current_step}
          progress={progress}
          onSectionChange={handleSectionChange}
          onStepChange={handleStepChange}
          onBackToHub={() => handleSectionChange('welcome')}
          onBackToHome={handleBackToHome}
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}

      <main className={`${
        (progress.current_section !== 'home' && progress.current_section !== 'welcome')
          ? sidebarCollapsed ? 'ml-20' : 'ml-80' 
          : ''
      } transition-all duration-300`}>
        {renderContent()}
      </main>
    </div>
  );
}
