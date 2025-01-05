import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const BetaProgram = () => {
  const { t } = useLanguage();

  const handleJoinBeta = () => {
    window.open("https://form.typeform.com/to/placeholder", "_blank");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t('betaProgram.title')}</h2>
          <p className="text-gray-400 mb-8">
            {t('betaProgram.subtitle')}
          </p>
          <Button 
            onClick={handleJoinBeta}
            className="bg-primary hover:bg-primary-hover text-white"
          >
            {t('betaProgram.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};