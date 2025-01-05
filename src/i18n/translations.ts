type TranslationType = {
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

export const translations: Record<'en' | 'sv', TranslationType> = {
  en: {
    hero: {
      title: "Your Restaurant's Voice,",
      subtitle: "Always On Call",
      description: "Bozzarella is your 24/7 AI phone buddy, taking perfect pizza orders while you focus on crafting amazing food!",
      features: {
        orderTaking: "24/7 Order Taking",
        orderTakingDesc: "Never miss a call, even during peak hours or after closing time.",
        zeroMistakes: "Zero Mistakes",
        zeroMistakesDesc: "Every order captured with perfect accuracy, every single time.",
        staffFreedom: "Staff Freedom",
        staffFreedomDesc: "Let your team focus on cooking and serving, not answering phones."
      },
      betaButton: "Join Beta Program",
      watchDemo: "Watch Demo"
    },
    features: {
      title: "Powerful Features",
      subtitle: "Everything you need to automate your restaurant's phone orders",
      showMore: "And much more",
      showLess: "Show less",
      items: [
        {
          key: "menuIntegration",
          title: "Menu Integration",
          description: "Automatic menu parsing from Foodora, Wolt, or PDF formats"
        },
        {
          key: "availability",
          title: "24/7 Availability",
          description: "Never miss a phone order, day or night"
        },
        {
          key: "payments",
          title: "Swish Payments",
          description: "Seamless payment handling via Swish or on delivery"
        },
        {
          key: "notifications",
          title: "Instant Notifications",
          description: "Orders sent via SMS, email, or direct API integration"
        },
        {
          key: "customization",
          title: "Customization",
          description: "Handle modifications and special requests with ease"
        },
        {
          key: "orderHistory",
          title: "Order History",
          description: "Remember returning customers and their preferences"
        },
        {
          key: "multilingual",
          title: "Multilingual Support",
          description: "Take orders in any language, making your pizzeria accessible to everyone"
        },
        {
          key: "humanBackup",
          title: "Human Backup",
          description: "Seamlessly transfer calls to your staff if needed - we know sometimes you need that human touch"
        },
        {
          key: "privacy",
          title: "Privacy First",
          description: "Choose whether to store order history or keep things private - you're in control"
        },
        {
          key: "delivery",
          title: "Delivery Control",
          description: "Toggle delivery service on/off and set delivery zones and minimum orders"
        },
        {
          key: "paymentSettings",
          title: "Payment Settings",
          description: "Configure pre-payment requirements and accepted payment methods"
        },
        {
          key: "operatingHours",
          title: "Operating Hours",
          description: "Set regular business hours and special holiday schedules"
        },
        {
          key: "availabilityManagement",
          title: "Availability Management",
          description: "Easily update status for unexpected closures, holidays, or reduced capacity"
        },
        {
          key: "kitchenCapacity",
          title: "Kitchen Capacity",
          description: "Set order limits based on kitchen capacity and current wait times"
        }
      ]
    },
    pricing: {
      title: "Fair Pricing for Every Restaurant",
      subtitle: "Whether you're a small family restaurant or a busy establishment, we have a plan that works for you",
      small: {
        title: "Small Restaurant",
        description: "Perfect for family-run restaurants handling up to 500 phone orders monthly",
        features: [
          "Pay per order",
          "No monthly minimums",
          "All features included"
        ]
      },
      medium: {
        title: "Medium Restaurant",
        description: "Great for established local favorites with 500-2000 monthly phone orders",
        features: [
          "Flexible payment options",
          "Volume discounts",
          "All features included"
        ],
        popular: "Most Popular"
      },
      large: {
        title: "Large Restaurant",
        description: "Ideal for busy establishments with 2000+ monthly phone orders",
        features: [
          "Custom pricing plans",
          "Priority support",
          "All features included"
        ]
      },
      contactUs: "Contact us for pricing"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Bozzarella and how it can help your restaurant",
      questions: [
        {
          question: "How does Bozzarella handle complex orders?",
          answer: "Our AI is trained to handle multi-item orders, special requests, and modifications with ease. It can clarify details with customers and ensure order accuracy through natural conversation."
        },
        {
          question: "What happens if the AI doesn't understand a customer?",
          answer: "If the AI encounters any difficulties understanding the customer, it will politely ask for clarification. In rare cases where communication becomes challenging, the call can be seamlessly transferred to your staff."
        },
        {
          question: "How does Bozzarella integrate with existing POS systems?",
          answer: "Bozzarella is designed to integrate with most major POS systems. During onboarding, we'll work with you to ensure smooth integration with your existing setup."
        },
        {
          question: "Is there a contract or minimum commitment?",
          answer: "No long-term contracts required. You can start with our flexible monthly plans and adjust or cancel as needed."
        },
        {
          question: "How long does it take to set up Bozzarella?",
          answer: "Most restaurants are up and running within 1-2 business days. This includes system integration, menu setup, and customization of the AI's responses to match your restaurant's style."
        },
        {
          question: "What about data security and privacy?",
          answer: "We take security seriously. All customer data is encrypted, and we comply with industry standards for data protection. We never share or sell customer information."
        }
      ]
    },
    betaProgram: {
      title: "Join Our Beta Program",
      subtitle: "Be among the first to experience Bozzarella and help shape the future of restaurant order management. Beta users get free access.",
      button: "Get Early Access"
    },
    betaBanner: {
      title: "We're looking for beta testers!",
      action: "Join our program",
      suffix: "and get free access."
    }
  },
  sv: {
    hero: {
      title: "Din Restaurangs Röst,",
      subtitle: "Alltid Tillgänglig",
      description: "Bozzarella är din AI-telefonkompis dygnet runt, som tar perfekta pizzabeställningar medan du fokuserar på att laga fantastisk mat!",
      features: {
        orderTaking: "Tar Emot Beställningar 24/7",
        orderTakingDesc: "Missa aldrig ett samtal, även under rusningstid eller efter stängning.",
        zeroMistakes: "Inga Misstag",
        zeroMistakesDesc: "Varje beställning registreras med perfekt noggrannhet, varje gång.",
        staffFreedom: "Personalfrihet",
        staffFreedomDesc: "Låt ditt team fokusera på matlagning och servering, inte på att svara i telefon."
      },
      betaButton: "Gå Med i Betaprogrammet",
      watchDemo: "Se Demo"
    },
    features: {
      title: "Kraftfulla Funktioner",
      subtitle: "Allt du behöver för att automatisera restaurangens telefonbeställningar",
      showMore: "Och mycket mer",
      showLess: "Visa mindre",
      items: [
        {
          key: "menuIntegration",
          title: "Menyintegration",
          description: "Automatisk menytolkning från Foodora, Wolt eller PDF-format"
        },
        {
          key: "availability",
          title: "Tillgänglig 24/7",
          description: "Missa aldrig en telefonbeställning, dag som natt"
        },
        {
          key: "payments",
          title: "Swish Betalningar",
          description: "Smidig betalningshantering via Swish eller vid leverans"
        },
        {
          key: "notifications",
          title: "Direkta Notifieringar",
          description: "Beställningar skickas via SMS, e-post eller direkt API-integration"
        },
        {
          key: "customization",
          title: "Anpassning",
          description: "Hantera ändringar och specialönskemål med lätthet"
        },
        {
          key: "orderHistory",
          title: "Orderhistorik",
          description: "Kom ihåg återkommande kunder och deras preferenser"
        },
        {
          key: "multilingual",
          title: "Flerspråkigt Stöd",
          description: "Ta emot beställningar på alla språk, gör din pizzeria tillgänglig för alla"
        },
        {
          key: "humanBackup",
          title: "Mänsklig Backup",
          description: "Överför sömlöst samtal till din personal vid behov - vi vet att ibland behövs en mänsklig touch"
        },
        {
          key: "privacy",
          title: "Sekretess Först",
          description: "Välj om du vill lagra orderhistorik eller hålla det privat - du har kontrollen"
        },
        {
          key: "delivery",
          title: "Leveranskontroll",
          description: "Aktivera/inaktivera leveransservice och ställ in leveranszoner och minimibeställningar"
        },
        {
          key: "paymentSettings",
          title: "Betalningsinställningar",
          description: "Konfigurera krav på förbetalning och accepterade betalningsmetoder"
        },
        {
          key: "operatingHours",
          title: "Öppettider",
          description: "Ställ in ordinarie öppettider och särskilda helgscheman"
        },
        {
          key: "availabilityManagement",
          title: "Tillgänglighetshantering",
          description: "Uppdatera enkelt status för oväntade stängningar, helgdagar eller reducerad kapacitet"
        },
        {
          key: "kitchenCapacity",
          title: "Kökskapacitet",
          description: "Ställ in ordergränser baserat på kökskapacitet och aktuella väntetider"
        }
      ]
    },
    pricing: {
      title: "Rättvist Pris för Varje Restaurang",
      subtitle: "Oavsett om du driver en liten familjerestaurang eller en stor verksamhet har vi en plan som passar dig",
      small: {
        title: "Liten Restaurang",
        description: "Perfekt för familjedrivna restauranger som hanterar upp till 500 telefonbeställningar per månad",
        features: [
          "Betala per beställning",
          "Inga månadskostnader",
          "Alla funktioner ingår"
        ]
      },
      medium: {
        title: "Mellanstor Restaurang",
        description: "Perfekt för etablerade lokala favoriter med 500-2000 beställningar per månad",
        features: [
          "Flexibla betalningsalternativ",
          "Volymrabatter",
          "Alla funktioner ingår"
        ],
        popular: "Mest Populär"
      },
      large: {
        title: "Stor Restaurang",
        description: "Idealisk för restauranger med över 2000 beställningar per månad",
        features: [
          "Anpassade prisplaner",
          "Prioriterad support",
          "Alla funktioner ingår"
        ]
      },
      contactUs: "Kontakta oss för priser"
    },
    faq: {
      title: "Vanliga Frågor",
      subtitle: "Allt du behöver veta om Bozzarella och hur det kan hjälpa din restaurang",
      questions: [
        {
          question: "Hur hanterar Bozzarella komplexa beställningar?",
          answer: "Vår AI är tränad för att hantera beställningar med flera rätter, specialönskemål och ändringar. Den kan förtydliga detaljer med kunder och säkerställa korrekthet genom naturlig konversation."
        },
        {
          question: "Vad händer om AI:n inte förstår en kund?",
          answer: "Om AI:n har svårt att förstå kunden ber den artigt om förtydligande. I sällsynta fall där kommunikationen blir utmanande kan samtalet sömlöst överföras till din personal."
        },
        {
          question: "Hur integrerar Bozzarella med befintliga kassasystem?",
          answer: "Bozzarella är designad för att integreras med de flesta större kassasystem. Under uppstarten hjälper vi dig att säkerställa en smidig integration med din befintliga setup."
        },
        {
          question: "Finns det bindningstid eller minimikrav?",
          answer: "Inga långtidskontrakt krävs. Du kan börja med våra flexibla månadsplaner och justera eller avsluta efter behov."
        },
        {
          question: "Hur lång tid tar det att komma igång med Bozzarella?",
          answer: "De flesta restauranger är igång inom 1-2 arbetsdagar. Detta inkluderar systemintegration, menyuppsättning och anpassning av AI:ns svar för att matcha din restaurangs stil."
        },
        {
          question: "Hur ser det ut med datasäkerhet och integritet?",
          answer: "Vi tar säkerhet på största allvar. All kunddata är krypterad och vi följer branschstandarder för dataskydd. Vi delar eller säljer aldrig kundinformation."
        }
      ]
    },
    betaProgram: {
      title: "Gå Med i Vårt Betaprogram",
      subtitle: "Var bland de första att uppleva Bozzarella och hjälp till att forma framtiden för restaurangbeställningar. Betaanvändare får gratis tillgång.",
      button: "Få Tidig Tillgång"
    },
    betaBanner: {
      title: "Vi söker betatestare!",
      action: "Gå med i vårt program",
      suffix: "och få gratis tillgång."
    }
  }
};
