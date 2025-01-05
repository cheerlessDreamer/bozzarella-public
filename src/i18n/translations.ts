export const translations = {
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
      showLess: "Show less"
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
      showLess: "Visa mindre"
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;