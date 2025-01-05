import { MegaphoneIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const BetaBanner = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    window.open("https://form.typeform.com/to/placeholder", "_blank");
  };

  return (
    <div className="bg-primary/10 py-2 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm text-white">
          <MegaphoneIcon className="w-4 h-4" />
          <p>
            <span className="font-medium">{t('betaBanner.title')}</span>{" "}
            <button 
              onClick={handleClick}
              className="underline hover:text-primary transition-colors"
            >
              {t('betaBanner.action')}
            </button>{" "}
            {t('betaBanner.suffix')}
          </p>
        </div>
      </div>
    </div>
  );
};