import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatementCallout from "@/components/home/StatementCallout";
import ProductArchitectureSection from "@/components/home/ProductArchitectureSection";
import ActiveEcosystemSection from "@/components/home/ActiveEcosystemSection";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";


import SectionDivider from "@/components/home/SectionDivider";

const Index = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <HeroSection />
      <StatementCallout />
      <SectionDivider />
      <ProductArchitectureSection />
      <SectionDivider />
      <ActiveEcosystemSection />
      <SectionDivider />
      <ActivitiesSection />
      <SectionDivider />
      <TestimonialsSection />
    </main>
    <Footer />
  </>
);

export default Index;
