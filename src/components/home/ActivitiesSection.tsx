import { Box, Settings, Puzzle, UserCheck, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoMtn from "@/assets/logo-mtn-white.png";
import logoEsoko from "@/assets/logo-esoko.png";
import logoUniti from "@/assets/uniti-masterbrand-white.svg";
import { Button } from "@/components/ui/button";

const weGrowPhotos = [
  "/lovable-uploads/2e392a58-d64a-4bf3-a0f3-c1dc276a55d5.png",
  "/lovable-uploads/6ff3e2cd-7d41-435f-89fa-4ea124582d2f.png",
  "/lovable-uploads/5ef9e408-9b5e-44d8-b036-546d90882035.jpg",
];

const methodology = [
  {
    Icon: Box,
    label: "FRAMEWORK",
    title: "Scalable Framework",
    desc: "Designed to activate users across high-utility sectors — from financial services to healthcare.",
  },
  {
    Icon: Settings,
    label: "IMPACT",
    title: "Systemic Impact",
    desc: "Turning connectivity into a measurable economic tool for rural and peri-urban populations at a national scale.",
  },
  {
    Icon: Puzzle,
    label: "ADOPTION",
    title: "Overcoming the Skills Gap",
    desc: "Solving the barriers of perceived exclusion and technical friction that cause users to abandon digital services.",
  },
  {
    Icon: UserCheck,
    label: "RETENTION",
    title: "Extrinsic to Intrinsic",
    desc: "Moving users from extrinsic rewards to personal relevance as the ultimate driver of retention.",
  },
];

const ActivitiesSection = () => (
  <section className="bg-brand-paris px-6 py-20 md:px-12 md:py-28 lg:px-20">
    <div className="container-wide">
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">From proof to scale</p><h2 className="text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">Built in the field.<br /><span className="text-brand-cream">Ready for scale.</span></h2></div>
        <Button asChild variant="link" className="h-auto justify-start px-0 text-base text-primary-foreground"><Link to="/licensing">Explore licensing <ArrowUpRight /></Link></Button>
      </div>
      <div className="grid gap-12 border-y border-primary-foreground/20 py-12 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">National deployment</p>
          <h3 className="text-3xl font-semibold text-primary-foreground">MTN Ghana &amp; Esoko</h3>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">Uniti is working with MTN Ghana and Esoko on a phased deployment that establishes the behavioral infrastructure required to activate one million users from MTN's subscriber base.</p>
          <div className="mt-10 flex items-center gap-8">
            <img src={logoMtn} alt="MTN logo" className="h-10 w-auto object-contain md:h-14" />
            <img src={logoEsoko} alt="Esoko logo" className="h-3.5 w-auto object-contain brightness-0 invert md:h-5" />
            <img src={logoUniti} alt="Uniti logo" className="h-5 w-auto object-contain md:h-7" />
          </div>
        </div>
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">The WeGrow Project</p>
          <h3 className="text-3xl font-semibold text-primary-foreground">Real lives. Real participation.</h3>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/80">Our infrastructure is built on validated behavioral data. In our foundational deployment with CARE International and DANIDA, we successfully moved users from silent device ownership to active digital participation.</p>
          <div className="mt-8 grid grid-cols-3 gap-2">{weGrowPhotos.map((src, i) => <img key={src} src={src} alt={`WeGrow field photo ${i + 1}`} className="aspect-[3/4] w-full rounded-lg object-cover" loading="lazy" />)}</div>
        </div>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {methodology.map((m) => <div key={m.label}><m.Icon className="mb-5 h-6 w-6 text-brand-cream" /><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">{m.label}</p><h3 className="mb-3 text-xl font-semibold text-primary-foreground">{m.title}</h3><p className="text-base leading-relaxed text-primary-foreground/75">{m.desc}</p></div>)}
      </div>
    </div>
  </section>
);
export default ActivitiesSection;
