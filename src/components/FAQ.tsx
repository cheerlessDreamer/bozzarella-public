import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[300px,1fr] gap-8 max-w-6xl mx-auto">
          {/* Left column with title and support button */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">{t('faq.title')}</h2>
            <Button 
              variant="outline" 
              className="bg-transparent text-white border-white/20 hover:bg-white/10"
            >
              Contact Support
            </Button>
          </div>

          {/* Right column with accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {t<FAQItem[]>('faq.questions').map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-dark-lighter border border-gray-800 rounded-lg px-6 data-[state=open]:bg-white/5"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};