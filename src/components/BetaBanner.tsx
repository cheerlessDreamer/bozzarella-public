import { MegaphoneIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { BetaDialog } from "./BetaDialog";

export const BetaBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-primary/10 py-2 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm text-white">
          <MegaphoneIcon className="w-4 h-4" />
          <p>
            <span className="font-medium">{t('betaBanner.title')}</span>{" "}
            <BetaDialog 
              trigger={
                <Button 
                  variant="link" 
                  className="underline hover:text-primary transition-colors p-0 h-auto font-normal"
                >
                  {t('betaBanner.action')}
                </Button>
              }
            />
            {" "}
            {t('betaBanner.suffix')}
          </p>
        </div>
      </div>
    </div>
  );
};