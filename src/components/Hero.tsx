import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BetaDialog } from "./BetaDialog";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToVideo = () => {
    const videoSection = document.getElementById('demo-video');
    videoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-bottom w-full"
        style={{
          backgroundImage: 'url("/hero.png")',
          maxWidth: '1920px',
          margin: '0 auto',
          left: '0',
          right: '0',
          width: '100%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/80 to-dark/95" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold">
            {t('hero.title')}
            <span className="gradient-text block mt-2">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            <div className="bg-dark-lighter/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:bg-dark-lighter/70 hover:border-gray-700 hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">{t('hero.features.orderTaking')}</h3>
              <p className="text-gray-400">
                {t('hero.features.orderTakingDesc')}
              </p>
            </div>
            <div className="bg-dark-lighter/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:bg-dark-lighter/70 hover:border-gray-700 hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">{t('hero.features.zeroMistakes')}</h3>
              <p className="text-gray-400">
                {t('hero.features.zeroMistakesDesc')}
              </p>
            </div>
            <div className="bg-dark-lighter/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:bg-dark-lighter/70 hover:border-gray-700 hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">{t('hero.features.staffFreedom')}</h3>
              <p className="text-gray-400">
                {t('hero.features.staffFreedomDesc')}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BetaDialog 
              trigger={
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-hover text-white"
                >
                  {t('hero.betaButton')}
                </Button>
              }
            />
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              onClick={scrollToVideo}
            >
              <Video className="w-4 h-4" />
              {t('hero.watchDemo')}
            </Button>
          </div>

          <div id="demo-video" className="mt-16 max-w-4xl mx-auto bg-dark-lighter rounded-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};