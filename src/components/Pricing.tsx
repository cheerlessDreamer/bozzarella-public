import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg bg-dark-lighter border border-gray-800 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-semibold mb-4">{t('pricing.small.title')}</h3>
            <p className="text-gray-400 mb-6">{t('pricing.small.description')}</p>
            <ul className="space-y-3 mb-6">
              {t('pricing.small.features').map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400">{t('pricing.contactUs')}</p>
          </div>
          
          <div className="p-6 rounded-lg bg-dark-lighter border border-primary/50 hover:border-primary transition-colors relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
              {t('pricing.medium.popular')}
            </div>
            <h3 className="text-xl font-semibold mb-4">{t('pricing.medium.title')}</h3>
            <p className="text-gray-400 mb-6">{t('pricing.medium.description')}</p>
            <ul className="space-y-3 mb-6">
              {t('pricing.medium.features').map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400">{t('pricing.contactUs')}</p>
          </div>
          
          <div className="p-6 rounded-lg bg-dark-lighter border border-gray-800 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-semibold mb-4">{t('pricing.large.title')}</h3>
            <p className="text-gray-400 mb-6">{t('pricing.large.description')}</p>
            <ul className="space-y-3 mb-6">
              {t('pricing.large.features').map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400">{t('pricing.contactUs')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};