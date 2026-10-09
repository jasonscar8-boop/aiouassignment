import React, { useState } from 'react';
import { CreditCard, Copy, Check, ShieldCheck, AlertCircle, Smartphone, ArrowRight, Sparkles } from 'lucide-react';
import { OFFICIAL_PAYMENT_ACCOUNTS, OFFICIAL_INFO } from '../data/portalData';

interface PaymentMethodsSectionProps {
  onOpenRegister: (planId?: string) => void;
}

export const PaymentMethodsSection: React.FC<PaymentMethodsSectionProps> = ({ onOpenRegister }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="payment-methods" className="py-16 lg:py-24 relative bg-[#07111F] border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-amber-950/60 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full mb-3">
            <CreditCard className="w-3.5 h-3.5 text-[#D4AF37]" />
            Official Payment Accounts
          </div>

          <h2 className="font-brand text-3xl sm:text-4xl font-black text-white tracking-tight">
            How to Pay Registration Fee
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Pay the one-time registration fee securely through Easypaisa or JazzCash directly to university management.
          </p>

          {/* Golden Reminder Badge */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-[#10233F]/70 backdrop-blur-md border border-amber-500/40 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Reminder: Registration Fee is <strong>One Time Only</strong> — Daily salary has zero deductions.</span>
          </div>
        </div>

        {/* 2 Official Payment Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {OFFICIAL_PAYMENT_ACCOUNTS.map((account) => {
            const isCopied = copiedId === account.id;

            return (
              <div
                key={account.id}
                className="rounded-3xl liquid-glass-panel border-2 border-white/10 hover:border-amber-400/50 p-6 sm:p-8 shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Account Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-500/40 px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                      <Smartphone className="w-3.5 h-3.5" />
                      {account.name}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                      Verified Official
                    </span>
                  </div>

                  {/* Account Title */}
                  <div className="mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Account Title / Name:
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white mt-0.5 tracking-tight">
                      {account.accountTitle}
                    </div>
                  </div>

                  {/* Account Number Box with Copy Button */}
                  <div className="p-4 rounded-2xl liquid-glass-input mb-5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Account / Mobile Number:
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-2xl sm:text-3xl font-black text-amber-300 font-mono tracking-wider">
                        {account.accountNumber}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(account.id, account.accountNumber)}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all ${
                          isCopied
                            ? 'bg-emerald-600 text-white'
                            : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md active:scale-95'
                        }`}
                        title="Copy account number"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Instructions */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {account.instructions}
                  </p>
                </div>

                {/* Card footer CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Secure Direct Transfer
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenRegister('standard')}
                    className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1 underline underline-offset-4"
                  >
                    <span>Submit Receipt</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Step Payment Guide Notice */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl liquid-glass-panel border border-amber-500/40 p-6 sm:p-7 shadow-xl backdrop-blur-2xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-3">
              <h4 className="text-sm sm:text-base font-bold text-white">
                Simple 3-Step Payment & Submission Verification Process
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 pt-1">
                <div className="liquid-glass-card p-3.5 rounded-2xl">
                  <div className="font-bold text-amber-300 mb-1">Step 1: Transfer Fee</div>
                  <p>Send the one-time fee (Rs. 150 - 500) via Easypaisa or JazzCash to either official account above.</p>
                </div>
                <div className="liquid-glass-card p-3.5 rounded-2xl">
                  <div className="font-bold text-amber-300 mb-1">Step 2: Save Receipt / TRX</div>
                  <p>Take a screenshot of the completed transaction receipt or copy your Transaction ID (TRX ID).</p>
                </div>
                <div className="liquid-glass-card p-3.5 rounded-2xl">
                  <div className="font-bold text-amber-300 mb-1">Step 3: Submit Order Form</div>
                  <p>Click Register, upload screenshot or send details on WhatsApp to receive assignments right away.</p>
                </div>
              </div>

              <div className="pt-2 text-center sm:text-left">
                <button
                  type="button"
                  onClick={() => onOpenRegister('standard')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wide text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl"
                >
                  <span>Open Student Registration & Order Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
