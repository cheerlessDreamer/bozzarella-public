import React from 'react';
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { BetaBanner } from "@/components/BetaBanner";
import { FAQ } from "@/components/FAQ";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <BetaBanner />
      <Hero />
      <HowItWorks />
      <Features />
      {/* <Pricing /> */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;