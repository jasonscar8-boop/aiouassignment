import React from 'react';
import { UserCheck, Shield, Phone, Sparkles } from 'lucide-react';
import { OFFICIAL_INFO } from '../data/portalData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 relative bg-[#07111F] border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 border border-amber-500/40 px-3.5 py-1.5 rounded-full mb-3 backdrop-blur-md shadow-sm">
            <UserCheck className="w-3.5 h-3.5" />
            Leadership & Purpose
          </div>

          <h2 className="font-brand text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Us
          </h2>

          <p className="mt-4 text-lg sm:text-xl font-medium text-blue-200">
            Providing assignment work opportunities for students and housewives.
          </p>

          <p className="mt-2 text-sm text-slate-300 max-w-2xl mx-auto">
            ALLMA IQBAL UNIVERSITY connects learners, students, and home-based workers with flexible handwriting and MS Word assignments featuring daily salary payouts.
          </p>
        </div>

        {/* Leadership Cards for CEO and Owner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          
          {/* CEO Card */}
          <div className="rounded-3xl liquid-glass-gold p-7 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-500 p-0.5 shadow-lg flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#0B1830] rounded-[14px] flex items-center justify-center font-bold text-xl text-amber-300">
                  AS
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-500/30">
                  Chief Executive Officer
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  CEO: {OFFICIAL_INFO.ceo}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  ALLMA IQBAL UNIVERSITY
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-300 flex items-center justify-between">
              <span>Direct Oversight</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" /> Management
              </span>
            </div>
          </div>

          {/* Owner Card */}
          <div className="rounded-3xl liquid-glass-card liquid-glass-card-hover border border-blue-500/40 p-7 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 p-0.5 shadow-lg flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#0B1830] rounded-[14px] flex items-center justify-center font-bold text-xl text-blue-300">
                  KA
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300 bg-blue-950/80 px-2.5 py-0.5 rounded border border-blue-500/30">
                  Portal Owner
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  Owner: {OFFICIAL_INFO.owner}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  ALLMA IQBAL UNIVERSITY
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-300 flex items-center justify-between">
              <span>Administrative Operations</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" /> Verified
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
