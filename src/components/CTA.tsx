import { Button } from "@/components/ui/button";
import { BetaDialog } from "./BetaDialog";
import { useLanguage } from "@/contexts/LanguageContext";

export const CTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-32 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left column with text and button */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Join Our Beta Program Today
            </h2>
            <p className="text-gray-400 text-lg">
              {t('betaProgram.subtitle')}
            </p>
            <BetaDialog 
              trigger={
                <Button 
                  size="lg"
                  className="bg-white text-dark hover:bg-gray-100"
                >
                  {t('betaProgram.button')}
                </Button>
              }
            />
          </div>
          
          {/* Right column with image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Code on computer screen" 
              className="w-full rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};