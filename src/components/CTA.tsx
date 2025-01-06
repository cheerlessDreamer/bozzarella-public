import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-32 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left column with text and button */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Ready to simplify your financial transactions?
            </h2>
            <p className="text-gray-400 text-lg">
              Join thousands of satisfied users and experience the difference.
            </p>
            <Button 
              size="lg"
              className="bg-white text-dark hover:bg-gray-100"
            >
              Open an Account
            </Button>
          </div>
          
          {/* Right column with card image */}
          <div className="relative">
            <div className="w-full aspect-[1.586/1] bg-[#40E0D0] rounded-2xl shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded" />
                    <span className="font-semibold">Zenpay</span>
                  </div>
                  <div className="w-12 h-8 bg-white/20 rounded" />
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-8 bg-white/20 rounded" />
                  <div className="space-y-2">
                    <p className="text-dark text-sm font-medium">Devon Lane</p>
                    <p className="text-dark/60 text-sm">•••• 4729</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-16 h-8 bg-white/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};