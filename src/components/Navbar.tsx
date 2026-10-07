import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Sparkles, ChevronRight, BookOpen } from 'lucide-react';
import { OFFICIAL_INFO } from '../data/portalData';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Registration Plans', href: '#plans' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071123]/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl py-2.5'
          : 'bg-[#071123]/80 backdrop-blur-sm border-b border-slate-800 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-amber-600 p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#09152b] rounded-[10px] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col text-left">
              <span className="font-brand font-extrabold text-sm sm:text-base tracking-wider text-white uppercase group-hover:text-amber-200 transition-colors">
                {OFFICIAL_INFO.brandName}
              </span>
              <span className="text-[10px] sm:text-xs text-amber-400/90 font-medium tracking-wide">
                Assignment Work Opportunities
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${OFFICIAL_INFO.phone1}`}
              className="hidden xl:flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-300 transition-colors px-2 py-1"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{OFFICIAL_INFO.phone1}</span>
            </a>

            <button
              onClick={onOpenRegister}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 transition-all duration-200 shadow-md hover:shadow-amber-500/25 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>Register Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
            >
              Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071123]/98 border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-slate-800/80 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 shadow-md"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Register Now</span>
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${OFFICIAL_INFO.phone1}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call 1</span>
              </a>
              <a
                href={`tel:${OFFICIAL_INFO.phone2}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call 2</span>
              </a>
            </div>

            <a
              href={OFFICIAL_INFO.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Join Official WhatsApp Channel</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
