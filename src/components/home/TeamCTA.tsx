import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TeamCTA = () => (
  <section
    className="px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-24 text-center"
    style={{ background: "#0b0c1f" }}
  >
    <div className="container-narrow">
      <h2
        className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[1.1] text-white mb-4"
        style={{
          fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        Meet the Team
      </h2>
      <p
        className="text-lg mb-8"
        style={{
          fontFamily: "'Europa', 'Inter', sans-serif",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        The people building the future of digital activation.
      </p>
      <Link to="/team">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
          Team & Careers <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  </section>
);

export default TeamCTA;
