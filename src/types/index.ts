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
