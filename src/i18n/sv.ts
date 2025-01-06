export const sv = {
  common: {
    beta: "Beta",
    joinBeta: "Gå med i betaprogrammet",
    name: "Namn",
    email: "E-post",
    phone: "Telefon",
    submit: "Skicka",
    success: "Tack!",
    error: "Fel",
    required: "Obligatoriskt",
    invalidEmail: "Ogiltig e-postadress",
    close: "Stäng"
  },
  hero: {
    title: "Din restaurangs",
    subtitle: "AI-telefonist",
    description: "Låt AI ta hand om dina telefonbeställningar medan du fokuserar på det viktiga - att laga fantastisk mat.",
    betaButton: "Kom igång",
    watchDemo: "Se demo",
    features: {
      orderTaking: "Automatisk orderhantering",
      orderTakingDesc: "Tar emot beställningar dygnet runt",
      smallRestaurants: "För små restauranger",
      smallRestaurantsDesc: "Perfekt för familjeägda verksamheter",
      staffFreedom: "Frigör personal",
      staffFreedomDesc: "Låt personalen fokusera på gästerna"
    }
  },
  howItWorks: {
    title: "Hur det fungerar",
    signUp: {
      title: "Registrera dig",
      description: "Skapa ett konto på bara några minuter."
    },
    connect: {
      title: "Anslut din restaurang",
      description: "Integrera säkert din meny och ditt beställningssystem."
    },
    start: {
      title: "Börja ta emot beställningar",
      description: "Låt AI hantera dina telefonbeställningar medan du fokuserar på matlagningen."
    }
  },
  features: {
    title: "Funktioner",
    subtitle: "Allt du behöver för att automatisera din telefonorderhantering",
    showMore: "Visa fler funktioner",
    showLess: "Visa färre",
    items: [
      {
        key: "menuIntegration",
        title: "Menyintegration",
        description: "Synkroniserar automatiskt med din digitala meny"
      },
      {
        key: "phoneAvailability",
        title: "24/7 Tillgänglighet",
        description: "Tar emot beställningar dygnet runt"
      },
      {
        key: "payments",
        title: "Betalningshantering",
        description: "Säker hantering av kortbetalningar"
      },
      {
        key: "notifications",
        title: "Ordernotifieringar",
        description: "Direkta uppdateringar till kök och personal"
      },
      {
        key: "customization",
        title: "Anpassningsbar",
        description: "Skräddarsy efter dina behov"
      },
      {
        key: "orderHistory",
        title: "Orderhistorik",
        description: "Spåra och analysera alla beställningar"
      },
      {
        key: "multilingual",
        title: "Flerspråkig",
        description: "Stöd för flera språk"
      },
      {
        key: "humanBackup",
        title: "Mänsklig backup",
        description: "Support vid behov"
      },
      {
        key: "privacy",
        title: "Datasäkerhet",
        description: "GDPR-kompatibel datahantering"
      }
    ]
  },
  faq: {
    title: "Vanliga frågor",
    subtitle: "Hitta svar på de vanligaste frågorna om vår tjänst",
    items: [
      {
        question: "Hur fungerar det?",
        answer: "Vår AI-telefonist svarar på inkommande samtal, tar emot beställningar och skickar dem direkt till ditt kök."
      },
      {
        question: "Är det dyrt?",
        answer: "Vi erbjuder konkurrenskraftiga priser anpassade för små restauranger."
      },
      {
        question: "Hur lång är uppsägningstiden?",
        answer: "Ingen bindningstid - avsluta när du vill."
      }
    ]
  },
  betaProgram: {
    title: "Gå med i vårt betaprogram",
    subtitle: "Var bland de första att testa vår AI-telefonist",
    benefits: {
      title: "Fördelar med betaprogrammet",
      items: [
        "Tidig åtkomst till alla funktioner",
        "Rabatterat pris för tidig anmälan",
        "Direkt support från utvecklingsteamet",
        "Möjlighet att påverka produktens utveckling"
      ]
    }
  },
  betaBanner: {
    title: "Beta",
    action: "Gå med",
    suffix: "nu!"
  },
  pricing: {
    title: "Priser",
    subtitle: "Välj det paket som passar dig bäst",
    contactUs: "Kontakta oss för mer information",
    small: {
      title: "Liten restaurang",
      description: "Perfekt för små restauranger",
      features: [
        "Upp till 50 beställningar/månad",
        "E-postsupport",
        "Grundläggande statistik"
      ]
    },
    medium: {
      title: "Mellanstor restaurang",
      description: "För växande verksamheter",
      features: [
        "Upp till 200 beställningar/månad",
        "Prioriterad support",
        "Avancerad statistik"
      ],
      popular: "Populärast"
    },
    large: {
      title: "Stor restaurang",
      description: "För etablerade restauranger",
      features: [
        "Obegränsat antal beställningar",
        "24/7 support",
        "Anpassade funktioner"
      ]
    }
  },
  footer: {
    copyright: "© 2024 Restaurant AI. Alla rättigheter förbehållna.",
    links: {
      privacy: "Integritetspolicy",
      terms: "Användarvillkor",
      contact: "Kontakt"
    }
  }
} as const;
