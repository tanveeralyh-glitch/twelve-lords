import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedHub } from "@/components/FeaturedHub";
import { Knowledge } from "@/components/Knowledge";
import { Testimonials } from "@/components/Testimonials";
import { Tech } from "@/components/Tech";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeaturedHub />
        <Knowledge />
        <Testimonials />
        <Tech />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
