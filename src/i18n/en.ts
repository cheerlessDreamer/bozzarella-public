import { TranslationType } from './types';

export const en: TranslationType = {
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
        key: "phoneAvailability",
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
        key: "availability",
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
};
