export type Language = 'en' | 'sv';

export interface TranslationType {
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
    hoverText: string;
    betaButton: string;
    watchDemo: string;
  };
  howItWorks: {
    title: string;
    steps: {
      1: {
        title: string;
        description: string;
        image: string;
      };
      2: {
        title: string;
        description: string;
        image: string;
      };
      3: {
        title: string;
        description: string;
        image: string;
      };
    };
  };
  features: {
    title: string;
    subtitle: string;
    showMore: string;
    showLess: string;
    items: {
      key: string;
      title: string;
      description: string;
    }[];
  };
  pricing: {
    title: string;
    subtitle: string;
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
    contactUs: string;
  };
  faq: {
    title: string;
    subtitle: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
  betaProgram: {
    title: string;
    subtitle: string;
    button: string;
  };
  betaBanner: {
    title: string;
    action: string;
    suffix: string;
  };
}