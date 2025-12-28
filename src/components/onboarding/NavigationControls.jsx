import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

export default function NavigationControls({ 
  currentStep, 
  totalSteps, 
  onPrevious, 
  onNext, 
  onComplete,
  canGoNext = true,
  isFormStep = false,
  isCompletionStep = false 
}) {
  const canGoBack = currentStep > 1;
  const isLastContentStep = currentStep === totalSteps - 2; // Before form step

  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/20">
      {/* Back Button */}
      <div>
        {canGoBack ? (
          <Button
            onClick={onPrevious}
            variant="outline"
            className="bg-white/50 border-white/30 hover:bg-white/70 text-slate-700 px-6 py-2 rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous Step
          </Button>
        ) : (
          <div></div> // Empty div to maintain flex spacing
        )}
      </div>

      {/* Step Counter */}
      <div className="text-center">
        <p className="text-sm text-slate-500">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      {/* Next/Complete Button */}
      <div>
        {isCompletionStep ? (
          <Button
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl transition-all duration-300"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Complete
          </Button>
        ) : isFormStep ? (
          <Button
            onClick={onComplete}
            disabled={!canGoNext}
            className={`px-6 py-2 rounded-xl transition-all duration-300 ${
              canGoNext
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Complete Onboarding
          </Button>
        ) : (
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl transition-all duration-300"
          >
            Next Step
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}