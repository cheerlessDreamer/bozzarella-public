import { useState } from "react";
import { Bot, CreditCard, FileText, MessageSquare, Phone, PlusCircle, Receipt, Repeat, Globe2, Shield, Clock, Calendar, Truck, CreditCard as Payment, Settings, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { useLanguage } from "@/contexts/LanguageContext";

const getFeatureIcon = (key: string) => {
  const icons = {
    menuIntegration: <FileText className="w-6 h-6" />,
    phoneAvailability: <Phone className="w-6 h-6" />,
    payments: <CreditCard className="w-6 h-6" />,
    notifications: <MessageSquare className="w-6 h-6" />,
    customization: <PlusCircle className="w-6 h-6" />,
    orderHistory: <Repeat className="w-6 h-6" />,
    multilingual: <Globe2 className="w-6 h-6" />,
    humanBackup: <Phone className="w-6 h-6" />,
    privacy: <Shield className="w-6 h-6" />,
    delivery: <Truck className="w-6 h-6" />,
    paymentSettings: <Payment className="w-6 h-6" />,
    operatingHours: <Clock className="w-6 h-6" />,
    availability: <Calendar className="w-6 h-6" />,
    kitchenCapacity: <Settings className="w-6 h-6" />
  };
  return icons[key as keyof typeof icons] || <FileText className="w-6 h-6" />;
};

export const Features = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const allFeatures = t<Array<{ key: string; title: string; description: string }>>('features.items');
  const mainFeatures = allFeatures.slice(0, 6);
  const additionalFeatures = allFeatures.slice(6);

  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-dark border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <div className="text-primary mb-4">{getFeatureIcon(feature.key)}</div>
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
                {isOpen ? t('features.showLess') : t('features.showMore')}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isOpen && "rotate-180"
                )} />
              </Button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent className="mt-8 animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-dark border border-gray-800 hover:border-primary/50 transition-colors"
                >
                  <div className="text-primary mb-4">{getFeatureIcon(feature.key)}</div>
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