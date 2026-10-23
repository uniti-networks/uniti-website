import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatementCallout from "@/components/home/StatementCallout";
import ProductArchitectureSection from "@/components/home/ProductArchitectureSection";
import ActiveEcosystemSection from "@/components/home/ActiveEcosystemSection";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DemoSection from "@/components/home/DemoSection";
import CustomerEconomicsSection from "@/components/home/CustomerEconomicsSection";
import InvestorCallout from "@/components/home/InvestorCallout";
import { usePageMetadata } from "@/hooks/use-page-metadata";




const Index = () => {
  usePageMetadata({
    title: "Uniti Networks — Digital Activation That Pays",
    description: "One activation, many paying services. Uniti shares the cost of turning first-time smartphone users into engaged digital participants.",
    ogTitle: "Uniti Networks — Digital Activation That Pays",
    ogDescription: "The activation layer that makes smartphones productive — for users, operators, and the services they carry.",
    ogUrl: "https://unitinetworks.com",
  });
  return (
  <>
    <Navbar />
    <main className="pt-16">
      <HeroSection />
      <StatementCallout />
      <DemoSection />
      <CustomerEconomicsSection />
      <ProductArchitectureSection />
      <ActiveEcosystemSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <InvestorCallout />
    </main>
    <Footer />
  </>
  );
};

export default Index;
