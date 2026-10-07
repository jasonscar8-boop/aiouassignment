import React from 'react';
import { Sparkles, CheckCircle2, Inbox, Send, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/portalData';

interface HowItWorksSectionProps {
  onOpenRegister: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenRegister }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      case 'Inbox':
        return <Inbox className="w-6 h-6 text-blue-400" />;
      case 'Send':
        return <Send className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 lg:py-24 relative bg-[#0B1830] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Simple 4-Step Process
          </div>

          <h2 className="font-brand text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Get started in minutes with our transparent registration and assignment workflow.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            return (
              <div
                key={step.stepNumber}
                className="relative rounded-2xl bg-gradient-to-b from-[#10233F] to-[#07111F] border border-slate-700/80 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl group"
              >
                {/* Connecting arrow indicator for large screens */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 text-slate-400 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}

                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-brand text-2xl font-black text-amber-400/40 group-hover:text-amber-400 transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      {getStepIcon(step.iconName)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/80 text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                  <span>Step {step.stepNumber} of 04</span>
                  <span className="text-emerald-400 font-bold">Simple</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below steps */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl shadow-amber-500/15 transition-all"
          >
            <span>Start Registration Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
