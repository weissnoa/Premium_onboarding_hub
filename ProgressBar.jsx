import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ProgressBar({ steps, currentStep, completedSteps, totalSteps }) {
  return (
    <div className="w-full max-w-6xl mx-auto mb-12">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-6 left-0 w-full h-0.5 bg-slate-200 -z-10">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
            initial={{ width: "0%" }}
            animate={{ 
              width: `${((completedSteps.length) / (totalSteps - 1)) * 100}%` 
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {steps.map((step) => {
          const isCompleted = completedSteps.includes(step.number);
          const isCurrent = currentStep === step.number;
          
          return (
            <div key={step.number} className="flex flex-col items-center relative text-center" style={{ flexBasis: `${100 / totalSteps}%` }}>
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  isCompleted
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                    : isCurrent
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : 'bg-white border-2 border-slate-200 text-slate-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-lg">{step.icon}</span>
                )}
              </motion.div>
              
              <div className="mt-3">
                <p className={`text-sm font-medium ${
                  isCurrent ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-slate-500'
                }`}>
                  Step {step.number}
                </p>
                <p className={`text-xs mt-1 w-24 ${
                  isCurrent ? 'text-slate-700' : 'text-slate-500'
                }`}>
                  {step.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}