import { Target, Volume2, ShieldCheck } from "lucide-react";
import unitiSymbol from "@/assets/uniti-symbol-white.svg";

const cards = [
  {
    icon: Target,
    label: "INTENT",
    title: "Goal-Centric Onboarding",
    text: "Users define priorities across health, savings, education, and work to build their own pathway to relevance.",
  },
  {
    icon: Volume2,
    label: "ACCESS",
    title: "Adaptive Audio",
    text: "Voice guidance in local languages ensures that literacy and comprehension never limit utility.",
  },
  {
    icon: ShieldCheck,
    label: "FOUNDATION",
    title: "Validated Identity",
    text: "A secure, privacy-first KYC process establishes a formal foundation for digital participation.",
  },
];

const ProductArchitectureSection = () => (
  <section id="product-section" className="section-padding bg-background">
    <div className="container-wide space-y-10">
      {/* Featured card */}
      <div
        className="relative rounded-[16px] px-10 py-20 md:px-16 md:py-28 text-center overflow-hidden"
        style={{ backgroundColor: "#22235b" }}
      >
        {/* Animated pulse behind logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full animate-beat-pulse"
            style={{ backgroundColor: "rgba(82, 90, 166, 0.15)" }}
          />
        </div>

        <div className="relative flex justify-center mb-12">
          <img
            src={unitiSymbol}
            alt="Uniti symbol"
            className="w-[115px] h-[115px] md:w-[154px] md:h-[154px]"
          />
        </div>

        <h2
          className="relative text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6"
          style={{ fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif" }}
        >
          Contextual Intelligence: The Uniti Beat Engine
        </h2>

        <p
          className="relative text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}
        >
          Our primary infrastructure for digital transition. It identifies the
          precise moments and tones that move users from passive ownership to
          active participation.
        </p>
      </div>

      {/* 3-column supporting grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.label}
            className="rounded-[12px] border border-border bg-card p-8 md:p-10 flex flex-col shadow-sm"
          >
            {/* Icon + label row */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "hsl(232 50% 49% / 0.1)" }}
              >
                <c.icon className="w-5 h-5" style={{ color: "#525aa6" }} />
              </div>
              <span
                className="text-xs font-bold tracking-[0.2em]"
                style={{
                  fontFamily: "'Europa', 'Inter', sans-serif",
                  color: "#22235b",
                }}
              >
                {c.label}
              </span>
            </div>

            <h3
              className="text-lg md:text-xl font-bold mb-3"
              style={{
                color: "#525aa6",
                fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
              }}
            >
              {c.title}
            </h3>
            <p
              className="text-foreground text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}
            >
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductArchitectureSection;
