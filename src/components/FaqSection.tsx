import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/portalData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-registration-fee');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 relative bg-[#0B1830] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-amber-950/60 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            Frequently Asked Questions
          </div>

          <h2 className="font-brand text-3xl sm:text-4xl font-black text-white tracking-tight">
            Common Inquiries & Answers
          </h2>

          <p className="mt-3 text-base text-slate-300">
            Clear and concise facts regarding registration fees, daily work, and candidate guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-[#10233F] ${
                  isOpen
                    ? 'border-[#D4AF37]/60 shadow-lg ring-1 ring-[#D4AF37]/20'
                    : 'border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#D4AF37] bg-amber-950/80 px-2.5 py-0.5 rounded border border-[#D4AF37]/30">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-600/30 text-amber-300' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-700/60 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
