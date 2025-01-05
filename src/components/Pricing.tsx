import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Flexible Pricing Options</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the pricing model that works best for your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg bg-dark-lighter border border-gray-800 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Fixed Monthly</h3>
            <p className="text-gray-400 mb-6">Perfect for high-volume restaurants</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Unlimited orders</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Predictable monthly cost</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>All features included</span>
              </li>
            </ul>
            <p className="text-gray-400">Contact us for pricing</p>
          </div>
          
          <div className="p-6 rounded-lg bg-dark-lighter border border-primary/50 hover:border-primary transition-colors relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
              Popular
            </div>
            <h3 className="text-xl font-semibold mb-4">Per Order</h3>
            <p className="text-gray-400 mb-6">Pay only for what you use</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Small percentage per order</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>No monthly fees</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>All features included</span>
              </li>
            </ul>
            <p className="text-gray-400">Contact us for pricing</p>
          </div>
          
          <div className="p-6 rounded-lg bg-dark-lighter border border-gray-800 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Custom</h3>
            <p className="text-gray-400 mb-6">Tailored to your needs</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Hybrid pricing options</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Volume discounts</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Custom integration support</span>
              </li>
            </ul>
            <p className="text-gray-400">Contact us for pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
};