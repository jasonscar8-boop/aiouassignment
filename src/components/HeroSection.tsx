import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Phone, UserCheck } from 'lucide-react';
import { OFFICIAL_INFO } from '../data/portalData';
import { HeroIllustration } from './HeroIllustration';

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background radial gradient highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Leadership Announcement Bar */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-1.5 rounded-full bg-[#10233F]/70 backdrop-blur-xl border border-amber-500/40 text-xs text-slate-300 shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              {OFFICIAL_INFO.brandName}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1">
              <span className="text-slate-400">CEO:</span>
              <strong className="text-white font-semibold">{OFFICIAL_INFO.ceo}</strong>
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1">
              <span className="text-slate-400">Owner:</span>
              <strong className="text-white font-semibold">{OFFICIAL_INFO.owner}</strong>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & CTA Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <div className="space-y-3">
              <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
                ASSIGNMENT WORK <br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  OPPORTUNITIES
                </span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-200 tracking-tight">
                Handwriting & MS Word Assignment Work
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Work Opportunities Available for Students & Housewives
              </p>
            </div>

            {/* Crucial Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl liquid-glass-subtle text-left">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Registration Policy</div>
                  <div className="text-sm font-bold text-white">One Time Registration Fee</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl liquid-glass-subtle text-left">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Assignment Workflow</div>
                  <div className="text-sm font-bold text-emerald-400">Daily Assignment Work</div>
                </div>
              </div>
            </div>

            {/* The Two Attractive CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-sm tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 transition-all duration-300 shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <a
                href={OFFICIAL_INFO.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 border border-emerald-400/40 transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>JOIN WHATSAPP CHANNEL</span>
              </a>
            </div>

            {/* Quick Contact Numbers Callout */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-xs text-slate-400">
              <span className="text-slate-400 font-medium">Direct Inquiries:</span>
              <a
                href={`tel:${OFFICIAL_INFO.phone1}`}
                className="flex items-center gap-1.5 font-bold text-slate-200 hover:text-amber-300 transition-colors px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-md shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{OFFICIAL_INFO.phone1}</span>
              </a>
              <a
                href={`tel:${OFFICIAL_INFO.phone2}`}
                className="flex items-center gap-1.5 font-bold text-slate-200 hover:text-amber-300 transition-colors px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-md shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{OFFICIAL_INFO.phone2}</span>
              </a>
            </div>

          </div>

          {/* Right Hero Illustration */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <HeroIllustration />
          </div>

        </div>

      </div>
    </section>
  );
};
