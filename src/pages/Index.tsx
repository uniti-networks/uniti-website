import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatementCallout from "@/components/home/StatementCallout";
import ProductArchitectureSection from "@/components/home/ProductArchitectureSection";
import ActiveEcosystemSection from "@/components/home/ActiveEcosystemSection";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import TeamCTA from "@/components/home/TeamCTA";
import SectionDivider from "@/components/home/SectionDivider";

const Index = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <HeroSection />
      <SectionDivider />
      <StatementCallout />
      <SectionDivider />
      <ProductArchitectureSection />
      <SectionDivider />
      <ActiveEcosystemSection />
      <SectionDivider />
      <ActivitiesSection />
      <SectionDivider light />
      <TestimonialsSection />
      <SectionDivider light />
      <ContactSection />
      <SectionDivider light />
      <TeamCTA />
    </main>
    <Footer />
  </>
);

export default Index;
