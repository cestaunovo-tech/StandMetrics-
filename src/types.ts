export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  eventOrFair: string;
  standSize: string;
  serviceType: string;
  eventDate?: string;
  notes: string;
}

export interface MetricItem {
  label: string;
  value: string;
  change?: string;
  subtext?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  iconName: string;
  benefits: string[];
}
