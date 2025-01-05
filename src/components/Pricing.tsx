import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Fair Pricing for Every Restaurant</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you're a small family restaurant or a busy establishment, we have a plan that works for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg bg-dark-lighter border border-gray-800 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Small Restaurant</h3>
            <p className="text-gray-400 mb-6">Perfect for family-run restaurants handling up to 500 phone orders monthly</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Pay per order</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>No monthly minimums</span>
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
              Most Popular
            </div>
            <h3 className="text-xl font-semibold mb-4">Medium Restaurant</h3>
            <p className="text-gray-400 mb-6">Great for established local favorites with 500-2000 monthly phone orders</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Flexible payment options</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Volume discounts</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>All features included</span>
              </li>
            </ul>
            <p className="text-gray-400">Contact us for pricing</p>
          </div>
          
          <div className="p-6 rounded-lg bg-dark-lighter border border-gray-800 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Large Restaurant</h3>
            <p className="text-gray-400 mb-6">Ideal for busy establishments with 2000+ monthly phone orders</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Custom pricing plans</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>All features included</span>
              </li>
            </ul>
            <p className="text-gray-400">Contact us for pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
};