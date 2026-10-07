import React from 'react';
import { MessageSquare, Bell, Sparkles, ExternalLink, ShieldCheck, Users } from 'lucide-react';
import { OFFICIAL_INFO } from '../data/portalData';

export const WhatsAppChannelSection: React.FC = () => {
  return (
    <section className="py-14 relative bg-[#07111F] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#10233F] via-[#0B1830] to-[#10233F] border border-emerald-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-1.5 rounded-full">
                <Bell className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                <span>OFFICIAL WHATSAPP COMMUNITY</span>
              </div>

              <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                JOIN OUR WHATSAPP CHANNEL
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-medium">
                Get assignment work updates and important information.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Official Channel
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Daily Task Alerts
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-400" /> Students & Housewives
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="shrink-0 w-full lg:w-auto">
              <a
                href={OFFICIAL_INFO.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base tracking-wider uppercase text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 border border-emerald-400/40 shadow-lg hover:shadow-emerald-600/30 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>JOIN WHATSAPP CHANNEL</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
