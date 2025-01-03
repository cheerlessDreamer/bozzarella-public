import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { BetaProgram } from "@/components/BetaProgram";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <BetaProgram />
      <Footer />
    </div>
  );
};

export default Index;