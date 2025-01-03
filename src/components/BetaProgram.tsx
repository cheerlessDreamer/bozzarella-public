import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const BetaProgram = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for your interest! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Beta Program</h2>
          <p className="text-gray-400 mb-8">
            Be among the first to experience Bozzarella and help shape the future of restaurant order management. Beta users get lifetime free access.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-dark-lighter"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary-hover text-white">
              Get Early Access
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};