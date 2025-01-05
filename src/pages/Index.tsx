import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { BetaProgram } from "@/components/BetaProgram";
import { Footer } from "@/components/Footer";
import { BetaBanner } from "@/components/BetaBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BetaBanner />
      <Hero />
      <Features />
      <Pricing />
      <BetaProgram />
      <Footer />
    </div>
  );
};

export default Index;