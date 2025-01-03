import { MegaphoneIcon } from "lucide-react";

export const BetaBanner = () => {
  const handleClick = () => {
    window.open("https://form.typeform.com/to/placeholder", "_blank");
  };

  return (
    <div className="bg-primary/10 py-2 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm text-white">
          <MegaphoneIcon className="w-4 h-4" />
          <p>
            <span className="font-medium">We're looking for beta testers!</span>{" "}
            <button 
              onClick={handleClick}
              className="underline hover:text-primary transition-colors"
            >
              Join our program
            </button>{" "}
            and get free access.
          </p>
        </div>
      </div>
    </div>
  );
};