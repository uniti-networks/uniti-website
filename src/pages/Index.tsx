import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatementCallout from "@/components/home/StatementCallout";
import ProductSection from "@/components/home/ProductSection";
import ProductArchitectureSection from "@/components/home/ProductArchitectureSection";
import ClientsSection from "@/components/home/ClientsSection";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import TeamCTA from "@/components/home/TeamCTA";

const Index = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <HeroSection />
      <StatementCallout />
      <ProductSection />
      <ClientsSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <ContactSection />
      <TeamCTA />
    </main>
    <Footer />
  </>
);

export default Index;
