
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Sparkles, 
  Book, 
  AlertCircle, 
  BookOpen, 
  Settings, 
  HelpCircle,
  ArrowRight,
  Play,
  Clock,
  Users,
  Home // Added Home icon import
} from 'lucide-react';

export default function WelcomeHub({ onSectionSelect, onBackToHome, progress }) { // Added onBackToHome prop
  const learningPaths = [
    {
      id: 'meet_platform',
      title: 'Meet the Premium Platform',
      description: 'What it is and why it matters',
      icon: Sparkles,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      estimatedTime: '5 min', // Updated from '10 min'
      steps: 3
    },
    {
      id: 'things_to_know',
      title: 'Things to Know Before You Start',
      description: 'Key concepts, requirements, and mindset',
      icon: AlertCircle,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      estimatedTime: '8 min',
      steps: 4
    },
    {
      id: 'glossary',
      title: 'Glossary for Getting Started',
      description: 'Essential terms you\'ll encounter along the way',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      estimatedTime: '12 min',
      steps: 6
    },
    {
      id: 'setup_guide',
      title: 'Full Setup Guide',
      description: 'Step-by-step walkthrough to launch your offering',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      estimatedTime: '20 min', // Updated from '25 min'
      steps: 5 // Updated from 8
    },
    {
      id: 'support',
      title: 'Support & Resources',
      description: 'Get help and access additional resources',
      icon: HelpCircle,
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-700',
      estimatedTime: '2 min', // Updated from '5 min'
      steps: 2 // Updated from 3
    }
  ];

  const getCompletionPercentage = (sectionId) => {
    const section = learningPaths.find(p => p.id === sectionId);
    if (!section) return 0;
    
    const completedSteps = progress?.completed_steps?.[sectionId] || [];
    return Math.round((completedSteps.length / section.steps) * 100);
  };

  const isCompleted = (sectionId) => {
    return progress?.completed_sections?.includes(sectionId) || false;
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6"
      >
        <Button
          onClick={onBackToHome}
          variant="outline"
          className="bg-white/50 border-white/30 hover:bg-white/70 text-slate-700"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
          Welcome to Your Learning Journey
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Choose your path below to master our platform. Each section is designed to build upon the previous, 
          but you can also jump to specific topics that interest you most.
        </p>

        {/* Quick Start Option */}
        <div className="bg-white/60 rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
          <h3 className="font-semibold text-slate-800 mb-2">🚀 Quick Start</h3>
          <p className="text-sm text-slate-600 mb-4">
            Complete all sections for the full onboarding experience
          </p>
          <Button
            onClick={() => onSectionSelect('meet_platform')}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
          >
            Start Full Journey
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>

      {/* Learning Paths Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningPaths.map((path, index) => (
          <motion.div
            key={path.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className="cursor-pointer h-full bg-white/80 border-white/20 hover:bg-white/90 hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => onSectionSelect(path.id)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${path.color} rounded-xl flex items-center justify-center`}>
                    <path.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {isCompleted(path.id) && (
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      Completed
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {path.title}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {path.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {path.estimatedTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Book className="w-3 h-3" />
                    {path.steps} steps
                  </div>
                </div>

                {/* Progress Bar */}
                {getCompletionPercentage(path.id) > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>Progress</span>
                      <span>{getCompletionPercentage(path.id)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${path.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${getCompletionPercentage(path.id)}%` }}
                      />
                    </div>
                  </div>
                )}

                <Button
                  variant="outline"
                  className={`w-full ${path.bgColor} ${path.textColor} border-0 hover:opacity-80`}
                >
                  {getCompletionPercentage(path.id) > 0 ? 'Continue' : 'Start Learning'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12"
      >
        <div className="bg-white/60 rounded-2xl p-8 border border-white/20">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Need Help Getting Started?
          </h3>
          <p className="text-slate-600 mb-6">
            Our team is here to help you succeed. Don't hesitate to reach out with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" className="bg-white/70">
              <HelpCircle className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
            <Button variant="outline" className="bg-white/70">
              <Users className="w-4 h-4 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
