import { Target, Volume2, ShieldCheck, Brain } from "lucide-react";
import phoneStack from "@/assets/phone-stack.png";

const pillars = [
  {
    icon: Target,
    label: "INTENT",
    title: "Goal-Centric Onboarding",
    text: "Users define priorities across health, savings, education, and work.",
  },
  {
    icon: ShieldCheck,
    label: "FOUNDATION",
    title: "Validated Identity",
    text: "A secure, privacy-first KYC process establishes a formal foundation.",
  },
  {
    icon: Brain,
    label: "INTELLIGENCE",
    title: "Contextual Intelligence",
    text: "Identifying the precise moments that move users to active participation.",
  },
  {
    icon: Volume2,
    label: "ACCESS",
    title: "Adaptive Audio",
    text: "Voice guidance in local languages ensures comprehension never limits utility.",
  },
];

const ProductArchitectureSection = () => (
  <section id="product-section" className="scroll-mt-16 overflow-hidden bg-brand-ink px-6 py-20 md:px-12 md:py-28 lg:px-20">
    <div className="container-wide">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">The intelligence underneath</p>
          <h2 className="text-4xl font-extrabold leading-[1.05] text-primary-foreground md:text-6xl">Powered by<br /><span className="text-brand-steel">Uniti Beat.</span></h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/75">A dynamic intervention &amp; intelligence engine serving as infrastructure for digital transition.</p>
        </div>
        <img src={phoneStack} alt="Uniti app phone stack" className="mx-auto w-full max-w-xl select-none motion-safe:animate-float" />
      </div>
      <div className="mt-12 grid grid-cols-1 border-t border-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <div key={p.label} className="border-b border-primary-foreground/20 py-8 pr-6 lg:pr-8">
            <div className="mb-6 flex items-center gap-4"><p.icon className="h-6 w-6 text-brand-steel" /><span className="font-mono text-xs text-primary-foreground/40">0{i + 1}</span></div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">{p.label}</p>
            <h3 className="mb-3 text-xl font-semibold text-primary-foreground">{p.title}</h3>
            <p className="text-base leading-relaxed text-primary-foreground/75">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default ProductArchitectureSection;
