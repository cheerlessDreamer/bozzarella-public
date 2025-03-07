import { useLanguage } from "@/contexts/LanguageContext";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const images = {
    1: "/public/ConnectPhone.svg",
    2: "/public/ConfigureMenu.svg",
    3: "/public/StartTakingOrders.svg"
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">{t('howItWorks.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((step, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]"
              style={{
                background: "linear-gradient(to bottom, #1a1a1a, #3a3a3a)"
              }}
            >
              <img
                src={images[step]}
                alt={t(`howItWorks.steps.${step}.title`)}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                style={{
                  maxWidth: "50%",
                  margin: "0 auto",
                  display: "block",
                  objectFit: "contain",
                  padding: "1rem"
                }}
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