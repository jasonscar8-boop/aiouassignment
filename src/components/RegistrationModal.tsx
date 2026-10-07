import React, { useState, useEffect } from 'react';
import { X, Check, MessageSquare, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { OFFICIAL_INFO, REGISTRATION_PLANS, getWhatsAppDirectUrl } from '../data/portalData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  selectedPlanId = 'standard',
}) => {
  const [planId, setPlanId] = useState(selectedPlanId);
  const [workType, setWorkType] = useState<'Handwriting' | 'MS Word' | 'Both'>('Both');
  const [candidateType, setCandidateType] = useState<'Student' | 'Housewife' | 'Other'>('Student');
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  useEffect(() => {
    if (selectedPlanId) {
      setPlanId(selectedPlanId);
    }
  }, [selectedPlanId]);

  if (!isOpen) return null;

  const currentPlan = REGISTRATION_PLANS.find((p) => p.id === planId) || REGISTRATION_PLANS[2];

  const handleWhatsAppSubmit = (targetPhone: string) => {
    const message = `Hello ALLMA IQBAL UNIVERSITY Management Team,\n\nI want to register for Assignment Work Opportunities.\n\n*Candidate Details:*\n• Name: ${fullName.trim() || 'Applicant'}\n• WhatsApp: ${whatsappNumber.trim() || 'My WhatsApp'}\n• Category: ${candidateType}\n• Selected Plan: ${currentPlan.name} (Fee: Rs. ${currentPlan.fee} One-Time | Daily Salary: Rs. ${currentPlan.dailySalary.toLocaleString()})\n• Preferred Work: ${workType} Assignments\n\nPlease provide me the registration and payment details to begin daily assignment work. Thank you!`;

    const url = getWhatsAppDirectUrl(targetPhone, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0B1830] rounded-2xl border border-amber-500/40 shadow-2xl p-6 md:p-8 max-h-[92vh] overflow-y-auto text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6 pr-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] bg-amber-950/80 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Official Registration Form
          </div>
          <h3 id="modal-headline" className="text-2xl font-bold tracking-tight text-white">
            Register for Assignment Work
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            Handwriting & MS Word Work Opportunities · ALLMA IQBAL UNIVERSITY
          </p>
          <div className="mt-2 text-xs text-[#D4AF37] bg-[#10233F] border border-amber-500/30 py-1 px-3 rounded-md inline-block">
            <strong>Registration Fee = One Time</strong> &nbsp;|&nbsp; <strong>Assignment = Daily</strong>
          </div>
        </div>

        {/* Step 1: Select Plan */}
        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            1. Select Your Registration Plan
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {REGISTRATION_PLANS.map((plan) => {
              const isSelected = plan.id === planId;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setPlanId(plan.id)}
                  className={`p-3 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? 'bg-blue-600/30 border-2 border-amber-400 text-white shadow-lg ring-1 ring-amber-400/30'
                      : 'bg-[#10233F] border-slate-700/80 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-2 right-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded shadow-xs">
                      POPULAR
                    </span>
                  )}
                  <div className="text-sm font-bold text-white flex items-center gap-1">
                    <span>{plan.emoji}</span> {plan.name}
                  </div>
                  <div className="text-xs text-amber-300 font-semibold mt-1">
                    Fee: Rs. {plan.fee}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Daily: <span className="font-bold text-emerald-400">Rs. {plan.dailySalary.toLocaleString()}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Work Type & Applicant Profile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              2. Assignment Type
            </label>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#10233F] rounded-xl border border-slate-700">
              {(['Handwriting', 'MS Word', 'Both'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setWorkType(type)}
                  className={`py-2 text-xs font-bold rounded-lg transition-colors ${
                    workType === type
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              3. Applicant Category
            </label>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#10233F] rounded-xl border border-slate-700">
              {(['Student', 'Housewife', 'Other'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCandidateType(cat)}
                  className={`py-2 text-xs font-bold rounded-lg transition-colors ${
                    candidateType === cat
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Step 3: Contact Details (Optional before WhatsApp) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Your Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Ayesha Khan / Muhammad Ali"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#10233F] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Your WhatsApp / Mobile Number
            </label>
            <input
              type="tel"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              placeholder="03XXXXXXXXX"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#10233F] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Summary Box */}
        <div className="p-3.5 rounded-xl bg-[#10233F] border border-amber-500/30 mb-6 flex items-start gap-3 text-xs">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-slate-300 space-y-0.5">
            <span className="font-bold text-white">Summary for {currentPlan.name} Plan: </span>
            Registration fee is <span className="text-amber-300 font-bold">Rs. {currentPlan.fee} (One Time Only)</span>.
            Your daily assignment earning will be <span className="text-emerald-400 font-bold">Rs. {currentPlan.dailySalary.toLocaleString()} daily</span>.
          </div>
        </div>

        {/* Action Buttons to send via WhatsApp or Call */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wide">
            Submit Registration to Official Team:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => handleWhatsAppSubmit(OFFICIAL_INFO.phone1)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp 1 ({OFFICIAL_INFO.phone1})</span>
            </button>

            <button
              type="button"
              onClick={() => handleWhatsAppSubmit(OFFICIAL_INFO.phone2)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp 2 ({OFFICIAL_INFO.phone2})</span>
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
            <span>Direct Call Available:</span>
            <div className="flex gap-3">
              <a href={`tel:${OFFICIAL_INFO.phone1}`} className="text-amber-400 font-bold hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" /> {OFFICIAL_INFO.phone1}
              </a>
              <a href={`tel:${OFFICIAL_INFO.phone2}`} className="text-amber-400 font-bold hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" /> {OFFICIAL_INFO.phone2}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
