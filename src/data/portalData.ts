import { PlanItem, WorkService, FaqItem, ContactInfo, PaymentAccount } from '../types';

export const OFFICIAL_INFO: ContactInfo = {
  brandName: 'ALLMA IQBAL UNIVERSITY',
  ceo: 'Abdul Sattar',
  owner: 'Kamran Ali',
  phone1: '03292037816',
  phone2: '03252921677',
  whatsappChannelUrl: 'https://whatsapp.com/channel/0029VbE4PPrKbYMOWNESLm3v',
};

// Official Payment Accounts for Registration Fee (Easypaisa & JazzCash)
export const OFFICIAL_PAYMENT_ACCOUNTS: PaymentAccount[] = [
  {
    id: 'easypaisa-1',
    name: 'Easypaisa (Account 1)',
    accountTitle: 'Abdul Sattar (CEO)',
    accountNumber: '03292037816',
    instructions: 'Send exact registration fee via Easypaisa App or shop and keep the screenshot / TRX ID.',
    iconType: 'easypaisa',
    badgeColor: 'emerald',
  },
  {
    id: 'jazzcash-1',
    name: 'JazzCash / Easypaisa (Account 2)',
    accountTitle: 'Kamran Ali (Owner)',
    accountNumber: '03252921677',
    instructions: 'Send exact registration fee via JazzCash / Easypaisa and upload receipt screenshot.',
    iconType: 'jazzcash',
    badgeColor: 'amber',
  },
];

// Formatting phone numbers for WhatsApp international links (Pakistan +92)
export const getWhatsAppDirectUrl = (phone: string, text?: string) => {
  // Convert 0329... to 92329...
  const clean = phone.replace(/\D/g, '');
  const international = clean.startsWith('0') ? '92' + clean.slice(1) : clean;
  const msg = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://wa.me/${international}${msg}`;
};

export const REGISTRATION_PLANS: PlanItem[] = [
  {
    id: 'starter',
    name: 'STARTER',
    emoji: '🌱',
    fee: 150,
    dailySalary: 2000,
    description: 'Perfect starting plan for new students and beginners looking for easy daily tasks.',
    features: [
      'Registration Fee: Rs. 150 (One Time)',
      'Salary: Rs. 2,000 Daily',
      'Daily Assignment Allotment',
      'Handwriting or MS Word options',
      'Direct contact support via WhatsApp',
    ],
    colorTheme: 'from-blue-900/60 to-slate-900/90 border-blue-500/30',
  },
  {
    id: 'basic',
    name: 'BASIC',
    emoji: '🚀',
    fee: 250,
    dailySalary: 3000,
    description: 'Ideal for candidates wanting a consistent workload with enhanced daily earnings.',
    features: [
      'Registration Fee: Rs. 250 (One Time)',
      'Salary: Rs. 3,000 Daily',
      'Daily Assignment Allotment',
      'Handwriting & MS Word Work',
      'Standard turnaround submission window',
      'Full guidance provided',
    ],
    colorTheme: 'from-indigo-950/70 to-slate-900/90 border-indigo-500/30',
  },
  {
    id: 'standard',
    name: 'STANDARD',
    emoji: '⭐',
    fee: 350,
    dailySalary: 4000,
    isPopular: true,
    description: 'Most selected package! Highest satisfaction among students and housewives.',
    features: [
      'Registration Fee: Rs. 350 (One Time)',
      'Salary: Rs. 4,000 Daily',
      'Daily Assignment Allotment',
      'Handwriting & MS Word Work',
      'Priority assignment queue each morning',
      'Flexible submission timelines',
      'Dedicated guidance for housewives & students',
    ],
    colorTheme: 'from-amber-950/40 via-blue-950/80 to-slate-900 border-amber-500/60 shadow-amber-500/10',
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    emoji: '👑',
    fee: 500,
    dailySalary: 6000,
    description: 'Maximum daily earning potential with top-tier assignment allocations.',
    features: [
      'Registration Fee: Rs. 500 (One Time)',
      'Salary: Rs. 6,000 Daily',
      'Daily Assignment Allotment',
      'Handwriting & MS Word Work',
      'Highest daily salary tier',
      'Full-day flexi submission schedule',
      'Direct supervisor assistance',
    ],
    colorTheme: 'from-yellow-950/30 via-royal-blue to-slate-900 border-amber-400/40',
  },
];

