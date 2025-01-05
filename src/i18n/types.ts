export type Language = 'en' | 'sv';

export type TranslationType = {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    features: {
      orderTaking: string;
      orderTakingDesc: string;
      zeroMistakes: string;
      zeroMistakesDesc: string;
      staffFreedom: string;
      staffFreedomDesc: string;
    };
    hoverText: string;
    betaButton: string;
    watchDemo: string;
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
    questions: Array<{
      question: string;
      answer: string;
    }>;
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
};