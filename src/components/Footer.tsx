import React from 'react';
import { Phone, MessageSquare, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { OFFICIAL_INFO } from '../data/portalData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work Opportunities', href: '#work' },
    { name: 'Registration Plans', href: '#plans' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Payment Info', href: '#payment-methods' },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-[#07111F] border-t border-white/[0.08] text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Purpose */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#10233F]/80 backdrop-blur-md border border-white/10 p-0.5 shadow-md flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-amber-300" />
              </div>
              <span className="font-brand font-black text-lg text-white uppercase tracking-wider">
                {OFFICIAL_INFO.brandName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              Providing assignment work opportunities for students and housewives. Handwriting & MS Word assignment tasks with guaranteed daily payouts.
            </p>

            {/* Leadership Names */}
            <div className="pt-2 border-t border-white/10 space-y-1 text-xs">
              <div className="text-slate-300">
                <span className="text-amber-400 font-bold">CEO:</span>{' '}
                <strong className="text-white font-bold">{OFFICIAL_INFO.ceo}</strong>
              </div>
              <div className="text-slate-300">
                <span className="text-amber-400 font-bold">Owner:</span>{' '}
                <strong className="text-white font-bold">{OFFICIAL_INFO.owner}</strong>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors font-medium text-slate-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contacts & WhatsApp Channel */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Contact Numbers
            </h4>

            <div className="space-y-2.5">
              <a
                href={`tel:${OFFICIAL_INFO.phone1}`}
                className="flex items-center gap-2.5 p-3 rounded-2xl liquid-glass-card liquid-glass-card-hover text-slate-200 hover:text-white transition-all shadow-md"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">Phone 1</div>
                  <div className="text-sm font-bold tracking-wide text-white">{OFFICIAL_INFO.phone1}</div>
                </div>
              </a>

              <a
                href={`tel:${OFFICIAL_INFO.phone2}`}
                className="flex items-center gap-2.5 p-3 rounded-2xl liquid-glass-card liquid-glass-card-hover text-slate-200 hover:text-white transition-all shadow-md"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">Phone 2</div>
                  <div className="text-sm font-bold tracking-wide text-white">{OFFICIAL_INFO.phone2}</div>
                </div>
              </a>
            </div>

            {/* WhatsApp Channel Link in Footer */}
            <div className="pt-2">
              <a
                href={OFFICIAL_INFO.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs transition-colors shadow-lg w-full justify-center"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Join Official WhatsApp Channel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Notice */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {OFFICIAL_INFO.brandName}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Registration Fee = One Time | Assignment = Daily</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
