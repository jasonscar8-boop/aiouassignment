import React, { useState } from 'react';
import { Phone, MessageSquare, Copy, Check, Headphones, ArrowRight } from 'lucide-react';
import { OFFICIAL_INFO, getWhatsAppDirectUrl } from '../data/portalData';

export const ContactSection: React.FC = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => {
      setCopiedNumber(null);
    }, 2500);
  };

  const contacts = [
    {
      label: 'Official Contact 1',
      number: OFFICIAL_INFO.phone1,
      whatsappUrl: getWhatsAppDirectUrl(
        OFFICIAL_INFO.phone1,
        'Hello ALLMA IQBAL UNIVERSITY Team, I want to inquire and register for Assignment Work Opportunities.'
      ),
      subtext: 'Direct Phone & WhatsApp Support',
    },
    {
      label: 'Official Contact 2',
      number: OFFICIAL_INFO.phone2,
      whatsappUrl: getWhatsAppDirectUrl(
        OFFICIAL_INFO.phone2,
        'Hello ALLMA IQBAL UNIVERSITY Team, I want to inquire and register for Assignment Work Opportunities.'
      ),
      subtext: 'Direct Phone & WhatsApp Support',
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 relative bg-[#07111F] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-amber-950/60 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full mb-3 backdrop-blur-md shadow-sm">
            <Headphones className="w-3.5 h-3.5 text-[#D4AF37]" />
            Direct Communication
          </div>

          <h2 className="font-brand text-3xl sm:text-4xl font-black text-white tracking-tight">
            Contact Our Official Team
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Reach out directly for registration assistance, assignment details, or instant inquiries.
          </p>

          <div className="mt-4 text-xs text-slate-400 flex items-center justify-center gap-3">
            <span>CEO: <strong className="text-white">{OFFICIAL_INFO.ceo}</strong></span>
            <span>·</span>
            <span>Owner: <strong className="text-white">{OFFICIAL_INFO.owner}</strong></span>
          </div>
        </div>

        {/* 2 Large Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact) => (
            <div
              key={contact.number}
              className="rounded-3xl liquid-glass-panel p-7 sm:p-8 shadow-2xl flex flex-col justify-between hover:border-blue-500/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-950/80 border border-blue-500/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {contact.label}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{contact.subtext}</span>
                </div>

                <div className="my-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    Phone Number
                  </div>
                  {/* Large Clickable Phone Number Button */}
                  <a
                    href={`tel:${contact.number}`}
                    className="block text-2xl sm:text-3xl font-black text-white hover:text-amber-300 transition-colors tracking-wider mt-1 focus:outline-none"
                    title="Click to dial on phone"
                  >
                    {contact.number}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">
                    Tap to open phone dialer immediately
                  </p>
                </div>
              </div>

              {/* Action Buttons for this Number */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                {/* Large Call Button */}
                <a
                  href={`tel:${contact.number}`}
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call {contact.number}</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Message</span>
                </a>

                {/* Copy Number Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(contact.number)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 backdrop-blur-md shadow-sm transition-all"
                >
                  {copiedNumber === contact.number ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Number Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Number to Clipboard</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Channel Link Quick Banner in Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Looking for group updates?{' '}
            <a
              href={OFFICIAL_INFO.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-bold inline-flex items-center gap-1 ml-1"
            >
              <span>Join our official WhatsApp Channel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
