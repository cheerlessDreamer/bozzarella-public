import { Bot, CreditCard, FileText, MessageSquare, Phone, PlusCircle, Receipt, Repeat } from "lucide-react";

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Menu Integration",
    description: "Upload your menu in JSON format, including prices and allergen information",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "24/7 Availability",
    description: "Handle phone orders around the clock, perfect for rural restaurants",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Smart Voice AI",
    description: "Natural conversations with customers, including order modifications",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Seamless Handoff",
    description: "Transfers complex orders to your staff when needed",
  },
  {
    icon: <PlusCircle className="w-6 h-6" />,
    title: "Upselling",
    description: "Smart suggestions for sides and drinks to increase order value",
  },
  {
    icon: <Receipt className="w-6 h-6" />,
    title: "Order Management",
    description: "Track orders and customer preferences for better service",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything your pizza restaurant needs to automate phone orders
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-dark border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};