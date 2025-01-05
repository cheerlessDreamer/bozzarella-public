import { Bot, CreditCard, FileText, MessageSquare, Phone, PlusCircle, Receipt, Repeat, Globe2, Shield } from "lucide-react";

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Menu Integration",
    description: "Automatic menu parsing from Foodora, Wolt, or PDF formats",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "24/7 Availability",
    description: "Never miss a phone order, day or night",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Swish Payments",
    description: "Seamless payment handling via Swish or on delivery",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Instant Notifications",
    description: "Orders sent via SMS, email, or direct API integration",
  },
  {
    icon: <PlusCircle className="w-6 h-6" />,
    title: "Customization",
    description: "Handle modifications and special requests with ease",
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: "Order History",
    description: "Remember returning customers and their preferences",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Multilingual Support",
    description: "Take orders in any language, making your pizzeria accessible to everyone",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Human Backup",
    description: "Seamlessly transfer calls to your staff if needed - we know sometimes you need that human touch",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Privacy First",
    description: "Choose whether to store order history or keep things private - you're in control",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to automate your restaurant's phone orders
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