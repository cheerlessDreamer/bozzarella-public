export type Language = 'en' | 'sv';

export interface TranslationType {
  common: {
    beta: string;
    joinBeta: string;
    name: string;
    email: string;
    phone: string;
    submit: string;
    success: string;
    error: string;
    required: string;
    invalidEmail: string;
    close: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    features: {
      orderTaking: string;
      orderTakingDesc: string;
      smallRestaurants: string;
      smallRestaurantsDesc: string;
      staffFreedom: string;
      staffFreedomDesc: string;
    };
    betaButton: string;
    watchDemo: string;
  };
  howItWorks: {
    title: string;
    signUp: {
      title: string;
      description: string;
    };
    connect: {
      title: string;
      description: string;
    };
    start: {
      title: string;
      description: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    showMore: string;
    showLess: string;
    items: Array<{
      key: string;
      title: string;
      description: string;
    }>;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  betaProgram: {
    title: string;
    subtitle: string;
    benefits: {
      title: string;
      items: string[];
    };
  };
  betaBanner: {
    title: string;
    action: string;
    suffix: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    contactUs: string;
    small: {
      title: string;
      description: string;
      features: string[];
    };
    medium: {
      title: string;
      description: string;
      features: string[];
      popular: string;
    };
    large: {
      title: string;
      description: string;
      features: string[];
    };
  };
  footer: {
    copyright: string;
    links: {
      privacy: string;
      terms: string;
      contact: string;
    };
  };
}