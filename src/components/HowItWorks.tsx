import { useLanguage } from "@/contexts/LanguageContext";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: t('howItWorks.signUp.title'),
      description: t('howItWorks.signUp.description'),
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: t('howItWorks.connect.title'),
      description: t('howItWorks.connect.description'),
    },
    {
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      title: t('howItWorks.start.title'),
      description: t('howItWorks.start.description'),
    },
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t('howItWorks.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mt-6">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};