import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, TrendingUp, Calendar } from 'lucide-react';
import { REGISTRATION_PLANS } from '../data/portalData';

interface EarningsCalculatorProps {
  onSelectPlan: (planId: string) => void;
}

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({ onSelectPlan }) => {
  const [selectedPlanId, setSelectedPlanId] = useState('standard');
  const [daysPerMonth, setDaysPerMonth] = useState(26); // standard work month in Pakistan

  const currentPlan = REGISTRATION_PLANS.find((p) => p.id === selectedPlanId) || REGISTRATION_PLANS[2];
  const monthlySalary = currentPlan.dailySalary * daysPerMonth;

  return (
    <section className="py-12 bg-[#07111F] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl liquid-glass-panel border border-amber-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full mb-2 backdrop-blur-sm shadow-sm">
                <Calculator className="w-3.5 h-3.5" />
                <span>Earnings Estimator</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Calculate Your Daily & Monthly Income
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                See how much you can earn based on your chosen assignment plan.
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-slate-400">One-Time Registration: </span>
              <span className="text-lg font-bold text-amber-300">Rs. {currentPlan.fee}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
            
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Select Plan */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
                  Select Package
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {REGISTRATION_PLANS.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        selectedPlanId === plan.id
                          ? 'bg-blue-600/40 border-amber-400 text-white font-bold ring-2 ring-amber-400/20 backdrop-blur-sm'
                          : 'bg-[#07111F]/60 backdrop-blur-md border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs font-bold">{plan.emoji} {plan.name}</div>
                      <div className="text-[11px] text-amber-300 font-semibold mt-0.5">Rs. {plan.dailySalary}/day</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for days */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
                  <span>Assignment Days Per Month:</span>
                  <span className="text-amber-400 font-bold bg-[#10233F]/80 border border-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm">
                    {daysPerMonth} Days
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="30"
                  value={daysPerMonth}
                  onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>10 days (Part-time)</span>
                  <span>26 days (Regular)</span>
                  <span>30 days (Full month)</span>
                </div>
              </div>
            </div>

            {/* Calculations Card */}
            <div className="lg:col-span-5 rounded-2xl liquid-glass-card border border-blue-500/40 p-6 shadow-xl text-center space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                  Daily Salary
                </span>
                <div className="text-3xl font-black text-emerald-400">
                  Rs. {currentPlan.dailySalary.toLocaleString()}
                  <span className="text-xs text-slate-400 font-medium"> / day</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-300 flex items-center justify-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Estimated Monthly Earnings ({daysPerMonth} Days)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                  Rs. {monthlySalary.toLocaleString()}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(currentPlan.id)}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Register for {currentPlan.name} Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
