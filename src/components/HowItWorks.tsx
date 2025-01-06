import { useLanguage } from "@/contexts/LanguageContext";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const images = {
    1: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    2: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    3: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">{t('howItWorks.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((step, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={images[step]}
                alt={t(`howItWorks.steps.${step}.title`)}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold">{t(`howItWorks.steps.${step}.title`)}</h3>
            <p className="text-gray-400 text-lg">{t(`howItWorks.steps.${step}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};