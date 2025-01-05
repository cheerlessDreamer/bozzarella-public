import { ArrowRight, Globe2, Phone, Shield } from "lucide-react";

export const AdditionalFeatures = () => {
  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">And That's Not All...</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some extra features that make Bozzarella even more helpful
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <Globe2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Multilingual Support</h3>
              <p className="text-gray-400">
                Take orders in any language, making your pizzeria accessible to everyone in your community
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Human Backup</h3>
              <p className="text-gray-400">
                Seamlessly transfer calls to your staff if needed - we know sometimes you need that human touch
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
              <p className="text-gray-400">
                Choose whether to store order history or keep things private - you're in control of your data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};