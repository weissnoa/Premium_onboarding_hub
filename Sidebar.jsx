
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Home,
  Sparkles,
  AlertCircle,
  BookOpen,
  Settings,
  HelpCircle,
  ChevronLeft,
  Check
} from 'lucide-react';

export default function Sidebar({
  currentSection,
  currentStep,
  progress,
  onSectionChange,
  onStepChange,
  onBackToHub,
  onBackToHome,
  isCollapsed,
  onToggleCollapse
}) {
  const sections = [
    {
      id: 'meet_platform',
      title: 'Meet the Platform',
      icon: Sparkles,
      steps: [
        { title: 'The Premium Platform', index: 0 },
        { title: 'Platform Domains', index: 1 },
        { title: 'Platform Configuration Systems', index: 2 },
        { title: 'Consumers in Action', index: 3 }
      ]
    },
    {
      id: 'things_to_know',
      title: 'Before You Start',
      icon: AlertCircle,
      steps: [
        { title: 'Define Your Business Model', index: 0 },
        {
          title: 'Business Model Options',
          index: 1,
          subSteps: [
            { title: 'Free Trial', index: 2 },
            { title: 'Quota-based Features', index: 3 },
            { title: 'Custom Charges', index: 4 }
          ]
        },
        { title: 'Additional Capabilities', index: 5 },
        {
          title: 'Emails & Notifications',
          index: 6,
          subSteps: [
            { title: 'How It Works', index: 7 },
            { title: 'Mandatory Emails', index: 8 },
            { title: 'Summary of Action Items', index: 9 },
          ]
        },
        { title: 'Getting Support', index: 10 }
      ]
    },
    {
      id: 'glossary',
      title: 'Glossary',
      icon: BookOpen,
      steps: [
        { title: 'Dynamic & User Offering', index: 0 },
        { title: 'Product Catalog', index: 1 },
        {
          title: 'Product type properties',
          index: 2,
          subSteps: [
            { title: 'Properties: Context', index: 3 },
            { title: 'Properties: Allowed Actions', index: 4 },
            { title: 'Properties: Payment', index: 5 },
            { title: 'Properties: Refund Policy', index: 6 },
            { title: 'Properties: Billing & Trial', index: 7 },
          ]
        },
        { title: 'Dynamo - DO Back Office', index: 8 },
        { title: 'User Offering & The Dealer', index: 9 },
        { title: 'The Funnel Designer', index: 10 },
        { title: 'System Workflow', index: 11 }
      ]
    },
    {
      id: 'setup_guide',
      title: 'Full Setup',
      icon: Settings,
      steps: [
        { title: 'High Level Process', index: 0 },
        { title: 'Step 1: Business Reviews', index: 1 },
        { title: 'Step 2: Define Product Type', index: 2 },
        {
          title: 'Step 3: Create Product Catalog',
          index: 3,
          subSteps: [
            { title: 'Create Product Family', index: 3 },
            { title: 'Create Features', index: 4 },
            { title: 'Create Products', index: 5 }
          ]
        },
        { title: 'Step 4: Set Email Notifications', index: 6 },
        { title: 'Step 5: API integrations', index: 7 },
        { title: 'Backend Complete!', index: 8 },
        { title: 'Step 6: Create Offering in Dealer', index: 9 },
        {
          title: 'Step 7: Setup Purchase Funnel',
          index: 10,
          subSteps: [
            { title: 'Set Content in Dealer', index: 11 },
            { title: 'Create Purchase Funnel in Studio', index: 12 }
          ]
        },
        { title: 'Step 8: QA Your Offering', index: 13 },
        { title: 'Step 9: Implementation & Go Live', index: 14 }
      ]
    },
    {
      id: 'support',
      title: 'Support & Resources',
      icon: HelpCircle,
      steps: [
        { title: 'Getting Help', index: 0 },
        { title: 'Key Contacts (POCs)', index: 1 }
      ]
    }
  ];

  const isStepCompleted = (sectionId, stepIndex) => {
    return progress?.completed_steps?.[sectionId]?.includes(stepIndex) || false;
  };

  const isSectionCompleted = (sectionId) => {
    return progress?.completed_sections?.includes(sectionId) || false;
  };

  const getCurrentSectionData = () => {
    return sections.find(s => s.id === currentSection);
  };

  if (isCollapsed) {
    return (
      <motion.div
        initial={{ width: 300 }}
        animate={{ width: 80 }}
        className="fixed left-0 top-0 h-screen bg-white/95 backdrop-blur-sm border-r border-white/20 z-40"
      >
        <div className="p-4 space-y-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            className="w-full"
          >
            <ChevronLeft className="w-5 h-5 rotate-180" />
          </Button>

          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              size="icon"
              onClick={() => onSectionChange(section.id)}
              className={`w-full ${
                currentSection === section.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              <section.icon className="w-5 h-5" />
            </Button>
          ))}
        </div>
      </motion.div>
    );
  }

  const currentSectionData = getCurrentSectionData();

  return (
    <motion.div
      initial={{ width: 80 }}
      animate={{ width: 300 }}
      className="fixed left-0 top-0 h-screen bg-white/95 backdrop-blur-sm border-r border-white/20 overflow-y-auto z-40"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBackToHome}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-800 justify-start"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onBackToHub}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-800 justify-start"
            >
              <Sparkles className="w-4 h-4" />
              Back to Hub
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>

        {/* Current Section Progress */}
        {currentSection !== 'welcome' && currentSectionData && (
          <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <currentSectionData.icon className="w-4 h-4 text-blue-600" />
              <h3 className="font-semibold text-blue-800 text-sm">
                {currentSectionData.title}
              </h3>
            </div>
            <div className="text-xs text-blue-600">
              Step {currentStep + 1} of {currentSectionData.steps.length}
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentStep + 1) / currentSectionData.steps.length) * 100}%`
                }}
              />
            </div>
          </div>
        )}

        {/* Sections Navigation */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider px-2 mb-4">
            Learning Sections
          </h4>

          {sections.map((section) => (
            <div key={section.id}>
              <Button
                variant="ghost"
                className={`w-full justify-start p-3 h-auto ${
                  currentSection === section.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                }`}
                onClick={() => onSectionChange(section.id)}
              >
                <div className="flex items-center gap-3 w-full">
                  <section.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-left text-sm font-medium flex-1">
                    {section.title}
                  </span>
                  {isSectionCompleted(section.id) && (
                    <Check className="w-4 h-4 text-green-500" />
                  )}
                </div>
              </Button>

              {/* Steps for current section */}
              {currentSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="ml-2 mt-1 space-y-1"
                >
                  {section.steps.map((step) => {
                    const isParentActive = currentStep === step.index;
                    const isChildActive = step.subSteps?.some(sub => sub.index === currentStep);
                    const isGroupActive = isParentActive || isChildActive;

                    return (
                      <div key={step.title}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`w-full justify-start text-sm p-2 h-auto ${
                            isParentActive
                              ? 'bg-blue-100 text-blue-700'
                              : 'text-slate-500 hover:text-slate-700'
                          }`}
                          onClick={() => onStepChange(step.index)}
                        >
                          <div className="flex items-center gap-2 w-full">
                            <span className="text-left flex-1 font-medium">{step.title}</span>
                          </div>
                        </Button>

                        {step.subSteps && isGroupActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="ml-6 mt-1 space-y-1 border-l-2 border-slate-200 pl-2"
                          >
                            {step.subSteps.map((subStep) => (
                              <Button
                                key={subStep.title}
                                variant="ghost"
                                size="sm"
                                className={`w-full justify-start text-xs p-2 h-auto ${
                                  currentStep === subStep.index
                                    ? 'bg-blue-100 text-blue-700'
                                    : isStepCompleted(section.id, subStep.index)
                                    ? 'text-green-600'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                                onClick={() => onStepChange(subStep.index)}
                              >
                                <div className="flex items-center gap-2 w-full">
                                  {isStepCompleted(section.id, subStep.index) ? (
                                    <Check className="w-3 h-3" />
                                  ) : (
                                    <div className={`w-2.5 h-2.5 rounded-full border-2 ${
                                      currentStep === subStep.index
                                        ? 'border-blue-500 bg-blue-500'
                                        : 'border-slate-300'
                                    }`} />
                                  )}
                                  <span className="text-left flex-1">{subStep.title}</span>
                                </div>
                              </Button>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
