import Navbar from "@/features/landing/components/Navbar";
import Hero from "@/features/landing/components/Hero";
import Features from "@/features/landing/components/Features";
import HowItWorks from "@/features/landing/components/HowItWorks";
import CTA from "@/features/landing/components/CTA";
import Footer from "@/features/landing/components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;
