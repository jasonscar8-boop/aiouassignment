import React, { useState, useEffect } from 'react';
import { 
  X, Check, MessageSquare, Phone, ArrowRight, ShieldCheck, Sparkles, 
  Upload, CheckCircle2, AlertCircle, Copy, CreditCard, RefreshCw, FileText
} from 'lucide-react';
import { OFFICIAL_INFO, REGISTRATION_PLANS, OFFICIAL_PAYMENT_ACCOUNTS, getWhatsAppDirectUrl } from '../data/portalData';
import { StudentRegistrationOrder } from '../types';

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
  // Plan & Category Selection
  const [planId, setPlanId] = useState(selectedPlanId);
  const [workType, setWorkType] = useState<'Handwriting' | 'MS Word' | 'Both'>('Both');
  const [candidateType, setCandidateType] = useState<'Student' | 'Housewife' | 'Other'>('Student');
  
  // Student Details
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [studentCity, setStudentCity] = useState('');
  const [qualification, setQualification] = useState('');

  // Payment & Proof Details
  const [paymentMethod, setPaymentMethod] = useState<'Easypaisa (SHABANA NAZ)' | 'JazzCash (SHABANA NAZ)'>('Easypaisa (SHABANA NAZ)');
  const [transactionId, setTransactionId] = useState('');
  const [senderAccount, setSenderAccount] = useState('');
  
  // Screenshot Upload State
  const [screenshotFileName, setScreenshotFileName] = useState<string | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  // Form Validation & Submission State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedOrder, setSubmittedOrder] = useState<StudentRegistrationOrder | null>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'payment-info'>('form');

  useEffect(() => {
    if (selectedPlanId) {
      setPlanId(selectedPlanId);
    }
  }, [selectedPlanId]);

  if (!isOpen) return null;

  const currentPlan = REGISTRATION_PLANS.find((p) => p.id === planId) || REGISTRATION_PLANS[2];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, screenshot: 'File size must be under 8MB' }));
        return;
      }
      setScreenshotFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotPreview(reader.result as string);
        setErrors((prev) => {
          const next = { ...prev };
          delete next.screenshot;
          return next;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    if (!whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp / Mobile number is required';
    } else {
      const cleanPhone = whatsappNumber.replace(/\D/g, '');
      if (cleanPhone.length < 10 || cleanPhone.length > 13) {
        newErrors.whatsappNumber = 'Please enter a valid Pakistani number (e.g. 03292037816)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const orderId = `AIOU-${Date.now().toString().slice(-6)}`;
    const newOrder: StudentRegistrationOrder = {
      id: orderId,
      fullName: fullName.trim(),
      whatsappNumber: whatsappNumber.trim(),
      studentCity: studentCity.trim() || 'Not specified',
      qualification: qualification.trim() || 'Not specified',
      candidateType,
      workType,
      planId: currentPlan.id,
      planName: currentPlan.name,
      planFee: currentPlan.fee,
      planDailySalary: currentPlan.dailySalary,
      paymentMethod,
      transactionId: transactionId.trim() || undefined,
      senderAccount: senderAccount.trim() || undefined,
      screenshotFileName: screenshotFileName || undefined,
      screenshotBase64: screenshotPreview || undefined,
      submissionDate: new Date().toLocaleDateString('en-PK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      status: 'Pending Verification',
    };

    setSubmittedOrder(newOrder);
  };

  const handleWhatsAppOrderSubmit = (targetPhone: string) => {
    const trxText = transactionId.trim() ? `\n• Transaction/TRX ID: ${transactionId.trim()}` : '';
    const senderText = senderAccount.trim() ? `\n• Paid From (Sender No/Name): ${senderAccount.trim()}` : '';
    const fileText = screenshotFileName ? `\n• Screenshot: Uploaded (${screenshotFileName})` : '';
    const cityText = studentCity.trim() ? `\n• City/Location: ${studentCity.trim()}` : '';

    const message = `*ALLMA IQBAL UNIVERSITY — NEW ASSIGNMENT REGISTRATION*

*Student / Applicant Details:*
• Name: ${fullName.trim() || 'Applicant'}
• WhatsApp: ${whatsappNumber.trim() || 'My WhatsApp'}${cityText}
• Category: ${candidateType}
• Preferred Work: ${workType} Assignments

*Selected Package:*
• Plan: ${currentPlan.name} Plan
• Registration Fee: Rs. ${currentPlan.fee} (One Time Only)
• Daily Salary: Rs. ${currentPlan.dailySalary.toLocaleString()} Daily

*Payment & Verification Details:*
• Payment Method: ${paymentMethod}${trxText}${senderText}${fileText}

Please verify my registration fee and activate my daily assignment allotting portal. Thank you!`;

    const url = getWhatsAppDirectUrl(targetPhone, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setSubmittedOrder(null);
    setTransactionId('');
    setSenderAccount('');
    setScreenshotFileName(null);
    setScreenshotPreview(null);
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0B1830] rounded-3xl border-2 border-amber-500/50 shadow-2xl p-5 sm:p-7 md:p-8 max-h-[94vh] overflow-y-auto text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5 pr-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] bg-amber-950/80 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Official Registration & Order Form
          </div>
          <h3 id="modal-headline" className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Register for Assignment Work
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Handwriting & MS Word Work Opportunities · ALLMA IQBAL UNIVERSITY
          </p>
          <div className="mt-2 text-xs text-[#D4AF37] bg-[#10233F] border border-amber-500/30 py-1 px-3 rounded-md inline-block">
            <strong>Registration Fee = One Time</strong> &nbsp;|&nbsp; <strong>Assignment = Daily</strong>
          </div>
        </div>

        {/* Navigation Tabs if not submitted */}
        {!submittedOrder && (
          <div className="flex rounded-xl bg-[#07111F] p-1 mb-5 border border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'form'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. Registration & Payment Form
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('payment-info')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'payment-info'
                  ? 'bg-amber-600/90 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              2. Official Payment Accounts
            </button>
          </div>
        )}

        {/* ================= IF SUBMISSION SUCCESS CONFIRMATION ================= */}
        {submittedOrder ? (
          <div className="space-y-6 animate-in zoom-in-95 duration-200">
            <div className="p-6 rounded-2xl bg-[#10233F] border-2 border-emerald-500/50 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                Registration Order Submitted!
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Thank you <strong className="text-white">{submittedOrder.fullName}</strong>. Your registration order is saved with Reference ID: <span className="font-mono text-amber-300 font-bold">{submittedOrder.id}</span>.
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold">
                Status: Pending Verification by University Staff
              </div>
            </div>

            {/* Order Summary Receipt Box */}
            <div className="rounded-2xl bg-[#07111F] border border-slate-700/80 p-5 text-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                <span>Order Summary Receipt</span>
                <span>{submittedOrder.submissionDate}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-slate-300">
                <div>
                  <span className="text-slate-500 block">Applicant Name:</span>
                  <strong className="text-white">{submittedOrder.fullName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">WhatsApp Number:</span>
                  <strong className="text-white">{submittedOrder.whatsappNumber}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Selected Plan:</span>
                  <strong className="text-amber-300">{submittedOrder.planName} Plan</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">One-Time Fee:</span>
                  <strong className="text-white">Rs. {submittedOrder.planFee}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Daily Salary:</span>
                  <strong className="text-emerald-400 font-bold">Rs. {submittedOrder.planDailySalary.toLocaleString()} / Day</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Work Preference:</span>
                  <strong className="text-white">{submittedOrder.workType} Assignments</strong>
                </div>
                {submittedOrder.transactionId && (
                  <div>
                    <span className="text-slate-500 block">Transaction ID:</span>
                    <strong className="text-amber-300 font-mono">{submittedOrder.transactionId}</strong>
                  </div>
                )}
                {submittedOrder.senderAccount && (
                  <div>
                    <span className="text-slate-500 block">Paid From:</span>
                    <strong className="text-white">{submittedOrder.senderAccount}</strong>
                  </div>
                )}
                {submittedOrder.screenshotFileName && (
                  <div className="col-span-2 flex items-center gap-2 text-emerald-400 bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/30">
                    <Check className="w-4 h-4" />
                    <span>Receipt Attached: <strong>{submittedOrder.screenshotFileName}</strong></span>
                  </div>
                )}
              </div>
            </div>

            {/* Next Step: Instant WhatsApp Activation */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-[#10233F] border border-emerald-500/40 space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Next Step: Send Confirmation to WhatsApp for Quick Approval</span>
              </div>
              <p className="text-xs text-slate-300">
                Click below to instantly notify our team on WhatsApp with your complete registration order and get your daily assignments assigned immediately:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => handleWhatsAppOrderSubmit(OFFICIAL_INFO.phone1)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 text-white font-black text-xs sm:text-sm shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to Line 1 ({OFFICIAL_INFO.phone1})</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleWhatsAppOrderSubmit(OFFICIAL_INFO.phone2)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 text-white font-black text-xs sm:text-sm shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to Line 2 ({OFFICIAL_INFO.phone2})</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleResetForm}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Application</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
              >
                Done / Close
              </button>
            </div>
          </div>
        ) : activeTab === 'payment-info' ? (
          /* ================= TAB 2: PAYMENT DETAILS DISPLAY ================= */
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="p-3.5 rounded-xl bg-[#10233F] border border-amber-500/30 text-xs text-slate-300">
              <div className="font-bold text-white mb-0.5">Where to Send the Registration Fee:</div>
              Send exactly <strong className="text-amber-300">Rs. {currentPlan.fee}</strong> for the <strong>{currentPlan.name} Plan</strong> to either official account below:
            </div>

            <div className="space-y-3">
              {OFFICIAL_PAYMENT_ACCOUNTS.map((account) => {
                const isCopied = copiedAccount === account.id;
                return (
                  <div key={account.id} className="p-4 rounded-2xl bg-[#07111F] border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-bold text-amber-400 uppercase">{account.name}</div>
                      <div className="text-white font-black text-base">{account.accountTitle}</div>
                      <div className="text-xl font-mono text-amber-300 font-extrabold mt-0.5">{account.accountNumber}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{account.instructions}</div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(account.id, account.accountNumber)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black shadow-md shrink-0 active:scale-95 transition-all"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>COPIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>COPY NUMBER</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl bg-[#10233F] border border-slate-700/80 text-xs text-slate-300 flex items-center justify-between">
              <span>Have you made the payment?</span>
              <button
                type="button"
                onClick={() => setActiveTab('form')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs shadow-md"
              >
                Back to Registration Form & Upload Proof
              </button>
            </div>
          </div>
        ) : (
          /* ================= TAB 1: REGISTRATION & ORDER FORM ================= */
          <form onSubmit={handleSubmitOrder} className="space-y-5">
            
            {/* Step 1: Select Plan */}
            <div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  2. Assignment Preference
                </label>
                <div className="grid grid-cols-3 gap-1 p-1 bg-[#10233F] rounded-xl border border-slate-700">
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  3. Applicant Category
                </label>
                <div className="grid grid-cols-3 gap-1 p-1 bg-[#10233F] rounded-xl border border-slate-700">
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

            {/* Step 3: Candidate Information Fields with Validation */}
            <div className="p-4 rounded-2xl bg-[#07111F] border border-slate-700/80 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>4. Student / Candidate Information</span>
                <span className="text-[10px] text-amber-400">* Required fields</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Ayesha Khan / Muhammad Ali"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#10233F] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-slate-700 focus:border-blue-500'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp / Mobile Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={whatsappNumber}
                    onChange={(e) => {
                      setWhatsappNumber(e.target.value);
                      if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: '' });
                    }}
                    placeholder="03XXXXXXXXX"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#10233F] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.whatsappNumber
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-slate-700 focus:border-blue-500'
                    }`}
                  />
                  {errors.whatsappNumber && (
                    <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.whatsappNumber}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    City / District <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={studentCity}
                    onChange={(e) => setStudentCity(e.target.value)}
                    placeholder="e.g. Lahore / Rawalpindi / Karachi"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#10233F] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Education / Qualification <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    placeholder="e.g. Matric / Inter / BS / Master"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#10233F] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Payment Details & Receipt / Screenshot Upload (Shaheen Feature) */}
            <div className="p-4 rounded-2xl bg-[#07111F] border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5" />
                  5. Payment Details & Proof Upload
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab('payment-info')}
                  className="text-[11px] text-blue-400 hover:underline flex items-center gap-1"
                >
                  View Account Numbers
                </button>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Payment Account Used:
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#10233F] border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Easypaisa (SHABANA NAZ)">Easypaisa — 03292037816 (SHABANA NAZ)</option>
                  <option value="JazzCash (SHABANA NAZ)">JazzCash — 03292037816 (SHABANA NAZ)</option>
                </select>
              </div>

              {/* Transaction ID & Sender Account */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Transaction ID / TRX ID <span className="text-slate-500">(If available)</span>
                  </label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="e.g. 1298471928"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#10233F] border border-slate-700 text-sm text-white placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Paid From (Account / Number) <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={senderAccount}
                    onChange={(e) => setSenderAccount(e.target.value)}
                    placeholder="e.g. 0300XXXXXXX or Sender Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#10233F] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Screenshot / Payment Receipt Upload Component */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Upload Payment Screenshot / Receipt Proof
                </label>
                
                <div className="relative border-2 border-dashed border-slate-700 hover:border-amber-400/50 rounded-2xl p-4 text-center transition-all bg-[#10233F]/60">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleScreenshotChange}
                    id="screenshot-input"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />

                  {screenshotPreview ? (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                      <div className="flex items-center gap-3">
                        <img
                          src={screenshotPreview}
                          alt="Receipt Preview"
                          className="w-14 h-14 object-cover rounded-xl border border-emerald-500/50"
                        />
                        <div>
                          <span className="text-xs font-bold text-emerald-400 block flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Receipt Attached
                          </span>
                          <span className="text-xs text-white truncate max-w-xs block font-mono">
                            {screenshotFileName}
                          </span>
                          <span className="text-[10px] text-slate-400">Click or drag another image to change</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-amber-300 underline pointer-events-none">
                        Change File
                      </span>
                    </div>
                  ) : (
                    <div className="py-2 flex flex-col items-center justify-center text-slate-400">
                      <Upload className="w-8 h-8 text-amber-400 mb-1.5" />
                      <span className="text-xs font-bold text-white">
                        Click to select payment receipt screenshot
                      </span>
                      <span className="text-[11px] text-slate-400 mt-0.5">
                        PNG, JPG, JPEG up to 8MB (Easypaisa or JazzCash receipt)
                      </span>
                    </div>
                  )}
                </div>
                {errors.screenshot && (
                  <span className="text-[11px] text-red-400 mt-1 block">
                    {errors.screenshot}
                  </span>
                )}
              </div>
            </div>

            {/* Summary Box */}
            <div className="p-3.5 rounded-xl bg-[#10233F] border border-amber-500/30 flex items-start gap-3 text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-slate-300 space-y-0.5">
                <span className="font-bold text-white">Summary for {currentPlan.name} Plan: </span>
                Registration fee is <span className="text-amber-300 font-bold">Rs. {currentPlan.fee} (One Time Only)</span>.
                Your daily assignment earning will be <span className="text-emerald-400 font-bold">Rs. {currentPlan.dailySalary.toLocaleString()} daily</span>.
              </div>
            </div>

            {/* Submission Actions */}
            <div className="space-y-3 pt-1">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl font-black text-sm tracking-wide text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>CONFIRM & SUBMIT REGISTRATION ORDER</span>
              </button>

              <div className="text-center text-xs text-slate-400">
                <span>Or submit immediately with details on WhatsApp:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    if (validateForm()) {
                      handleWhatsAppOrderSubmit(OFFICIAL_INFO.phone1);
                    }
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp 1 ({OFFICIAL_INFO.phone1})</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (validateForm()) {
                      handleWhatsAppOrderSubmit(OFFICIAL_INFO.phone2);
                    }
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp 2 ({OFFICIAL_INFO.phone2})</span>
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                <span>Direct Helpline Available:</span>
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

          </form>
        )}

      </div>
    </div>
  );
};
