import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { BetaDialog } from "./BetaDialog";

export const BetaProgram = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t('betaProgram.title')}</h2>
          <p className="text-gray-400 mb-8">
            {t('betaProgram.subtitle')}
          </p>
          <BetaDialog 
            trigger={
              <Button className="bg-primary hover:bg-primary-hover text-white">
                {t('betaProgram.button')}
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};