import React, { useState, useEffect } from 'react';
import { Sparkles, X, ArrowRight, ShieldCheck, CheckCircle2, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { OFFICIAL_INFO, REGISTRATION_PLANS, getWhatsAppDirectUrl } from '../data/portalData';

interface WelcomePopupProps {
  onOpenRegister: (planId?: string) => void;
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ onOpenRegister }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 1.8s delay if not dismissed recently in session
    const dismissed = sessionStorage.getItem('aiou_welcome_popup_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('aiou_welcome_popup_dismissed', 'true');
    setIsOpen(false);
  };

  const handleRegisterClick = (planId: string) => {
    handleDismiss();
    onOpenRegister(planId);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-lg liquid-glass-gold rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.8)] p-6 sm:p-7 text-slate-100 overflow-hidden transform animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-modal-title"
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.08] transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center pt-2 pb-4">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#D4AF37] bg-amber-950/80 border border-[#D4AF37]/40 px-3.5 py-1 rounded-full mb-2.5 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" />
            Official Admissions & Work Notice
          </div>

          <h3 id="welcome-modal-title" className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Welcome to {OFFICIAL_INFO.brandName}
          </h3>

          <p className="text-sm font-semibold text-blue-200 mt-1">
            Handwriting & MS Word Daily Assignment Opportunities
          </p>

          <p className="text-xs text-slate-300 mt-0.5">
            Open for all Students, Housewives & Home Workers across Pakistan
          </p>
        </div>

        {/* One-time Fee & Daily Salary Highlight Card */}
        <div className="my-3 p-4 rounded-2xl liquid-glass-subtle border border-amber-500/40 shadow-inner">
          <div className="grid grid-cols-2 gap-3 text-center divide-x divide-white/10">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Registration Fee
              </div>
              <div className="text-lg sm:text-xl font-black text-amber-300 mt-0.5">
                Rs. 150 - 500
              </div>
              <div className="text-[10px] font-extrabold text-emerald-400">
                ★ ONE TIME ONLY ★
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Daily Salary Earning
              </div>
              <div className="text-lg sm:text-xl font-black text-emerald-400 mt-0.5">
                Rs. 2,000 - 6,000
              </div>
              <div className="text-[10px] font-bold text-blue-300">
                Daily Payout
              </div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="space-y-2 my-4 text-xs text-slate-300 liquid-glass-input p-3.5 rounded-2xl">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>No Monthly Renewals:</strong> Pay one time, work daily with zero hidden deductions.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Direct CEO & Owner Oversight:</strong> {OFFICIAL_INFO.ceo} (CEO) & {OFFICIAL_INFO.owner} (Owner).</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Instant Online Submission:</strong> Fill order form with payment screenshot or via WhatsApp.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-1">
          <button
            type="button"
            onClick={() => handleRegisterClick('standard')}
            className="w-full py-3.5 px-4 rounded-xl font-black text-sm tracking-wide text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
          >
            <span>REGISTER NOW & CHOOSE PLAN</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href={getWhatsAppDirectUrl(
                OFFICIAL_INFO.phone1,
                'Hello ALLMA IQBAL UNIVERSITY Team, I saw the welcome notice and want to register for Assignment Work.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDismiss}
              className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-1.5 shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Inquire</span>
            </a>

            <button
              type="button"
              onClick={handleDismiss}
              className="py-2.5 px-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 font-semibold border border-white/10 backdrop-blur-md"
            >
              Explore Website First
            </button>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400 text-center flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Official Helpline: <strong>{OFFICIAL_INFO.phone1}</strong> / <strong>{OFFICIAL_INFO.phone2}</strong></span>
        </div>
      </div>
    </div>
  );
};
