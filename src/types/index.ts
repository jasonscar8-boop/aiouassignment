export interface PlanItem {
  id: string;
  name: string;
  emoji: string;
  fee: number;
  dailySalary: number;
  isPopular?: boolean;
  description: string;
  features: string[];
  colorTheme: string;
}

export interface WorkService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
  badge: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone1: string;
  phone2: string;
  whatsappChannelUrl: string;
  ceo: string;
  owner: string;
  brandName: string;
}

export interface PaymentAccount {
  id: string;
  name: string;
  accountTitle: string;
  accountNumber: string;
  instructions?: string;
  iconType: 'easypaisa' | 'jazzcash' | 'bank' | 'nayapay';
  badgeColor?: string;
}

export interface StudentRegistrationOrder {
  id: string;
  fullName: string;
  whatsappNumber: string;
  studentCity?: string;
  qualification?: string;
  candidateType: 'Student' | 'Housewife' | 'Other';
  workType: 'Handwriting' | 'MS Word' | 'Both';
  planId: string;
  planName: string;
  planFee: number;
  planDailySalary: number;
  paymentMethod: string;
  transactionId?: string;
  senderAccount?: string;
  screenshotFileName?: string;
  screenshotBase64?: string;
  submissionDate: string;
  status: 'Pending Verification' | 'Verified' | 'Active';
}
