import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trophy, Sparkles, ArrowRight, Gift, BookOpen, Headphones } from 'lucide-react';
import NavigationControls from './NavigationControls';

export default function CompletionCelebration({ 
  userForm, 
  currentStep, 
  totalSteps, 
  onPrevious 
}) {
  const nextSteps = [
    {
      icon: BookOpen,
      title: 'Explore Documentation',
      description: 'Dive deeper into advanced features and best practices',
      action: 'Read Docs'
    },
    {
      icon: Headphones,
      title: 'Get Support',
      description: 'Connect with our support team for personalized assistance',
      action: 'Contact Support'
    },
    {
      icon: Gift,
      title: 'Join Community',
      description: 'Connect with other users and share experiences',
      action: 'Join Now'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-effect rounded-3xl p-8 md:p-12 shadow-xl text-center"
      >
        {/* Celebration Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            🎉 Congratulations!
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            You've successfully completed the onboarding process. Welcome to our platform, {userForm?.company_name || 'there'}!
          </p>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/60 rounded-2xl p-6 mb-8 border border-white/30"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Your Journey Summary</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📖</span>
              </div>
              <p className="font-medium text-slate-700">Learned Platform Basics</p>
              <p className="text-sm text-slate-500">Core concepts covered</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🎥</span>
              </div>
              <p className="font-medium text-slate-700">Watched Videos</p>
              <p className="text-sm text-slate-500">Tutorial content</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📝</span>
              </div>
              <p className="font-medium text-slate-700">Completed Profile</p>
              <p className="text-sm text-slate-500">Personal preferences</p>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">What's Next?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white/50 border-white/20 hover:bg-white/60 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{step.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {step.action}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Start Using the Platform
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="text-sm text-slate-500 mt-4">
            Need help? Our support team is here to assist you every step of the way.
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <NavigationControls
          currentStep={currentStep}
          totalSteps={totalSteps}
          onPrevious={onPrevious}
          isCompletionStep={true}
        />
      </motion.div>
    </div>
  );
}