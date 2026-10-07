import React from 'react';
import { CheckCircle2, FileText, PenTool, Sparkles, Award, TrendingUp } from 'lucide-react';

export const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-amber-500/15 to-indigo-600/20 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Main glass card container */}
      <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#0d1a33]/90 to-[#071122]/95 border border-slate-700/60 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
        
        {/* Top bar with system indicators */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-medium text-slate-400 tracking-wide">
              Assignment Workspace · Live Portal
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Daily Tasks Active
          </span>
        </div>

        {/* Workspace Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Left Column: MS Word Laptop Display */}
          <div className="md:col-span-7 bg-[#0b162c] rounded-xl border border-blue-500/30 p-3.5 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
            
            {/* Word Header */}
            <div className="flex items-center justify-between bg-[#193264] text-white px-3 py-1.5 rounded-lg text-xs font-medium mb-3 shadow-inner">
              <div className="flex items-center gap-1.5">
                <span className="bg-white text-[#193264] font-black text-[10px] w-4 h-4 rounded flex items-center justify-center">W</span>
                <span className="truncate max-w-[120px] font-semibold">Assignment_01.docx</span>
              </div>
              <span className="text-[10px] text-blue-200 bg-blue-900/60 px-1.5 py-0.5 rounded">MS Word Work</span>
            </div>

            {/* Word Document Canvas */}
            <div className="bg-white text-slate-900 rounded-lg p-3 text-left shadow-sm min-h-[140px] font-sans">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-2">
                <span className="text-[10px] font-bold text-slate-700 tracking-wider uppercase">ALLMA IQBAL UNIVERSITY</span>
                <span className="text-[9px] text-emerald-700 font-semibold bg-emerald-100 px-1.5 py-0.2 rounded">Daily Task</span>
              </div>
              
              <div className="text-[11px] font-bold text-blue-900 mb-1">
                Module 3: Educational Methodology & Notes
              </div>

              {/* Skeleton lines for text */}
              <div className="space-y-1.5 mb-2.5">
                <div className="h-1.5 bg-slate-200 rounded w-full" />
                <div className="h-1.5 bg-slate-200 rounded w-11/12" />
                <div className="h-1.5 bg-slate-200 rounded w-4/5" />
                <div className="h-1.5 bg-slate-200 rounded w-10/12" />
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[9px] text-slate-500">
                <span className="flex items-center gap-1 text-blue-700 font-medium">
                  <FileText className="w-3 h-3 text-blue-600" /> 1,250 Words Typed
                </span>
                <span className="text-emerald-700 font-bold">100% Completed</span>
              </div>
            </div>

            {/* Laptop Base Stand Hint */}
            <div className="mt-2 flex items-center justify-center">
              <div className="h-1.5 w-28 bg-slate-700 rounded-full" />
            </div>
          </div>

          {/* Right Column: Ruled Handwriting Notebook */}
          <div className="md:col-span-5 bg-gradient-to-br from-amber-50 to-amber-100/90 text-slate-900 rounded-xl p-3.5 shadow-lg border border-amber-300 relative">
            {/* Spiral binding rings at top */}
            <div className="flex justify-around -mt-5 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-1.5 h-4 bg-slate-700 rounded-full shadow-inner border border-slate-500" />
              ))}
            </div>

            <div className="flex items-center justify-between pb-1 mb-1 border-b border-amber-200">
              <div className="flex items-center gap-1 text-amber-900 font-bold text-[10px]">
                <PenTool className="w-3 h-3 text-amber-700" />
                <span>Handwritten Page</span>
              </div>
              <span className="text-[9px] font-semibold text-amber-800 bg-amber-200/80 px-1.5 py-0.5 rounded">
                Neat Ink
              </span>
            </div>

            {/* Ruled blue lines with cursive style text */}
            <div className="space-y-2 py-1 text-left">
              <div className="border-b border-blue-200 pb-0.5">
                <p className="text-[10px] text-blue-950 font-serif italic tracking-wide">
                  1. Principles of Modern Learning...
                </p>
              </div>
              <div className="border-b border-blue-200 pb-0.5">
                <p className="text-[10px] text-blue-900 font-serif italic tracking-wide">
                  2. Analysis of Assignment Questions...
                </p>
              </div>
              <div className="border-b border-blue-200 pb-0.5">
                <p className="text-[10px] text-blue-900 font-serif italic tracking-wide">
                  3. Key Summaries & Hand Notes...
                </p>
              </div>
              <div className="border-b border-blue-200 pb-0.5">
                <p className="text-[10px] text-blue-900 font-serif italic tracking-wide">
                  ✓ Verified by Examiner Staff
                </p>
              </div>
            </div>

            {/* Stylized Fountain Pen lying diagonally */}
            <div className="mt-2 pt-1 border-t border-amber-200/80 flex items-center justify-between text-[9px] text-amber-950">
              <span className="font-semibold text-amber-900">Penmanship Verified</span>
              <span className="font-bold text-emerald-800">Ready to Submit</span>
            </div>
          </div>
        </div>

        {/* Floating Stat Badges */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          <div className="bg-slate-800/60 rounded-lg p-2 border border-slate-700/50 flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400">Daily Salary</div>
              <div className="text-xs font-bold text-white">Rs. 2,000 - 6,000</div>
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-lg p-2 border border-slate-700/50 flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400">Registration Fee</div>
              <div className="text-xs font-bold text-emerald-400">One Time Only</div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-slate-800/60 rounded-lg p-2 border border-slate-700/50 flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400">Target Audience</div>
              <div className="text-xs font-bold text-amber-300">Students & Housewives</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
