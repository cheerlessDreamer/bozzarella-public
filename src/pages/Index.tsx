import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { BetaProgram } from "@/components/BetaProgram";
import { Footer } from "@/components/Footer";
import { BetaBanner } from "@/components/BetaBanner";
import { FAQ } from "@/components/FAQ";
import { HowItWorks } from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BetaBanner />
      <Hero />
      <HowItWorks />
      <Features />
      {/* <Pricing /> */}
      <FAQ />
      <BetaProgram />
      <Footer />
    </div>
  );
};

export default Index;