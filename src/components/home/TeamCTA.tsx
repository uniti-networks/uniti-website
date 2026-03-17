import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TeamCTA = () => (
  <section className="px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-24 text-center">
    <div className="container-narrow">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Meet the Team</h2>
      <p className="text-foreground text-lg mb-8">
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
