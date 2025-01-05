import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/80 to-dark/95" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold">
            Your Restaurant's Voice,
            <span className="gradient-text block mt-2">Always On Call</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Bozzarella is an AI assistant that takes phone orders for your restaurant, so you can focus on what matters most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            <div className="bg-dark-lighter/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:bg-dark-lighter/70 hover:border-gray-700 hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">24/7 Order Taking</h3>
              <p className="text-gray-400">
                Never miss a call, even during peak hours or after closing time.
              </p>
            </div>
            <div className="bg-dark-lighter/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:bg-dark-lighter/70 hover:border-gray-700 hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Zero Mistakes</h3>
              <p className="text-gray-400">
                Every order captured with perfect accuracy, every single time.
              </p>
            </div>
            <div className="bg-dark-lighter/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:bg-dark-lighter/70 hover:border-gray-700 hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Staff Freedom</h3>
              <p className="text-gray-400">
                Let your team focus on cooking and serving, not answering phones.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-white"
              onClick={() => window.open("https://form.typeform.com/to/placeholder", "_blank")}
            >
              Join Beta Program
            </Button>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="gap-2 w-full" 
                      disabled
                    >
                      <Phone className="w-4 h-4" />
                      Request Demo
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="z-50">
                  <p>Coming soon!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};