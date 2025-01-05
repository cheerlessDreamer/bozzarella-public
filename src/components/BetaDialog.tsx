import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const BetaDialog = ({ trigger }: { trigger: React.ReactNode }) => {
  const handleJoinBeta = () => {
    window.open("https://s1bd9ibzge3.typeform.com/to/z4hzAa2Z", "_blank");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Important Notice - Beta Program</DialogTitle>
          <DialogDescription className="pt-4 space-y-4">
            <p>
              Thank you for your interest in Bozzarella! Before you sign up for our beta program, please note:
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>This is an experimental product in early development</li>
              <li>Features, pricing, and availability may change significantly</li>
              <li>The product may be discontinued if we don't find product-market fit</li>
              <li>Beta access is not guaranteed and will be granted based on compatibility with our current development phase</li>
              <li>Beta testers get priority access and special pricing if/when we launch</li>
            </ul>
            <p className="pt-2">
              If you understand these conditions and would like to help shape the future of restaurant phone orders, please proceed to our brief questionnaire.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end mt-6">
          <Button onClick={handleJoinBeta}>
            Answer a Few Questions
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};