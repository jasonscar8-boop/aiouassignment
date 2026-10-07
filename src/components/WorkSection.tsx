import React from 'react';
import { PenTool, FileText, CalendarCheck, GraduationCap, Home, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { WORK_SERVICES } from '../data/portalData';

interface WorkSectionProps {
  onOpenRegister: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenRegister }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-amber-400" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-blue-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-emerald-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-indigo-400" />;
      case 'Home':
        return <Home className="w-6 h-6 text-pink-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="work" className="py-16 lg:py-24 relative bg-[#07111F]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Assignment Opportunities
          </div>

          <h2 className="font-brand text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Assignment Work Categories
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Tailored task options for every applicant. Whether you prefer handwriting on paper or typing in MS Word, daily work is ready for you.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_SERVICES.map((service, index) => {
            const isLastOnLarge = index === 4;
            const isStudentOrHousewife = service.id === 'student-work' || service.id === 'housewife-work';

            return (
              <div
                key={service.id}
                className={`group rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isStudentOrHousewife
                    ? 'bg-gradient-to-b from-[#183058] via-[#10233F] to-[#0B1830] border-amber-500/40 shadow-xl shadow-amber-500/5 hover:border-amber-400'
                    : 'bg-gradient-to-b from-[#10233F] to-[#0B1830] border-slate-800 hover:border-slate-700 shadow-lg'
                } ${isLastOnLarge ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      {getIcon(service.iconName)}
                    </div>

                    <span className="text-[11px] font-semibold text-amber-300 bg-amber-950/70 border border-amber-500/30 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-blue-300/90 mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80 mb-6">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onOpenRegister}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-amber-400/50 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Apply for this work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 via-amber-950/20 to-blue-900/30 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white">
              Suitable for both Students & Housewives
            </h4>
            <p className="text-xs text-slate-300">
              Complete tasks at home in your spare time. Receive assignments daily.
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0 shadow-md transition-colors"
          >
            Start Today
          </button>
        </div>

      </div>
    </section>
  );
};
