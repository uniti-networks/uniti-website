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
  <section
    id="product-section"
    className="relative w-full overflow-hidden"
    style={{
      background: "radial-gradient(ellipse at center, #1e204a 0%, #0b0c1f 70%)",
      margin: 0,
    }}
  >
    <div className="relative z-10 px-6 pt-16 pb-8 md:px-12 md:pt-24 md:pb-10 lg:px-20 lg:pt-32 lg:pb-12">
      <div className="max-w-7xl mx-auto">
        {/* ── Typographic header ── */}
        <h2
          className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[1.1] max-w-[1200px] mb-8 md:mb-12"
          style={{
            fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          <span className="text-white">The Uniti app is powered by Uniti Beat</span>
          <span style={{ color: "#94A3B8" }}>
            {" "}— a dynamic intervention engine serving as the primary infrastructure for digital transition.
          </span>
        </h2>

        {/* ── Hero Visual ── */}
        <div className="relative flex items-center justify-center mb-10 md:mb-14">
          {/* Spotlight glow */}
          <div
            className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(82,90,166,0.15) 0%, transparent 70%)",
            }}
          />
          <img
            src={phoneStack}
            alt="Uniti app phone stack"
            className="relative w-[312px] md:w-[532px] lg:w-[672px] animate-float select-none"
          />
        </div>

        {/* ── Technical Crosshair Grid ── */}
        <div className="relative grid grid-cols-2 lg:grid-cols-4">
          {/* Desktop vertical dividers */}
          {[1, 2, 3].map((i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 hidden lg:block pointer-events-none"
              style={{
                left: `${i * 25}%`,
                width: "0.5px",
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)",
              }}
            />
          ))}

          {/* Mobile crosshair — vertical */}
          <div
            className="absolute left-1/2 top-0 bottom-0 lg:hidden pointer-events-none"
            style={{
              width: "0.5px",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)",
            }}
          />
          {/* Mobile crosshair — horizontal */}
          <div
            className="absolute top-1/2 left-0 right-0 lg:hidden pointer-events-none"
            style={{
              height: "0.5px",
              background:
                "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)",
            }}
          />

          {pillars.map((p) => (
            <div key={p.label} className="group p-6 md:p-8 lg:p-10">
              <p.icon
                className="w-6 h-6 text-white mb-5 transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className="block text-[11px] font-bold tracking-[0.2em] mb-4"
                style={{
                  color: "#525aa6",
                  fontFamily: "'Europa', 'Inter', sans-serif",
                }}
              >
                {p.label}
              </span>
              <h3
                className="text-base md:text-lg font-medium mb-3"
                style={{
                  color: "#525aa6",
                  fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
                }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontFamily: "'Europa', 'Inter', sans-serif",
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProductArchitectureSection;
