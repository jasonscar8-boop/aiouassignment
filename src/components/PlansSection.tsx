import React from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';
import { REGISTRATION_PLANS } from '../data/portalData';

interface PlansSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="py-16 lg:py-24 relative bg-[#0B1830]/90 backdrop-blur-xl border-y border-white/[0.08]">
      {/* Background glow behind standard card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-blue-900/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 border border-amber-500/40 px-3.5 py-1.5 rounded-full mb-3 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Transparent Pricing Structure
          </div>

          <h2 className="font-brand text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Registration Plans
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Choose the plan that suits your daily earning goals. Work from anywhere on handwriting or MS Word assignments.
          </p>

          {/* Prominent Golden Banner for "Registration Fee = One Time" & "Assignment = Daily" */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500/15 via-blue-600/20 to-amber-500/15 border-2 border-amber-400/50 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              Registration Fee = One Time
            </div>
            <div className="hidden sm:block text-slate-500 text-lg">|</div>
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Assignment = Daily
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
          {REGISTRATION_PLANS.map((plan) => {
            const isStandard = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl transition-all duration-300 overflow-hidden ${
                  isStandard
                    ? 'liquid-glass-gold lg:-translate-y-2'
                    : 'liquid-glass-card liquid-glass-card-hover'
                }`}
              >
                {/* Popular Badge */}
                {isStandard && (
                  <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-slate-950 font-black text-xs tracking-wider uppercase py-1.5 px-4 text-center shadow-md flex items-center justify-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-slate-950" />
                    <span>POPULAR</span>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Plan Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{plan.emoji}</span>
                        <h3 className="text-xl font-extrabold text-white tracking-wide">
                          {plan.name}
                        </h3>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-300 bg-white/[0.08] border border-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm">
                        Daily Payout
                      </span>
                    </div>

                    {/* Pricing Display */}
                    <div className="mb-5 pb-5 border-b border-white/10 space-y-3">
                      <div>
                        <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                          Registration Fee
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-amber-300">
                          Rs. {plan.fee}
                          <span className="text-xs font-bold text-slate-400 ml-1.5">
                            (One Time)
                          </span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 backdrop-blur-sm shadow-inner">
                        <div className="text-[11px] uppercase tracking-wider font-semibold text-emerald-300">
                          Salary
                        </div>
                        <div className="text-xl sm:text-2xl font-black text-emerald-400">
                          Rs. {plan.dailySalary.toLocaleString()}{' '}
                          <span className="text-xs font-bold text-emerald-200">Daily</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Plan Benefits:
                      </div>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isStandard ? 'text-amber-400' : 'text-blue-400'}`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Register Now Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectPlan(plan.id)}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg active:scale-95 ${
                        isStandard
                          ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-slate-950 hover:from-amber-300 hover:to-yellow-400 hover:shadow-amber-500/30'
                          : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20'
                      }`}
                    >
                      <span>REGISTER NOW</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Footer strip on card */}
                <div className="py-1.5 px-4 bg-slate-950/80 border-t border-slate-800 text-[10px] text-center text-slate-400 font-medium">
                  Registration Fee = One Time · Assignment = Daily
                </div>
              </div>
            );
          })}
        </div>

        {/* Assurance Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              All registration fees are one-time only. No periodic charges or renewal fees.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
