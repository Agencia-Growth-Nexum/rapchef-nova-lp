export interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface Combo {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  priceFraction?: string;
  footerText: string;
  footerSubtext: string;
  items: string[];
  popular?: boolean;
  cta: string;
  message: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
