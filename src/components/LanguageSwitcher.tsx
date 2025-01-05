import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-dark-lighter border-gray-800">
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={`${language === 'en' ? 'text-primary' : 'text-gray-400'} hover:text-white cursor-pointer`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('sv')}
          className={`${language === 'sv' ? 'text-primary' : 'text-gray-400'} hover:text-white cursor-pointer`}
        >
          Svenska
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};