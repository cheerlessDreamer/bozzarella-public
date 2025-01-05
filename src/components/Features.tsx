import { useState } from "react";
import { Bot, CreditCard, FileText, MessageSquare, Phone, PlusCircle, Receipt, Repeat, Globe2, Shield, Clock, Calendar, Truck, CreditCard as Payment, Settings, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

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
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Delivery Control",
    description: "Toggle delivery service on/off and set delivery zones and minimum orders",
  },
  {
    icon: <Payment className="w-6 h-6" />,
    title: "Payment Settings",
    description: "Configure pre-payment requirements and accepted payment methods",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Operating Hours",
    description: "Set regular business hours and special holiday schedules",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Availability Management",
    description: "Easily update status for unexpected closures, holidays, or reduced capacity",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Kitchen Capacity",
    description: "Set order limits based on kitchen capacity and current wait times",
  }
];

const mainFeatures = features.slice(0, 6);
const additionalFeatures = features.slice(6);

export const Features = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to automate your restaurant's phone orders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mainFeatures.map((feature, index) => (
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

        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="flex justify-center mt-8">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-primary hover:text-primary/90"
              >
                {isOpen ? "Show less" : "And much more"}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isOpen && "rotate-180"
                )} />
              </Button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-dark border border-gray-800 hover:border-primary/50 transition-colors animate-fade-up"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};