export const WORK_SERVICES: WorkService[] = [
  {
    id: 'handwriting',
    title: 'Handwriting Assignments',
    subtitle: 'Clear & Neat Written Work',
    description: 'Neatly write assigned educational topics and questions on ruled or plain paper sheets using blue or black ink pens. Take clear pictures or scan your finished pages for submission.',
    iconName: 'PenTool',
    badge: 'Pen & Paper',
    deliverables: [
      'Clean handwritten pages',
      'Legible penmanship',
      'Simple structured questions & answers',
      'Mobile camera photo submission',
    ],
  },
  {
    id: 'ms-word',
    title: 'MS Word Assignments',
    subtitle: 'Computer & Mobile Typing',
    description: 'Type assignments using Microsoft Word on your laptop, desktop computer, or MS Word mobile app. Format headings, paragraphs, and lists according to provided sample templates.',
    iconName: 'FileText',
    badge: 'Digital Typing',
    deliverables: [
      '.docx document submission',
      'Standard font and paragraph formatting',
      'Can be done on laptop, PC, or smartphone',
      'Straightforward text entry & editing',
    ],
  },
  {
    id: 'daily-work',
    title: 'Daily Assignment Work',
    subtitle: 'Steady & Continuous Tasks',
    description: 'Enjoy guaranteed daily assignment workflow. Receive your task each day, complete it at your preferred time, and receive your daily salary promptly.',
    iconName: 'CalendarCheck',
    badge: 'Daily Payouts',
    deliverables: [
      'Fresh tasks allotted every morning',
      'No gaps or unpredictable dry spells',
      'Manage tasks on your own daily routine',
      'Daily salary credited upon completion',
    ],
  },
  {
    id: 'student-work',
    title: 'Student Work',
    subtitle: 'Tailored for College & University Students',
    description: 'Designed specifically to balance with your classes, lectures, and exams. Earn an attractive daily income without compromising your academic schedule.',
    iconName: 'GraduationCap',
    badge: 'For Students',
    deliverables: [
      'Part-time flexible hours (2-3 hours/day)',
      'No strict shifts or attendance clocks',
      'Covers pocket money & semester expenses',
      'Gain valuable writing & typing skills',
    ],
  },
  {
    id: 'housewife-work',
    title: 'Housewife Work',
    subtitle: '100% Work From Home for Homemakers',
    description: 'A dignified, comfortable home-based opportunity for women and housewives. Complete handwriting or typing assignments whenever free time permits during the day.',
    iconName: 'Home',
    badge: 'For Housewives',
    deliverables: [
      '100% remote — work comfortably from your home',
      'Work between family chores and leisure time',
      'Independent daily income in your hands',
      'Simple step-by-step guidance available',
    ],
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    title: 'Choose Your Plan',
    description: 'Select one of our four tailored registration plans (Starter, Basic, Standard, or Premium) based on your daily salary target.',
    iconName: 'Sparkles',
  },
  {
    stepNumber: '02',
    title: 'Complete Registration',
    description: 'Pay the small one-time registration fee (from Rs. 150) to activate your account. There are never any recurring or hidden fees.',
    iconName: 'CheckCircle2',
  },
  {
    stepNumber: '03',
    title: 'Receive Assignment Work',
    description: 'Receive your daily handwriting or MS Word assignments directly on your device with clear instructions and questions.',
    iconName: 'Inbox',
  },
  {
    stepNumber: '04',
    title: 'Submit Your Assignment',
    description: 'Submit your completed assignment file or photo and receive your earned daily salary according to your registered plan.',
    iconName: 'Send',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-registration-fee',
    category: 'Registration Fee',
    question: 'How much is the registration fee for the assignment work?',
    answer: 'The registration fee depends on the package you choose: Starter (Rs. 150 with Rs. 2,000 daily salary), Basic (Rs. 250 with Rs. 3,000 daily salary), Standard (Rs. 350 with Rs. 4,000 daily salary), or Premium (Rs. 500 with Rs. 6,000 daily salary).',
  },
  {
    id: 'faq-one-time',
    category: 'One-Time Registration',
    question: 'Is the registration fee paid only once or every month?',
    answer: 'The registration fee is strictly ONE TIME ONLY. You do not need to pay any weekly or monthly renewals. Once registered, your profile remains active for daily assignment work.',
  },
  {
    id: 'faq-daily-work',
    category: 'Daily Assignment Work',
    question: 'How does daily assignment work operate?',
    answer: 'Assignments are provided to you on a daily basis. Once you complete and submit your assigned task within the designated daily window, your daily salary (Rs. 2,000 to Rs. 6,000 according to your selected plan) is processed for you.',
  },
  {
    id: 'faq-available-work',
    category: 'Available Work',
    question: 'What types of assignment work are available?',
    answer: 'We provide two primary categories of assignment work: (1) Handwriting Assignments (writing on paper with pen) and (2) MS Word Assignments (digital typing and document formatting in Microsoft Word). You can choose the format that suits your setup best.',
  },
  {
    id: 'faq-students-housewives',
    category: 'Students & Housewives',
    question: 'Are these work opportunities suitable for students and housewives?',
    answer: 'Yes, absolutely! The assignment work is specially structured for students and housewives. It requires only 2 to 3 hours of your day, has no fixed office hours, and can be completed 100% from the comfort of your home or hostel.',
  },
  {
    id: 'faq-contact-team',
    category: 'Contact Support',
    question: 'How can I contact the management team to register or ask questions?',
    answer: 'You can directly call or message our leadership team on WhatsApp at 03292037816 and 03252921677. You can also join our official WhatsApp Channel (https://whatsapp.com/channel/0029VbE4PPrKbYMOWNESLm3v) to receive official updates.',
  },
];
