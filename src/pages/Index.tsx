import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PublicationsSection } from "@/components/PublicationsSection";
import { Knowledge } from "@/components/Knowledge";
import { Testimonials } from "@/components/Testimonials";
import { Tech } from "@/components/Tech";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PublicationsSection />
        <Knowledge />
        <Testimonials />
        <Tech />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
