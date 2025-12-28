
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Lightbulb, ArrowRight, ArrowLeft, Users, User, Building, GanttChart, Milestone, BookOpen, Package, LayoutGrid, Box, ListChecks, FormInput, Youtube, MailCheck, X, Server, UserX, PowerOff, Cpu, FileText, Mail, ExternalLink, Settings, Eye, Clock, Star, ThumbsUp, HelpCircle, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const HighLevelProcessLayout = ({ step }) => (
    <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-8">
            {step.title}
        </h2>
        <div className="max-w-5xl mx-auto bg-white/70 rounded-2xl p-4 border border-white/30 shadow-lg">
            <img
                src={step.imageUrl}
                alt="High Level Process Overview"
                className="w-full h-auto rounded-xl"
            />
        </div>
    </div>
);

const MilestoneLayout = ({ step }) => (
    <div className="text-center py-12">
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
        >
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <CheckCircle className="w-12 h-12 text-white" />
            </div>
        </motion.div>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-gradient mb-6"
        >
            {step.title}
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
        >
            {step.description}
        </motion.p>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-md text-slate-500 mt-6 font-semibold"
        >
            The next steps will focus on UI and audience targeting.
        </motion.p>
    </div>
);

const DealerSetupLayout = ({ step }) => (
    <div>
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {step.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {step.description}
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Card className="bg-white/60 p-8 border border-white/30 shadow-lg h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Settings className="w-6 h-6 text-white"/>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">{step.dealerPart.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-6 flex-grow">{step.dealerPart.description}</p>
                    <div className="space-y-3 mb-6">
                        {step.dealerPart.steps.map((s, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">{i+1}</div>
                                <span className="text-slate-700">{s}</span>
                            </div>
                        ))}
                    </div>
                    <a
                        href={step.dealerPart.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        {step.dealerPart.linkText}
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </Card>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                <Card className="bg-white/60 p-8 border border-white/30 shadow-lg h-full flex flex-col">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Eye className="w-6 h-6 text-white"/>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">{step.funnelPart.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-6 flex-grow">{step.funnelPart.description}</p>
                     <div className="space-y-3 mb-6">
                        {step.funnelPart.steps.map((s, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">{i+1}</div>
                                <span className="text-slate-700">{s}</span>
                            </div>
                        ))}
                    </div>
                    <a
                        href={step.funnelPart.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        {step.funnelPart.linkText}
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </Card>
            </motion.div>
        </div>

        {step.closingText && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 max-w-6xl mx-auto"
            >
                <Card className="bg-white/60 p-8 border border-white/30 shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{step.closingText.title}</h3>
                    <div className="space-y-4 text-slate-600 leading-relaxed">
                        {step.closingText.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                    {step.closingText.learnMore && (
                        <div className="mt-6">
                            <a
                                href={step.closingText.learnMore.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <BookOpen className="w-5 h-5" />
                                {step.closingText.learnMore.text}
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    )}
                </Card>
            </motion.div>
        )}
    </div>
);

const APIIntegrationLayout = ({ step }) => (
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl">🔌</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                {step.title}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                {step.description}
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
            {step.integrations.map((integration, index) => (
                <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`${integration.bgColor} rounded-2xl p-8 border-2 ${integration.bgColor === 'bg-blue-50' ? 'border-blue-200' : 'border-purple-200'} shadow-lg`}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center`}>
                            <span className="text-4xl">{integration.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">{integration.name}</h3>
                    </div>

                    <p className="text-slate-700 mb-6 leading-relaxed">
                        {integration.description}
                    </p>

                    <div className="bg-white/60 rounded-xl p-5 mb-6">
                        <h4 className="font-semibold text-slate-800 mb-3">What it does:</h4>
                        <ul className="space-y-3">
                            {integration.whatItDoes.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a
                        href={integration.docUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${integration.color} text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg w-full`}
                    >
                        {integration.docLabel}
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </motion.div>
            ))}
        </div>

        {step.supportInfo && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200"
            >
                <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-amber-800 mb-2">{step.supportInfo.title}</h4>
                        <p className="text-amber-700 leading-relaxed mb-4">
                            {step.supportInfo.description}
                        </p>
                        <div className="bg-white/60 rounded-xl p-4 mb-4">
                            <p className="font-semibold text-amber-800 mb-1">{step.supportInfo.supportChannel}</p>
                            <p className="text-sm text-amber-700">{step.supportInfo.supportChannelDescription}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white/60 rounded-xl p-5">
                    <h5 className="font-semibold text-amber-800 mb-3">When to reach out:</h5>
                    <ul className="space-y-2">
                        {step.supportInfo.whenToReachOut.map((reason, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                                <span className="text-amber-700">{reason}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        )}
    </div>
);

const QAStepLayout = ({ step }) => (
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl">🧪</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                {step.title}
            </h2 >
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                {step.description}
            </p>
        </div>

        <div className="space-y-8">
            {step.qaSteps.map((qaStep, index) => (
                <motion.div
                    key={qaStep.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-white/60 rounded-2xl p-8 border border-white/30 shadow-lg"
                >
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xl font-bold">{qaStep.step}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">{qaStep.title}</h3>
                            <p className="text-slate-700 leading-relaxed mb-6">{qaStep.description}</p>

                            {qaStep.options && (
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    {qaStep.options.map((option) => (
                                        <div
                                            key={option.number}
                                            className={`rounded-xl p-5 border-2 ${
                                                option.recommended
                                                    ? 'bg-green-50 border-green-300'
                                                    : 'bg-slate-50 border-slate-200'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                                                    option.recommended
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-slate-300 text-slate-700'
                                                }`}>
                                                    {option.number}
                                                </div>
                                                <h4 className={`font-semibold ${
                                                    option.recommended ? 'text-green-800' : 'text-slate-700'
                                                }`}>
                                                    {option.title}
                                                </h4>
                                            </div>
                                            <p className={`text-sm ${
                                                option.recommended ? 'text-green-700' : 'text-slate-600'
                                            }`}>
                                                {option.description}
                                            </p>
                                            {option.recommended && (
                                                <div className="mt-3 flex items-center gap-2 text-green-700 font-semibold text-sm">
                                                    <CheckCircle className="w-4 h-4" />
                                                    Recommended for QA
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {qaStep.action && (
                                <div className="bg-purple-50 rounded-xl p-4 mb-6 border-2 border-purple-200">
                                    <p className="font-semibold text-purple-800 flex items-center gap-2">
                                        <ArrowRight className="w-5 h-5" />
                                        {qaStep.action}
                                    </p>
                                </div>
                            )}

                            {qaStep.link && (
                                <a
                                    href={qaStep.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all mb-6"
                                >
                                    {qaStep.linkText}
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}

                            {qaStep.tasks && (
                                <div className="bg-slate-50 rounded-xl p-5">
                                    <ul className="space-y-3">
                                        {qaStep.tasks.map((task, taskIndex) => (
                                            <li key={taskIndex} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-slate-700">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {step.keyPoints && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: step.qaSteps.length * 0.15 + 0.2 }}
                className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200"
            >
                <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6" />
                    QA Checklist Summary
                </h3>
                <ul className="space-y-3">
                    {step.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-blue-800" dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </li>
                    ))}
                </ul>
            </motion.div>
        )}
    </div>
);

const GoLiveLayout = ({ step }) => {
    const iconMap = { Users, AlertCircle, Eye };
    
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                >
                    <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                        <span className="text-white text-5xl">🚀</span>
                    </div>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-gradient mb-6"
                >
                    {step.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto"
                >
                    {step.description}
                </motion.p>
            </div>

            {step.keyPoints && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/60 rounded-2xl p-8 border border-white/30 shadow-lg mb-12"
                >
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Launch Steps</h3>
                    <ul className="space-y-4">
                        {step.keyPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-lg text-slate-700" dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}

            {step.finalChecklist && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Final Pre-Launch Checklist</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {step.finalChecklist.map((item, index) => {
                            const Icon = iconMap[item.icon] || CheckCircle;
                            const colors = [
                                'from-blue-500 to-indigo-500 bg-blue-50 border-blue-200',
                                'from-amber-500 to-orange-500 bg-amber-50 border-amber-200',
                                'from-green-500 to-emerald-500 bg-green-50 border-green-200'
                            ];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.15 }}
                                    className={`rounded-2xl p-6 border-2 ${colors[index % colors.length].split(' ').slice(1).join(' ')}`}
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-r ${colors[index % colors.length].split(' ')[0]} rounded-xl flex items-center justify-center mb-4`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h4>
                                    <p className="text-slate-700">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            )}

            {step.contacts && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-200"
                >
                    <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-blue-500" />
                        Launch Support Contacts
                    </h4>
                    <div className="space-y-3">
                        {step.contacts.map((contact, index) => {
                            const parts = contact.split(': ');
                            const title = parts[0];
                            const name = parts[1];
                            return (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="font-semibold text-slate-700">{title}:</span>
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-mono text-sm">{name}</span>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

const SetupGuideLayout = ({ step, onStepComplete, onNavigateToGlossary, onNavigateToSection }) => {
    // Special handling for Purchase Funnel Studio step
    if (step.title === 'Sub Step 7: Create Purchase Funnel in Studio') {
        return (
            <div className="relative pl-12">
                <div className="absolute left-0 top-0 h-full w-1 bg-slate-200 rounded-full">
                    <motion.div
                        className="h-full bg-blue-500 origin-top"
                        style={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />
                </div>
                
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute left-[-24px] top-0 w-12 h-12 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center"
                >
                    <Package className="w-6 h-6 text-blue-500" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                    {step.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {step.description}
                </p>

                {step.dynamoLink && (
                    <Card className="mb-6 bg-green-50 border-green-200 p-6">
                        <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                            <Package className="w-5 h-5 text-green-600" />
                            Action: Create in Funnel Designer Studio
                        </h4>
                        <p className="text-green-700 mb-4">{step.dynamoLink.description}</p>
                        <a
                            href={step.dynamoLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                            {step.dynamoLink.buttonText || 'Open in Studio'}
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </Card>
                )}

                {step.keyPoints && step.keyPoints.length > 0 && (
                    <Card className="mb-6 bg-blue-50 border-blue-200 p-6">
                        <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600" />
                            Guidelines
                        </h4>
                        <ul className="space-y-3">
                            {step.keyPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span 
                                        className="leading-relaxed" 
                                        dangerouslySetInnerHTML={{ 
                                            __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                                        }} 
                                    />
                                </li>
                            ))}
                        </ul>
                    </Card>
                )}

                {step.translationLibrarySection && (
                    <Card className="mb-6 bg-purple-50 border-purple-200 p-6">
                        <h4 className="font-semibold text-purple-800 mb-4 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-purple-600" />
                            {step.translationLibrarySection.title}
                        </h4>
                        <p 
                            className="text-purple-700 mb-4 leading-relaxed whitespace-pre-line" 
                            dangerouslySetInnerHTML={{ 
                                __html: step.translationLibrarySection.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                            }}
                        />
                        {step.translationLibrarySection.videoUrl && (
                            <div className="relative overflow-hidden rounded-lg mt-4" style={{ paddingTop: '56.25%' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={step.translationLibrarySection.videoUrl}
                                    title="Translation Library Setup"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        )}
                    </Card>
                )}

                {step.contacts && (
                     <Card className="mt-4 bg-white/50 border-white/20 p-6">
                        <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-500" />
                            Points of Contact
                        </h4>
                        <div className="space-y-4">
                             {Array.isArray(step.contacts) && step.contacts.map((contact, index) => {
                                const parts = contact.split(': ');
                                const title = parts[0];
                                const names = parts[1].replace(/,/g, '').split(' ').filter(name => name.trim() !== '');
                                return (
                                    <div key={title} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                        <p className="font-semibold text-slate-700">{title}</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {names.map(name => (
                                                <span key={name} className="bg-blue-100 text-blue-800 text-sm font-mono font-medium px-3 py-1 rounded-full">{name}</span>
                                            ))}
                                        </div>
                                    </div>
                                );
                             })}
                        </div>
                     </Card>
                )}
            </div>
        );
    }

    // Default layout for other setup guide steps
    return (
        <div className="relative pl-12">
            <div className="absolute left-0 top-0 h-full w-1 bg-slate-200 rounded-full">
                <motion.div
                    className="h-full bg-blue-500 origin-top"
                    style={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
            </div>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute left-[-24px] top-0 w-12 h-12 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center"
            >
                <Milestone className="w-6 h-6 text-blue-500" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {step.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {step.description}
            </p>

            {step.learnMore && (
                <div className="mb-6">
                    <Button
                        variant="outline"
                        onClick={() => onNavigateToSection && onNavigateToSection(step.learnMore.sectionId, step.learnMore.stepIndex)}
                        className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300"
                    >
                        <BookOpen className="w-4 h-4 mr-2" />
                        {step.learnMore.text}
                    </Button>
                </div>
            )}

            {step.jiraForm && (
                <Card className="mb-6 bg-blue-50 border-blue-200 p-6">
                    <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                        <FormInput className="w-5 h-5 text-blue-600" />
                        Required: Jira Product Type Properties Form
                    </h4>
                    <p className="text-blue-700 mb-4">{step.jiraForm.description}</p>
                    <a
                        href={step.jiraForm.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                        Open Jira Form
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </Card>
            )}

            {step.dynamoLink && (
                <Card className="mb-6 bg-green-50 border-green-200 p-6">
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                        <Package className="w-5 h-5 text-green-600" />
                        Action: Create in Funnel Designer Studio
                    </h4>
                    <p className="text-green-700 mb-4">{step.dynamoLink.description}</p>
                    <a
                        href={step.dynamoLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                        {step.dynamoLink.buttonText || 'Open in Dynamo'}
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </Card>
            )}

            {step.glossaryLink && (
                <Card className="mb-6 bg-purple-50 border-purple-200 p-6">
                    <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-purple-600" />
                        Need Help Understanding Product Type Properties?
                    </h4>
                    <p className="text-purple-700 mb-3">{step.glossaryLink.text}</p>
                    <p className="text-sm text-purple-600 italic mb-4">{step.glossaryLink.note}</p>
                    <Button
                        onClick={onNavigateToGlossary}
                        variant="outline"
                        className="bg-purple-100 border-purple-300 text-purple-700 hover:bg-purple-200"
                    >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Go to Product Type Properties Guide
                    </Button>
                </Card>
            )}

            {step.keyPoints && step.keyPoints.length > 0 && (
                <Card className="mb-6 bg-blue-50 border-blue-200 p-6">
                    <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        Key Actions
                    </h4>
                    <ul className="space-y-3">
                        {step.keyPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </li>
                        ))}
                    </ul>
                </Card>
            )}

            {step.videoUrl && (
                <Card className="mt-6 bg-white/50 border-white/20 p-6">
                    <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <Youtube className="w-5 h-5 text-red-500" />
                        Video Tutorial
                    </h4>
                    <div className="relative overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={step.videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </Card>
            )}

            {step.contacts && (
                 <Card className="mt-4 bg-white/50 border-white/20 p-6">
                    <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-blue-500" />
                        Points of Contact
                    </h4>
                    <div className="space-y-4">
                         {Array.isArray(step.contacts) && step.contacts.map((contact, index) => {
                            const parts = contact.split(': ');
                            const title = parts[0];
                            const names = parts[1].replace(/,/g, '').split(' ').filter(name => name.trim() !== '');
                            return (
                                <div key={title} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p className="font-semibold text-slate-700">{title}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {names.map(name => (
                                            <span key={name} className="bg-blue-100 text-blue-800 text-sm font-mono font-medium px-3 py-1 rounded-full">{name}</span>
                                        ))}
                                    </div>
                                </div>
                            )
                         })}
                    </div>
                 </Card>
            )}
        </div>
    );
};

const SupportLayout = ({ step }) => (
    <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            {step.title}
        </h2 >
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
            {step.description}
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {step.keyPoints.map((point, index) => (
                <Card key={index} className="p-4 bg-white/50 border-white/20 text-left">
                    <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="font-medium text-slate-700" dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </div>
                </Card>
            ))}
        </div>
    </div>
);

const PlatformDomainsLayout = ({ step }) => (
    <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {step.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {step.description}
            </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            {step.keyPoints.map((point, index) => {
                const colors = ['bg-blue-100 text-blue-700', 'bg-green-100 text-green-700', 'bg-purple-100 text-purple-700', 'bg-orange-100 text-orange-700'];
                const icons = ['🎯', '🛒', '📦', '💰'];
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className={`p-4 h-full ${colors[index]}`}>
                            <div className="text-2xl mb-2">{icons[index]}</div>
                            <p className="font-semibold text-sm">{point.split(':')[0]}</p>
                            <p className="text-xs mt-1 opacity-80">{point.split(':')[1]}</p>
                        </Card>
                    </motion.div>
                );
            })}
        </div>
    </div>
);

const MandatoryBusinessModelLayout = ({ step }) => (
    <div>
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚠️</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {step.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {step.description}
            </p>
        </div>

        <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 max-w-4xl mx-auto">
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-2">🚨 CRITICAL REQUIREMENT</h3>
                <p className="text-red-700">This step cannot be skipped - your business model determines everything that follows</p>
            </div>
            <div className="space-y-4">
                {step.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-red-800 font-medium" dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const BusinessModelOptionsLayout = ({ step }) => (
    <div>
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {step.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
                {step.description}
            </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {step.businessModels.map((model, index) => {
                const colors = [
                    'from-green-500 to-emerald-500 bg-green-50 border-green-200',
                    'from-blue-500 to-indigo-500 bg-blue-50 border-blue-200',
                    'from-purple-500 to-pink-500 bg-purple-50 border-purple-200'
                ];
                return (
                    <div key={index} className={`rounded-2xl p-6 border-2 ${colors[index].split(' ').slice(2).join(' ')}`}>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-white text-xl">
                                {index === 0 ? '🔄' : index === 1 ? '💳' : '🚀'}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">{model.name}</h3>
                        <p className="text-sm text-slate-600 mb-4">{model.description}</p>

                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                                {model.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-t border-slate-200 pt-3">
                            <h4 className="text-sm font-semibold text-slate-700 mb-1">Best For:</h4>
                            <p className="text-xs text-slate-600">{model.bestFor}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

const BusinessModelDetailLayout = ({ step }) => (
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
            <div className={`w-16 h-16 ${
                step.title === 'Free Trial' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                step.title === 'Quota-based Features' ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                'bg-gradient-to-r from-purple-500 to-pink-500'
            } rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white text-2xl">
                    {step.title === 'Free Trial' ? '🎁' : 
                     step.title === 'Quota-based Features' ? '📊' : '⚙️'}
                </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {step.title}
            </h2 >
            <p className="text-lg text-slate-600 leading-relaxed">
                {step.description}
            </p>
        </div>

        {step.keyPoints && (
            <Card className="mb-8 bg-white/60 border-white/30 p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h3>
                <ul className="space-y-3">
                    {step.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </li>
                    ))}
                </ul>
            </Card>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
            {step.advantages && (
                <Card className="bg-green-50 border-green-200 p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                        <ThumbsUp className="w-5 h-5" />
                        Advantages
                    </h3>
                    <ul className="space-y-2">
                        {step.advantages.map((advantage, index) => (
                            <li key={index} className="flex items-start gap-2 text-green-700">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm">{advantage}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
            )}

            {step.considerations && (
                <Card className="bg-amber-50 border-amber-200 p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Considerations
                    </h3>
                    <ul className="space-y-2">
                        {step.considerations.map((consideration, index) => (
                            <li key={index} className="flex items-start gap-2 text-amber-700">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm">{consideration}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
            )}
        </div>

        {step.bestPractices && (
            <Card className="bg-blue-50 border-blue-200 p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Best Practices
                </h3>
                <ul className="space-y-3">
                    {step.bestPractices.map((practice, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                                {index + 1}
                            </span>
                            <span className="text-blue-700 leading-relaxed">{practice}</span>
                        </li>
                    ))}
                </ul>
            </Card>
        )}
    </div>
);

const ConsumersInActionLayout = ({ step }) => (
    <div>
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                {step.title}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
                {step.description}
            </p>
        </div>

        <div className="max-w-6xl mx-auto">
            <div className="bg-white/70 rounded-2xl p-4 md:p-6 border border-white/30 shadow-lg overflow-x-auto">
                <div className="min-w-[600px]">
                    <div className="grid grid-cols-5 gap-0 border border-slate-300 rounded-lg overflow-hidden">
                        {step.consumers.map((row, rowIndex) => (
                            row.map((consumer, colIndex) => (
                                <div
                                    key={`${rowIndex}-${colIndex}`}
                                    className="border-r border-b border-slate-300 last:border-r-0 p-3 md:p-4 text-center bg-white/50 hover:bg-white/70 transition-colors min-h-[60px] flex items-center justify-center"
                                >
                                    <span className="font-medium text-slate-700 text-sm md:text-base leading-tight">
                                        {consumer}
                                    </span>
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const AdditionalCapabilitiesLayout = ({ step }) => (
    <div>
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {step.title}
            </h2 >
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
                {step.description}
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {step.keyPoints.map((point, index) => {
                const [title, description] = point.split(': ');
                const colors = [
                    'from-blue-500 to-cyan-500 bg-blue-50 border-blue-200',
                    'from-green-500 to-emerald-500 bg-green-50 border-green-200',
                    'from-purple-500 to-violet-500 bg-purple-50 border-purple-200',
                    'from-orange-500 to-red-500 bg-orange-50 border-orange-200'
                ];
                const icons = ['🔄', '🔗', '⬆️', '🎯'];

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`rounded-2xl p-6 border-2 ${colors[index % colors.length].split(' ').slice(2).join(' ')}`}
                    >
                        <div className={`w-12 h-12 bg-gradient-to-r ${colors[index % colors.length].split(' ').slice(0, 2).join(' ')} rounded-xl flex items-center justify-center mb-4`}>
                            <span className="text-white text-xl">{icons[index]}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
                        <p className="text-sm text-slate-600">{description}</p>
                    </motion.div>
                );
            })}
        </div>
    </div>
);

const EmailsNotificationsLayout = ({ step }) => (
    <div>
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📧</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {step.title}
            </h2 >
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto mb-8">
                The platform handles <strong>transactional emails only</strong> - These are automated messages triggered by user actions or system events, such as purchase confirmations, billing issue alerts, and other important account updates.
            </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Email Triggers</h3>
            <p className="text-center text-slate-600 mb-6 max-w-2xl mx-auto">
                These emails are triggered by user actions or by the platform, such as for billing events.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/60 rounded-2xl p-6 border border-blue-200 shadow-lg"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg">👤</span>
                        </div>
                        <h4 className="text-lg font-bold text-blue-800">
                            User Actions examples
                        </h4>
                    </div>
                    <ul className="space-y-2 text-slate-700">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Turning off auto-renewal</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Updating payment methods</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Account modifications</span>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/60 rounded-2xl p-6 border border-green-200 shadow-lg"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg">⚙️</span>
                        </div>
                        <h4 className="text-lg font-bold text-green-800">
                           Platform events examples
                        </h4>
                    </div>
                    <ul className="space-y-2 text-slate-700">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Upcoming renewals</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Declined charges</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Payment confirmations</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-4xl mx-auto"
        >
            <Card className="bg-amber-50 border-amber-200 p-6 text-center">
                <p className="text-amber-800 leading-relaxed">
                    For blast or promotional emails, contact email marketing team
                </p>
            </Card>
        </motion.div>
    </div>
);

const EmailTriggersLayout = ({ step }) => (
    <div>
        <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MailCheck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {step.title}
            </h2>
        </div>

        <Card className="bg-white/60 p-8 rounded-2xl border border-white/20 shadow-lg mb-12">
            <p className="text-slate-600 leading-relaxed mb-8 text-center max-w-4xl mx-auto">{step.mainDescription}</p>

            <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-stretch font-sans">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-2"
                >
                    <Card className="p-4 bg-blue-50 border-blue-200 h-full flex flex-col">
                        <div className="font-bold text-blue-800 text-center mb-3">1. Event Triggers</div>
                        <div className="flex-grow flex flex-col items-center justify-center space-y-3">
                            <div className="flex items-center gap-2 text-sm text-blue-700">
                                <UserX className="w-5 h-5" /> Customer Action
                            </div>
                            <div className="flex items-center gap-2 text-sm text-blue-700">
                                <Server className="w-5 h-5" /> System Action
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="md:col-span-1 text-center text-slate-400 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 mx-auto" />
                </motion.div>

                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="md:col-span-2"
                >
                    <Card className="p-4 bg-indigo-50 border-indigo-200 h-full flex flex-col">
                         <div className="font-bold text-indigo-800 text-center mb-3">2. Platform handler</div>
                        <div className="flex-grow flex flex-col items-center justify-center text-indigo-700 space-y-2">
                             <Cpu className="w-8 h-8" />
                            <span className="text-sm">Event Detected</span>
                        </div>
                    </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="md:col-span-1 text-center text-slate-400 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 mx-auto" />
                </motion.div>

                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="md:col-span-2"
                >
                    <Card className="p-4 bg-purple-50 border-purple-200 h-full flex flex-col">
                         <div className="font-bold text-purple-800 text-center mb-3">3. Email Template Fetched</div>
                         <div className="flex-grow flex flex-col items-center justify-center text-purple-700 space-y-2">
                             <FileText className="w-8 h-8" />
                            <span className="text-sm text-center">by Responsys template id linked to the event</span>
                        </div>
                    </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="md:col-span-1 text-center text-slate-400 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 mx-auto" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="md:col-span-2"
                >
                    <Card className="p-4 bg-green-50 border-green-200 h-full flex flex-col">
                         <div className="font-bold text-green-800 text-center mb-3">4. Delivery</div>
                         <div className="flex-grow flex flex-col items-center justify-center text-green-700 space-y-2">
                             <Mail className="w-8 h-8" />
                            <span className="text-sm">Email Sent</span>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </Card>

        <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center mt-12">Events supported by the platform</h3>

        {step.emailEvents && (
            <div className="max-w-5xl mx-auto">
                <p className="text-slate-600 mb-8 text-center">{step.tableIntro}</p>
                <Card className="bg-white/60 p-4 border border-white/20 shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] text-left">
                            <thead>
                                <tr className="border-b-2 border-slate-200">
                                    <th className="p-4 text-sm font-semibold text-slate-600 tracking-wider uppercase">Event</th>
                                    <th className="p-4 text-sm font-semibold text-slate-600 tracking-wider uppercase">Trigger Action & Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                {step.emailEvents.map((event, index) => (
                                    <motion.tr
                                        key={index}
                                        className="border-b border-slate-200/80 last:border-b-0 hover:bg-slate-50/50 transition-colors"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                                    >
                                        <td className="p-4 font-semibold text-blue-800 align-top w-1/3">
                                            <span className="font-mono text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-md">{event.event}</span>
                                        </td>
                                        <td className="p-4 text-slate-700 align-top text-sm">{event.trigger}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        )}
    </div>
);

const MandatoryEmailsLayout = ({ step }) => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <div className="text-center mb-12">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">🚨</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                    {step.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                    {step.description}
                </p>
            </div>

            {step.mandatoryEvents && (
                <div className="max-w-4xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Mandatory Events</h3>
                    <Card className="bg-white/60 p-4 border border-white/20 shadow-lg">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] text-left">
                                <thead>
                                    <tr className="border-b-2 border-slate-200">
                                        <th className="p-4 text-sm font-semibold text-slate-600 tracking-wider uppercase w-1/3">Event</th>
                                        <th className="p-4 text-sm font-semibold text-slate-600 tracking-wider uppercase w-2/3">Explanation</th>
                                    </tr>
                               </thead>
                               <tbody>
                                    {step.mandatoryEvents.map((item, index) => (
                                        <motion.tr
                                            key={index}
                                            className="border-b border-slate-200/80 last:border-b-0 hover:bg-slate-50/50 transition-colors"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 + index * 0.05 }}
                                        >
                                            <td className="p-4 align-top">
                                                <span className="font-mono text-sm bg-slate-100 text-slate-700 font-semibold px-3 py-1 rounded-md">{item.event}</span>
                                            </td>
                                            <td className="p-4 text-slate-700 align-top">{item.explanation}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            )}

            {step.templateOptions && (
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{step.templateOptions.title}</h3>
                        <p className="text-slate-600">{step.templateOptions.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {step.templateOptions.options.map((option, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/60 rounded-2xl p-6 border border-white/20 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.15 }}
                            >
                                <div className={`w-12 h-12 bg-gradient-to-r ${index === 0 ? 'from-blue-500 to-indigo-500' : 'from-green-500 to-emerald-500'} rounded-xl flex items-center justify-center mb-4`}>
                                    <span className="text-white text-xl">{index === 0 ? '📋' : '✍️'}</span>
                                </div>
                                <h4 className="text-lg font-bold text-slate-800 mb-3">{option.title}</h4>
                                <p className="text-slate-700 mb-4">{option.description}</p>

                                {option.examples && (
                                    <div className="mt-6">
                                        <h5 className="text-md font-semibold text-slate-700 mb-4">Example Templates:</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {option.examples.map((imgUrl, imgIndex) => (
                                                <img
                                                    key={imgIndex}
                                                    src={imgUrl}
                                                    alt={`Email example ${imgIndex + 1}`}
                                                    className="rounded-lg shadow-md border border-slate-200 cursor-pointer hover:opacity-80 transition-opacity w-full h-auto object-contain"
                                                    onClick={() => setSelectedImage(imgUrl)}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {option.steps && (
                                    <div className="mt-6">
                                        <h5 className="text-md font-semibold text-slate-700 mb-4">Steps to Follow:</h5>
                                        <div className="space-y-3">
                                            {option.steps.map((stepText, stepIndex) => (
                                                <div key={stepIndex} className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <span className="text-white text-sm font-bold">{stepIndex + 1}</span>
                                                    </div>
                                                    <span className="text-slate-700 text-sm">{stepText}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {option.exampleTemplates && (
                                    <div className="mt-6">
                                        <h5 className="text-md font-semibold text-slate-700 mb-4">Example Templates:</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {option.exampleTemplates.examples.map((imgUrl, imgIndex) => (
                                                <img
                                                    key={imgIndex}
                                                    src={imgUrl}
                                                    alt={`Custom email example ${imgIndex + 1}`}
                                                    className="rounded-lg shadow-md border border-slate-200 cursor-pointer hover:opacity-80 transition-opacity w-full h-auto object-contain"
                                                    onClick={() => setSelectedImage(imgUrl)}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {option.note && (
                                    <div className="mt-4 p-4 bg-slate-100 rounded-xl border border-slate-200">
                                        <p className="text-sm text-slate-600 whitespace-pre-wrap">{option.note}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closeModal}>
                    <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Email template example"
                            className="w-full h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

const SummaryActionItemsLayout = ({ step }) => (
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {step.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                {step.description}
            </p>
        </div>
        <div className="space-y-6">
            {Array.isArray(step.actionSteps) && step.actionSteps.map((actionStep, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                >
                    <Card className="bg-white/60 p-6 border border-white/30 shadow-lg h-full">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">{actionStep.step}</div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-lg mb-2">{actionStep.title}</h4>
                                <p className="text-slate-600 mb-4">{actionStep.description}</p>
                                <div className="space-y-2">
                                    {Array.isArray(actionStep.details) && actionStep.details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span className="text-slate-700">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                                {actionStep.hasLink && (
                                  <div className="mt-4">
                                      <a
                                          href={actionStep.linkUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                                      >
                                          {actionStep.linkText}
                                          <ExternalLink className="w-4 h-4" />
                                      </a>
                                  </div>
                                )}
                            </div>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
    </div>
);

const DefaultLayout = ({ sectionData, step }) => (
    <div className="max-w-4xl mx-auto">
        <div className="text-center">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
                {sectionData.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mt-2 mb-4">
                {step.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                {step.description}
            </p>
        </div>

        {step.offering && (
            <Card className="p-6 bg-blue-50 border-blue-200 mt-6">
                <h4 className="font-semibold text-blue-800 mb-2">{step.offering.title}</h4>
                <p className="text-blue-700 whitespace-pre-line">{step.offering.description}</p>
            </Card>
        )}

        {step.dealer && (
            <Card className="p-6 bg-purple-50 border-purple-200 mt-6">
                <h4 className="font-semibold text-purple-800 mb-2">{step.dealer.title}</h4>
                <p className="text-purple-700 whitespace-pre-line">{step.dealer.description}</p>
                {step.dealer.learnMore && (
                    <a href={step.dealer.learnMore.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                        <Button variant="outline" className="bg-white/50 border-purple-300 flex items-center gap-2">
                           <BookOpen className="w-4 h-4" />
                           {step.dealer.learnMore.text}
                           <ExternalLink className="w-4 h-4" />
                        </Button>
                    </a>
                )}
            </Card>
        )}

        {step.keyPoints && step.keyPoints.length > 0 && (
            <div className="bg-white/50 rounded-2xl p-6 border border-white/20 max-w-3xl mx-auto mt-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    <h4 className="font-semibold text-slate-800">Key Takeaways</h4>
                </div>
                <ul className="space-y-3 text-slate-700 text-left">
                    {step.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);

const DynamicOfferingLayout = ({ sectionData, step }) => (
    <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
                {sectionData.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mt-2 mb-6">
                {step.title}
            </h2>
        </div>

        <div className="bg-white/70 rounded-2xl p-8 border border-white/30 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg font-bold">D</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-700">Dynamic Offering</h3>
            </div>
            <div className="w-full h-px bg-purple-200 mb-6"></div>
            <p className="text-lg text-slate-700 leading-relaxed">
                {step.description}
            </p>
        </div>

        {step.offering && (
            <div className="bg-white/70 rounded-2xl p-8 border border-white/30 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg font-bold">O</span>
                </div>
                    <h3 className="text-2xl font-bold text-emerald-700">{step.offering.title}</h3>
                </div>
                <div className="w-full h-px bg-emerald-200 mb-6"></div>
                <div className="space-y-4">
                    {step.offering.description.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-lg text-slate-700 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        )}
    </div>
);

const UserOfferingDealerLayout = ({ step }) => (
    <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 rounded-2xl p-8 border border-white/30 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-bold">U</span>
                </div>
                <h2 className="text-3xl font-bold text-purple-700">{step.userOffering.title}</h2>
            </div>
            <div className="w-full h-px bg-purple-200 mb-6"></div>
            <div className="space-y-4">
                {step.userOffering.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg text-slate-700 leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>

        <div className="bg-white/70 rounded-2xl p-8 border border-white/30 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-bold">D</span>
                </div>
                <h2 className="text-3xl font-bold text-emerald-700">{step.dealer.title}</h2>
            </div>
            <div className="w-full h-px bg-emerald-200 mb-6"></div>
            <div className="space-y-4">
                {step.dealer.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg text-slate-700 leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
            {step.dealer.learnMore && (
                <div className="mt-6">
                    <a href={step.dealer.learnMore.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                        <Button variant="outline" className="bg-white/50 border-emerald-300 flex items-center gap-2 text-emerald-800 hover:bg-emerald-50">
                           <BookOpen className="w-4 h-4" />
                           {step.dealer.learnMore.text}
                           <ExternalLink className="w-4 h-4" />
                        </Button>
                    </a>
                </div>
            )}
        </div>
    </div>
);

const WorkflowLayout = ({ step }) => (
    <div className="max-w-7xl mx-auto">
        {step.workflowExplanation && (
            <>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gradient mb-4">{step.workflowExplanation.title}</h2>
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        {step.workflowExplanation.description}
                    </p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 mb-12 border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Complete System Workflow</h3>

                    <div className="hidden lg:block">
                        <div className="grid grid-cols-8 gap-4">
                            {step.workflowExplanation.steps.map((workflowStep, index) => (
                                <React.Fragment key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.3 }}
                                        className={`col-span-2 ${workflowStep.bgColor} rounded-2xl p-6 border-2 border-opacity-30 shadow-lg flex flex-col`}
                                    >
                                        <div className={`w-16 h-16 bg-gradient-to-r ${workflowStep.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                                            <span className="text-white text-2xl">{workflowStep.icon}</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-800 text-center mb-2">{workflowStep.system}</h4>
                                        <h5 className="text-sm font-semibold text-slate-600 text-center mb-3">{workflowStep.title}</h5>
                                        <p className="text-xs text-slate-600 text-center mb-4 flex-grow">{workflowStep.description}</p>
                                        <div className="space-y-1">
                                            {workflowStep.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                                                    <span className="text-xs text-slate-600">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {index < step.workflowExplanation.steps.length - 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.3 + 0.2 }}
                                            className="col-span-1 flex flex-col items-center justify-center"
                                        >
                                            <div className="text-center">
                                                <ArrowRight className="w-8 h-8 text-slate-400 mb-2" />
                                                <div className="text-xs text-slate-500 font-medium mb-1">
                                                    {step.workflowExplanation.connections[index].label}
                                                </div>
                                                <div 
                                                    className="text-xs text-slate-400 leading-tight"
                                                    dangerouslySetInnerHTML={{ 
                                                        __html: step.workflowExplanation.connections[index].description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="lg:hidden space-y-6">
                        {step.workflowExplanation.steps.map((workflowStep, index) => (
                            <div key={index}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`${workflowStep.bgColor} rounded-2xl p-6 border-2 border-opacity-30 shadow-lg`}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${workflowStep.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                            <span className="text-white text-xl">{workflowStep.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800">{workflowStep.system}</h4>
                                            <h5 className="text-sm font-semibold text-slate-600">{workflowStep.title}</h5>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 mb-4">{workflowStep.description}</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {workflowStep.details.map((detail, detailIndex) => (
                                            <div key={detailIndex} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></div>
                                                <span className="text-xs text-slate-600">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {index < step.workflowExplanation.steps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.2 + 0.1 }}
                                        className="text-center py-3"
                                    >
                                        <ArrowRight className="w-6 h-6 text-slate-400 mx-auto rotate-90" />
                                        <div className="text-xs text-slate-500 font-medium mt-1">
                                            {step.workflowExplanation.connections[index].label}
                                        </div>
                                        <div 
                                            className="text-xs text-slate-400 leading-tight"
                                            dangerouslySetInnerHTML={{ 
                                                __html: step.workflowExplanation.connections[index].description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                                            }}
                                        />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {step.keyInsights && (
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {step.keyInsights.map((insight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + index * 0.1 }}
                                className="bg-white/60 rounded-2xl p-6 border border-white/20 shadow-lg text-center"
                            >
                                <div className="text-3xl mb-4">{insight.icon}</div>
                                <h4 className="text-lg font-bold text-slate-800 mb-2">{insight.title}</h4>
                                <p className="text-sm text-slate-600">{insight.description}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </>
        )}
    </div>
);

const ProductCatalogLayout = ({ step }) => (
    <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6 text-center">{step.title}</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-12 text-center">{step.description}</p>

        {step.keyPoints && (
            <div className="mb-12">
                 <div className="grid md:grid-cols-2 gap-6">
                    {step.keyPoints.map((point, index) => {
                        const [title, ...descriptionParts] = point.split(':');
                        const description = descriptionParts.join(':').trim();
                        const icons = [Package, LayoutGrid, Box, ListChecks];
                        const colors = [
                            'from-blue-500 to-cyan-500',
                            'from-purple-500 to-violet-500',
                            'from-green-500 to-emerald-500',
                            'from-amber-500 to-orange-500'
                        ];
                        const Icon = icons[index % icons.length];

                        return (
                            <motion.div
                                key={index}
                                className="bg-white/60 p-6 rounded-2xl border border-white/30 h-full shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={`w-12 h-12 bg-gradient-to-br ${colors[index % colors.length]} rounded-xl flex items-center justify-center flex-shrink-0 mb-4`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-slate-800 mb-2">{title}</h4>
                                <p className="text-slate-600 leading-relaxed">{description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        )}

        {step.hierarchy && (
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Hierarchy and Structure</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6 text-center">
                    Within the Product Catalog, there's a hierarchy and structure for offerings:
                </p>
                <div className="bg-white/50 border-white/20 rounded-2xl p-8 space-y-4">
                    {Object.entries(step.hierarchy).map(([level, items]) => (
                        <div key={level} className="flex items-start gap-4">
                            <div className="w-40 text-right font-semibold text-slate-700 pt-2 shrink-0">{level}</div>
                            <div className="flex flex-wrap gap-2 border-l-2 border-blue-300 pl-4">
                                {items.map(item => (
                                    <div key={item} className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-md text-sm">{item}</div>
                                ))}
                                <div className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-md text-sm">...</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
);

const ProductTypePropertiesLayout = ({ step, onStepChange }) => {
    const stepMapping = {
        0: 3,
        1: 4,
        2: 5,
        3: 6,
        4: 7,
        5: 7
    };

    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-8 text-center">{step.title}</h2>
            {step.description && <p className="text-lg text-slate-600 leading-relaxed mb-8 whitespace-pre-wrap text-center">{step.description}</p>}

            {step.list && (
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">The Product Type Properties are:</h3>
                    <div className="grid gap-4">
                        {step.list.map((item, index) => {
                            const colors = [
                                'from-blue-500 to-cyan-500 bg-blue-50 hover:bg-blue-100 border-blue-200',
                                'from-purple-500 to-violet-500 bg-purple-50 hover:bg-purple-100 border-purple-200',
                                'from-green-500 to-emerald-500 bg-green-50 hover:bg-green-100 border-green-200',
                                'from-amber-500 to-orange-500 bg-amber-50 hover:bg-amber-100 border-amber-200',
                                'from-red-500 to-pink-500 bg-red-50 hover:bg-red-100 border-red-200',
                                'from-indigo-500 to-purple-500 bg-indigo-50 hover:bg-indigo-100 border-indigo-200'
                            ];

                            return (
                                <motion.button
                                    key={index}
                                    onClick={() => onStepChange && onStepChange(stepMapping[index])}
                                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${colors[index % colors.length].split(' ').slice(2).join(' ')}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <span className="text-lg font-semibold text-slate-800">{item}</span>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-sm text-slate-600">Click to learn more</span>
                                                <ArrowRight className="w-4 h-4 text-slate-400" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            )}

            {step.properties && (
                <div className="space-y-8">
                    {step.properties.map((prop, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-start gap-2">
                            <span className="text-blue-600">{index + 1}.</span> {prop.title}
                            </h3>
                            <div className="pl-6 border-l-2 border-slate-200 ml-2">
                                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{prop.description}</p>
                                {prop.howToChoose && <h4 className="font-semibold text-slate-600 mt-4 mb-2">How to choose:</h4>}
                                {prop.choices && (
                                    <ul className="space-y-2 mt-2">
                                        {prop.choices.map((choice, cIndex) => (
                                            <li key={cIndex} className="flex items-start gap-2 text-slate-600">
                                                <span className="text-slate-400 mt-1">○</span>
                                                <span>{choice}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {prop.options && (
                                    <ul className="space-y-2 mt-4">
                                        {prop.options.map((option, oIndex) => (
                                            <li key={oIndex} className="flex items-start gap-2 text-slate-600">
                                                <span className="text-slate-400 mt-1">{oIndex === 0 ? 'i.' : 'ii.'}</span>
                                                <span>{option}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {prop.note && <p className="text-sm text-slate-500 italic mt-3">{prop.note}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {step.note && (
                <Card className="mt-8 p-6 bg-blue-50 border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">{step.note.title}</h4>
                    <ul className="space-y-2">
                        {step.note.points.map((point, pIndex) => (
                            <li key={pIndex} className="flex items-start gap-2 text-blue-700 text-sm">
                                <span className="text-blue-400 mt-1">○</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
            )}
        </div>
    );
};

const DynamoBackOfficeLayout = ({ step }) => (
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                {step.title}
            </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <div className="bg-white/60 rounded-2xl p-6 border border-white/30">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Current Capabilities</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        {step.currentCapabilities}
                    </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
                    <h3 className="text-xl font-semibold text-purple-700 mb-4">Future Expansion</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        {step.futureExpansion}
                    </p>
                </div>
            </div>

            <div className="bg-white/70 rounded-2xl p-4 border border-white/30 shadow-lg">
                <img
                    src={step.imageUrl}
                    alt="Dynamo Back Office Interface"
                    className="w-full h-auto rounded-xl shadow-md"
                />
            </div>
        </div>
    </div>
);

const FunnelDesignerLayout = ({ step }) => (
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                {step.title}
            </h2>
        </div>
        
        <div className="space-y-8">
            <div className="bg-white/60 rounded-2xl p-6 border border-white/30">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    {step.mainDescription}
                </p>

                {step.platformApproaches && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-3">{step.platformApproaches.title}</h4>
                        <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
                            {step.platformApproaches.methods.map((method, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: method.replace(/^\d\-\s*/, '') }} />
                            ))}
                        </ol>
                        <p 
                            className="text-slate-700 mb-4 italic" 
                            dangerouslySetInnerHTML={{ __html: step.platformApproaches.focus.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} 
                        />
                        <a href={step.platformApproaches.docsLink.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="bg-white/70 border-blue-300 text-blue-700 hover:bg-blue-100">
                                <BookOpen className="w-4 h-4 mr-2"/>
                                {step.platformApproaches.docsLink.text}
                                <ExternalLink className="w-4 h-4 ml-2"/>
                            </Button>
                        </a>
                    </div>
                )}
            </div>
            
            {(step.detailedDescription || step.workflow) && (
              <Card className="bg-white/60 border-white/30 p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">How the Studio Works</h3>
                {step.detailedDescription && (
                    <p className="text-slate-700 leading-relaxed mb-4">
                        {step.detailedDescription}
                    </p>
                )}
                {step.workflow && (
                    <p className="text-slate-700 leading-relaxed">
                        {step.workflow}
                    </p>
                )}
              </Card>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                {step.effortEstimate && (
                    <Card className="bg-blue-50 border-blue-200 p-6">
                        <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Effort Estimates
                        </h3>
                        <p className="text-blue-700">{step.effortEstimate}</p>
                    </Card>
                )}
                
                {step.advantages && (
                    <Card className="bg-green-50 border-green-200 p-6">
                        <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            {step.advantages.map((advantage, index) => (
                                <li key={index} className="flex items-start gap-2 text-green-700">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{advantage}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                )}
            </div>

            {step.scopeOfWork && (
                <Card className="bg-white/60 border-white/30 p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Scope of Work by Role
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                            <h4 className="font-semibold text-purple-800 mb-3">{step.scopeOfWork.pm.title}</h4>
                            <ul className="space-y-2">
                                {step.scopeOfWork.pm.tasks.map((task, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-sm text-purple-700">{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                            <h4 className="font-semibold text-amber-800 mb-3">{step.scopeOfWork.ux.title}</h4>
                            <ul className="space-y-2">
                                {step.scopeOfWork.ux.tasks.map((task, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-sm text-amber-700">{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-3">{step.scopeOfWork.developer.title}</h4>
                            <ul className="space-y-2">
                                {step.scopeOfWork.developer.tasks.map((task, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-sm text-indigo-700">{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>
            )}

            {step.customization && (
                <Card className="bg-gradient-to-r from-slate-50 to-gray-50 border-slate-200 p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        Advanced Customization
                    </h3>
                    <p className="text-slate-700 leading-relaxed">{step.customization}</p>
                </Card>
            )}

            {step.link && (
                <div className="text-center">
                    <a href={step.link.url} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
                            {step.link.text}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </a>
                </div>
            )}
        </div>
    </div>
);

const OfferingUILayout = ({ step }) => {
    const iconMap = { Star, ListChecks, HelpCircle, ThumbsUp };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                    {step.title}
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mb-6">
                    {step.description}
                </p>
                <a href={step.dealerLink.url} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {step.dealerLink.text}
                    </Button>
                </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {step.placements.map((placement, index) => {
                    const Icon = iconMap[placement.icon] || Star;
                    return (
                        <Card key={index} className="bg-white/60 border-white/30 p-6 flex flex-col">
                            <div className="flex items-center gap-3 mb-3">
                                <Icon className="w-6 h-6 text-blue-600" />
                                <h3 className="text-lg font-semibold text-slate-800">[Product Type Name] {placement.title}</h3>
                            </div>
                            <p className="text-slate-600 flex-grow">{placement.description}</p>
                            {placement.imageUrl && (
                                <div className="mt-4 rounded-lg overflow-hidden border border-slate-200 shadow-md">
                                    <img src={placement.imageUrl} alt={placement.title} className="w-full h-auto object-contain" />
                                </div>
                            )}
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

const PlatformConfigurationLayout = ({ step }) => (
    <div>
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚙️</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {step.title}
            </h2 >
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8"
               dangerouslySetInnerHTML={{ __html: step.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
            >
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg"
            >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white text-2xl font-bold">D</span>
                </div>
                <a
                    href="https://bo.wix.com/p3/backoffice/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-blue-800 mb-4 hover:text-blue-600 transition-colors cursor-pointer inline-block"
                >
                    Dynamo System
                </a>
                <p className="text-blue-700 mb-6 leading-relaxed">
                    Backend configuration system for setting up products, features, and business logic. This is where you define what you're selling and how it behaves.
                </p>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-blue-700 font-medium">Product Type Properties</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-blue-700 font-medium">Product Families & Features</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-blue-700 font-medium">Pricing & Business Rules</span>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-blue-100 rounded-xl">
                    <span className="text-blue-800 font-semibold text-sm">✅ Step 1: Configure Backend</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg"
            >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white text-2xl font-bold">F</span>
                </div>
                <a
                    href="https://bo.wix.com/p3/backoffice/dashboard?pt=00000000-0000-0000-0000-000000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-purple-800 mb-4 hover:text-purple-600 transition-colors cursor-pointer inline-block"
                >
                    Funnel Designer System
                </a>
                <p className="text-purple-700 mb-6 leading-relaxed">
                    Purchase funnel UI configuration system for building the user-facing purchase experience. This creates the interface customers interact with.
                </p>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-purple-700 font-medium">Package Picker Design</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-purple-700 font-medium">Purchase Flow Components</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-purple-700 font-medium">Checkout Experience</span>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-purple-100 rounded-xl">
                    <span className="text-purple-800 font-semibold text-sm">✅ Step 2: Build UI Flow</span>
                </div>
            </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 max-w-4xl mx-auto"
        >
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-2xl">⚠️</span>
                    <h4 className="text-xl font-bold text-amber-800">Important: Sequential Setup Required</h4>
                </div>
                <div className="flex items-center justify-center gap-8">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">1</div>
                        <span className="text-blue-700 font-medium">Dynamo First</span>
                    </div>
                    <ArrowRight className="w-8 h-8 text-amber-600" />
                    <div className="text-center">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2">2</div>
                        <span className="text-purple-700 font-medium">Then Funnel Designer</span>
                    </div>
                </div>
                <p className="text-center text-amber-700 mt-4">
                    You cannot build the purchase UI until the backend products are configured in Dynamo
                </p>
            </div>
        </motion.div>
    </div>
);

export default function SectionContent({
  sectionData,
  currentStep,
  onNext,
  onPrevious,
  onStepComplete,
  onStepChange,
  onNavigateToGlossary,
  onNavigateToSection
}) {
  const step = sectionData.steps[currentStep];
  const isLastStep = currentStep === sectionData.steps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = () => {
    onStepComplete(currentStep);
    onNext();
  };

  const handleStepJump = (stepIndex) => {
    if (stepIndex < sectionData.steps.length && stepIndex >= 0 && onStepChange) {
      onStepComplete(currentStep);
      onStepChange(stepIndex);
    }
  };

  const renderContent = () => {
    if (sectionData.id === 'setup_guide') {
      if (step.isAPIIntegrationSetup) {
        return <APIIntegrationLayout step={step} />;
      }
      
      if (step.isMilestone && step.finalChecklist) {
        return <GoLiveLayout step={step} />;
      }
      if (step.isMilestone) {
        return <MilestoneLayout step={step} />;
      }
      if (step.isDealerSetup) {
        return <DealerSetupLayout step={step} />;
      }
      if (step.isOfferingUISetup) {
        return <OfferingUILayout step={step} />;
      }
      if (step.isQAStep) {
        return <QAStepLayout step={step} />;
      }
      if (currentStep === 0) {
        return <HighLevelProcessLayout step={step} />;
      }
      
      if (step.title === 'Step 7: Setup Purchase Funnel') {
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl">🛒</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                Step 7: Setup Purchase Funnel
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                This step has two stages. First, you'll use the Dealer to define the content and UI components for your package picker. Second, you'll use the Funnel Designer Studio to build the complete purchase flow, from the package picker to the thank you page.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">Stage 1: Set Content in Dealer</h3>
                </div>
                
                <p className="text-blue-700 mb-6 leading-relaxed">
                  Define the package picker content and UI components through Dealer placements. This controls what users see when choosing between your plans.
                </p>

                <div className="bg-blue-100 rounded-xl p-5 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-3">What you'll configure:</h4>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span>Promoted product features</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span>Common plan features</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span>FAQ section content</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span>Recommended badges</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  onClick={() => onNavigateToSection && onNavigateToSection('setup_guide', 11)}
                >
                  Start with Content Setup
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800">Stage 2: Build Flow in Studio</h3>
                </div>
                
                <p className="text-purple-700 mb-6 leading-relaxed">
                  Use Funnel Designer Studio to create the visual purchase flow. This includes package picker layout, checkout components, and thank you page.
                </p>

                <div className="bg-purple-100 rounded-xl p-5 mb-6">
                  <h4 className="font-semibold text-purple-800 mb-3">What you'll build:</h4>
                  <ul className="space-y-3 text-purple-700">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span>Package picker UI</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span>Checkout flow</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span>Payment forms</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span>Thank you page</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3"
                  onClick={() => onNavigateToSection && onNavigateToSection('setup_guide', 17)}
                >
                  Continue to Studio Setup
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">⚠️</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-amber-800 mb-2">Important: Sequential Setup</h4>
                  <p className="text-amber-700 leading-relaxed">
                    You must complete Stage 1 (Dealer content setup) before moving to Stage 2 (Studio flow building). The Studio will pull content from Dealer placements, so having that content defined first is essential for a smooth workflow.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        );
      }
      
      if (currentStep === 6) { // This corresponds to Sub Step 7 in the example structure
        return <SummaryActionItemsLayout step={step} />;
      }
      return <SetupGuideLayout
        step={step}
        onStepComplete={onStepComplete}
        onNavigateToGlossary={onNavigateToGlossary}
        onNavigateToSection={onNavigateToSection}
      />;
    }

    if (sectionData.id === 'support') {
        return <SupportLayout step={step} />;
    }
    if (sectionData.id === 'meet_platform' && currentStep === 1) {
        return <PlatformDomainsLayout step={step} />;
    }
    if (sectionData.id === 'meet_platform' && currentStep === 2) {
        return <PlatformConfigurationLayout step={step} />;
    }
    if (sectionData.id === 'meet_platform' && currentStep === 3) {
        return <ConsumersInActionLayout step={step} />;
    }
    if (sectionData.id === 'things_to_know' && currentStep === 0) {
        return <MandatoryBusinessModelLayout step={step} />;
    }
    if (sectionData.id === 'things_to_know' && currentStep === 1) {
        return <BusinessModelOptionsLayout step={step} />;
    }
    if (sectionData.id === 'things_to_know' && [2, 3, 4].includes(currentStep)) {
        return <BusinessModelDetailLayout step={step} />;
    }
    if (sectionData.id === 'things_to_know' && currentStep === 5) {
        return <AdditionalCapabilitiesLayout step={step} />;
    }
    if (sectionData.id === 'things_to_know' && currentStep === 6) {
        return <EmailsNotificationsLayout step={step} />;
    }
    if (sectionData.id === 'things_to_know' && currentStep === 7) {
        return <EmailTriggersLayout step={step} />;
    }
    if (sectionData.id === 'things_to_know' && currentStep === 8) {
        return <MandatoryEmailsLayout step={step} />;
    }
    if (sectionData.id === 'things_to_know' && currentStep === 9) {
        return <SummaryActionItemsLayout step={step} />;
    }

    if (sectionData.id === 'glossary') {
        if (currentStep === 0) return <DynamicOfferingLayout sectionData={sectionData} step={step} />;
        if (currentStep === 1) return <ProductCatalogLayout step={step} />;
        if (currentStep === 2) return <ProductTypePropertiesLayout step={step} onStepChange={handleStepJump} />;
        if ([3, 4, 5, 6, 7].includes(currentStep)) return <ProductTypePropertiesLayout step={step} />;
        if (currentStep === 8) return <DynamoBackOfficeLayout step={step} />;
        if (currentStep === 9) return <UserOfferingDealerLayout step={step} />;
        if (currentStep === 10) return <FunnelDesignerLayout step={step} />;
        if (currentStep === 11) return <WorkflowLayout step={step} />;
    }

    return <DefaultLayout sectionData={sectionData} step={step} />;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        key={`${sectionData.id}-${currentStep}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-3xl p-8 md:p-12 shadow-xl"
      >
        {renderContent()}

        <div className="flex justify-between items-center mt-12 pt-6 border-t border-white/20">
          <div>
            {!isFirstStep ? (
              <Button
                onClick={onPrevious}
                variant="outline"
                className="bg-white/50 border-white/30 hover:bg-white/70 text-slate-700 px-6 py-2 rounded-xl"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
            ) : (
              <div></div>
            )}
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-500">
              {currentStep + 1} of {sectionData.steps.length}
            </p>
          </div>

          <div>
            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl"
            >
              {isLastStep ? 'Complete Section' : 'Next Step'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
