import { TranslationType } from './types';

export const sv: TranslationType = {
  hero: {
    title: "Din Restaurangs Röst,",
    subtitle: "Alltid Tillgänglig",
    description: "Bozzarella är din AI-telefonassistent, speciellt utformad för landsbygdsrestauranger för att hantera beställningar perfekt medan du fokuserar på det som betyder mest.",
    features: {
      orderTaking: "Tar Emot Beställningar 24/7",
      orderTakingDesc: "Missa aldrig ett samtal, även under rusningstid eller efter stängning. Hantera flera beställningar samtidigt medan din personal fokuserar på att laga fantastiska pizzor.",
      smallRestaurants: "Perfekt för Små Restauranger",
      smallRestaurantsDesc: "Medan stora kedjor blev större lämnades små restauranger med dyra lösningar som inte passade. Vi ändrar på det med ett enkelt första steg: AI-telefonbeställning som fungerar för dig, till ett pris som är vettigt.",
      staffFreedom: "Kostnadsreduktion",
      staffFreedomDesc: "Spara på personal kostnader och minska beställningsfel. Inga fler missförstånd eller förlorade beställningar - bara precis, konsekvent service varje gång."
    },
    hoverText: "Håll muspekaren över varje funktion för att lära dig mer om hur Bozzarella kan hjälpa din restaurang att blomstra.",
    betaButton: "Gå Med i Betaprogrammet",
    watchDemo: "Se Demo"
  },
  howItWorks: {
    title: "Hur det fungerar",
    steps: {
      1: {
        title: "Anslut din telefonlinje",
        description: "Konfigurera Bozzarella med ditt befintliga telefonsystem på några minuter.",
        image: "1649972904349-6e44c42644a7"
      },
      2: {
        title: "Konfigurera din meny",
        description: "Importera din meny och anpassa hur beställningar hanteras.",
        image: "1581091226825-a6a2a5aee158"
      },
      3: {
        title: "Börja ta emot beställningar",
        description: "Låt AI hantera dina telefonbeställningar medan du fokuserar på att laga god mat.",
        image: "1519389950473-47ba0277781c"
      }
    }
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
        key: "phoneAvailability",
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
        key: "availability",
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
        question: "Hur ser era prisalternativ ut?",
        answer: "Vi har ännu inte fastställt vår prisstruktur, men vi kommer att erbjuda flexibla alternativ som fungerar för restauranger av alla storlekar. Detta kommer att inkludera både fasta månadsplaner och betalning per beställning, så att du kan välja det som passar din verksamhet bäst. Vi förstår att varje restaurang har unika behov och volymer, och vår prissättning kommer att återspegla denna flexibilitet."
      },
      {
        question: "Passar AI verkligen för min lilla pizzeria på landsbygden?",
        answer: "Absolut! Bozzarella är utformat för pizzerior i alla storlekar, inklusive små familjedrivna verksamheter. Faktum är att mindre restauranger ofta drar störst nytta av AI-telefonbeställningar eftersom det frigör din begränsade personal att fokusera på det viktiga - att göra fantastisk pizza. Systemet är enkelt att installera, kostnadseffektivt (du betalar endast per beställning) och hjälper dig att ge konsekvent service även under rusningstider eller när ni är underbemannade."
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
};
