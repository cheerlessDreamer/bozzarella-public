import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold">
            Your Restaurant's Voice,
            <span className="gradient-text block mt-2">Always On Call</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Bozzarella is an AI assistant that takes phone orders for your restaurant, so you can focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white">
              Join Beta Program
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Phone className="w-4 h-4" />
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};