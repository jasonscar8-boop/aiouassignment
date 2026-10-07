import React, { useState } from 'react';
import { Phone, MessageSquare, Sparkles, ChevronUp, X } from 'lucide-react';
import { OFFICIAL_INFO, getWhatsAppDirectUrl } from '../data/portalData';

interface FloatingActionBarProps {
  onOpenRegister: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenRegister }) => {
  const [callMenuOpen, setCallMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Sticky Bottom Bar (Visible on screens < md) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07111F]/95 backdrop-blur-lg border-t border-slate-800 px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          {/* Quick Call */}
          <button
            type="button"
            onClick={() => setCallMenuOpen(!callMenuOpen)}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#10233F] text-slate-200 active:bg-[#18345c] text-[11px] font-bold border border-slate-700/80"
          >
            <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
            <span>Call Team</span>
          </button>

          {/* Quick WhatsApp */}
          <a
            href={getWhatsAppDirectUrl(
              OFFICIAL_INFO.phone1,
              'Hello ALLMA IQBAL UNIVERSITY, I want to register for Assignment Work.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-600 text-white active:bg-emerald-700 text-[11px] font-bold shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-white mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* Register Button */}
          <button
            type="button"
            onClick={onOpenRegister}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-[11px] shadow-lg active:scale-95"
          >
            <Sparkles className="w-4 h-4 fill-slate-950 mb-0.5" />
            <span>Register</span>
          </button>
        </div>
      </div>

      {/* Call Dial Choice Popover on Mobile */}
      {callMenuOpen && (
        <div className="md:hidden fixed bottom-16 left-3 right-3 z-50 p-4 rounded-2xl bg-[#0B1830] border border-slate-700 shadow-2xl animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-200">Choose Contact Number to Call:</span>
            <button
              onClick={() => setCallMenuOpen(false)}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={`tel:${OFFICIAL_INFO.phone1}`}
              onClick={() => setCallMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-[#10233F] text-white border border-slate-700 text-sm font-bold active:bg-[#163056]"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {OFFICIAL_INFO.phone1}</span>
              </div>
              <span className="text-[10px] text-amber-300 bg-amber-950/80 border border-amber-500/30 px-2 py-0.5 rounded">Line 1</span>
            </a>

            <a
              href={`tel:${OFFICIAL_INFO.phone2}`}
              onClick={() => setCallMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-[#10233F] text-white border border-slate-700 text-sm font-bold active:bg-[#163056]"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {OFFICIAL_INFO.phone2}</span>
              </div>
              <span className="text-[10px] text-amber-300 bg-amber-950/80 border border-amber-500/30 px-2 py-0.5 rounded">Line 2</span>
            </a>
          </div>
        </div>
      )}

      {/* Desktop Floating WhatsApp Button (bottom right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        <a
          href={OFFICIAL_INFO.whatsappChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs shadow-xl transition-all transform hover:-translate-y-0.5 border border-emerald-400/30"
          title="Join WhatsApp Channel"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp Channel</span>
        </a>
      </div>
    </>
  );
};
