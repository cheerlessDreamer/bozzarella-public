import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { useState } from "react";

export const Hero = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState<keyof typeof t.hero.features>("orderTaking");

  const features = [
    {
      key: "orderTaking" as const,
      title: t.hero.features.orderTaking,
      description: t.hero.features.orderTakingDesc
    },
    {
      key: "zeroMistakes" as const,
      title: t.hero.features.zeroMistakes,
      description: t.hero.features.zeroMistakesDesc
    },
    {
      key: "staffFreedom" as const,
      title: t.hero.features.staffFreedom,
      description: t.hero.features.staffFreedomDesc
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t.hero.title} <br />
            <span className="gradient-text">{t.hero.subtitle}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          <div className="grid grid-cols-3 gap-8 mb-6">
            {features.map((feature) => (
              <div
                key={feature.key}
                className="text-center cursor-pointer group"
                onMouseEnter={() => setActiveFeature(feature.key)}
              >
                <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="bg-dark-lighter p-4 rounded-lg mb-12 min-h-[80px] transition-all duration-300">
            <p className="text-gray-400 animate-fade-in">
              {features.find(f => f.key === activeFeature)?.description}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button variant="default" className="bg-primary hover:bg-primary-hover text-white">
              {t.hero.betaButton}
            </Button>
            <Button variant="outline">
              {t.hero.watchDemo}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};