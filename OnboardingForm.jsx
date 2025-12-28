import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { FormInput, Building, User, Target } from 'lucide-react';
import NavigationControls from './NavigationControls';

export default function OnboardingForm({ 
  formData, 
  onFormUpdate, 
  onNext, 
  onPrevious,
  currentStep,
  totalSteps,
  onMarkComplete 
}) {
  const [localFormData, setLocalFormData] = React.useState(formData || {
    company_name: '',
    role: '',
    experience_level: '',
    goals: [],
    team_size: '',
    use_case: ''
  });

  const handleInputChange = (field, value) => {
    const newData = { ...localFormData, [field]: value };
    setLocalFormData(newData);
    onFormUpdate(newData);
  };

  const handleGoalToggle = (goal) => {
    const currentGoals = localFormData.goals || [];
    const newGoals = currentGoals.includes(goal)
      ? currentGoals.filter(g => g !== goal)
      : [...currentGoals, goal];
    
    handleInputChange('goals', newGoals);
  };

  const isFormValid = () => {
    return localFormData.company_name && 
           localFormData.role && 
           localFormData.experience_level && 
           localFormData.team_size;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      onMarkComplete(3);
      onNext();
    }
  };

  const goalOptions = [
    'Streamline workflows',
    'Improve team collaboration',
    'Increase productivity',
    'Better project management',
    'Data analytics and insights',
    'Automate processes',
    'Scale operations',
    'Enhance customer experience'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-3xl p-8 md:p-12 shadow-xl"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FormInput className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Tell Us About Yourself
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Help us personalize your experience by sharing some information about your goals and needs.
          </p>
        </div>

        <div className="space-y-8">
          {/* Company Information */}
          <Card className="p-6 bg-white/50 border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-slate-800">Company Information</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={localFormData.company_name}
                  onChange={(e) => handleInputChange('company_name', e.target.value)}
                  placeholder="Your company name"
                  className="bg-white/70 border-white/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="team_size">Team Size</Label>
                <Select value={localFormData.team_size} onValueChange={(value) => handleInputChange('team_size', value)}>
                  <SelectTrigger className="bg-white/70 border-white/30">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 people</SelectItem>
                    <SelectItem value="6-20">6-20 people</SelectItem>
                    <SelectItem value="21-50">21-50 people</SelectItem>
                    <SelectItem value="51-200">51-200 people</SelectItem>
                    <SelectItem value="200+">200+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Personal Information */}
          <Card className="p-6 bg-white/50 border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-slate-800">Your Role & Experience</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="role">Your Role</Label>
                <Input
                  id="role"
                  value={localFormData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  placeholder="e.g., Product Manager, Developer, CEO"
                  className="bg-white/70 border-white/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select value={localFormData.experience_level} onValueChange={(value) => handleInputChange('experience_level', value)}>
                  <SelectTrigger className="bg-white/70 border-white/30">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Goals */}
          <Card className="p-6 bg-white/50 border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-slate-800">What are your main goals?</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {goalOptions.map((goal) => (
                <div key={goal} className="flex items-center space-x-2">
                  <Checkbox
                    id={goal}
                    checked={localFormData.goals?.includes(goal)}
                    onCheckedChange={() => handleGoalToggle(goal)}
                  />
                  <Label htmlFor={goal} className="text-sm font-medium text-slate-700 cursor-pointer">
                    {goal}
                  </Label>
                </div>
              ))}
            </div>
          </Card>

          {/* Use Case */}
          <Card className="p-6 bg-white/50 border-white/20">
            <div className="space-y-2">
              <Label htmlFor="use_case">How do you plan to use our platform?</Label>
              <Textarea
                id="use_case"
                value={localFormData.use_case}
                onChange={(e) => handleInputChange('use_case', e.target.value)}
                placeholder="Tell us about your specific use case and what you hope to achieve..."
                rows={4}
                className="bg-white/70 border-white/30"
              />
            </div>
          </Card>
        </div>

        {/* Navigation Controls */}
        <NavigationControls
          currentStep={currentStep}
          totalSteps={totalSteps}
          onPrevious={onPrevious}
          onNext={handleSubmit}
          onComplete={handleSubmit}
          canGoNext={isFormValid()}
          isFormStep={true}
        />
      </motion.div>
    </div>
  );
}