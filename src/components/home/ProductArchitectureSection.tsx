import { Target, Volume2, ShieldCheck, Brain } from "lucide-react";
import phoneStack from "@/assets/phone-stack.png";

const pillars = [
  {
    icon: Target,
    label: "INTENT",
    title: "Goal-Centric Onboarding",
    text: "Users define priorities across health, savings, education, and work, establishing their own pathway to relevance.",
  },
  {
    icon: ShieldCheck,
    label: "FOUNDATION",
    title: "Validated Identity",
    text: "A secure, privacy-first KYC process establishes a formal foundation for digital participation.",
  },
  {
    icon: Brain,
    label: "INTELLIGENCE",
    title: "Contextual Intelligence",
    text: "The engine identifies the precise moments and tones that move a user from passive ownership to active participation.",
  },
  {
    icon: Volume2,
    label: "ACCESS",
    title: "Adaptive Audio",
    text: "Voice guidance in local languages to ensure that comprehension never limits utility.",
  },
];

const ProductArchitectureSection = () => (
  <section
    id="product-section"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#22235b" }}
  >
    {/* ── Floating phone-stack watermark ── */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Breathing blush pulse behind image */}
      <div
        className="absolute w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full animate-beat-pulse"
        style={{ background: "radial-gradient(circle, rgba(82,90,166,0.15) 0%, transparent 70%)" }}
      />
      <img
        src={phoneStack}
        alt=""
        className="relative w-[280px] md:w-[420px] lg:w-[520px] animate-float select-none"
        style={{ opacity: 0.25, filter: "blur(12px)" }}
      />
    </div>

    <div className="relative z-10 section-padding">
      <div className="container-wide">
        {/* ── Typographic header ── */}
        <h2
          className="text-[30px] md:text-[40px] lg:text-[48px] font-extrabold leading-[1.15] max-w-3xl mb-20 md:mb-28"
          style={{ fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif" }}
        >
          <span className="text-white">The Uniti app is powered by Uniti Beat</span>
          <span style={{ color: "#94A3B8" }}>
            {" "}— a dynamic intervention engine serving as the primary infrastructure for digital transition.
          </span>
        </h2>

        {/* ── 4-pillar crosshair grid ── */}
        <div className="relative grid grid-cols-2 lg:grid-cols-4">
          {/* Crosshair lines — vertical */}
          <div className="absolute inset-0 pointer-events-none hidden lg:flex justify-between px-0">
            {[1, 2, 3].map((i) => (
              <div
                key={`v-${i}`}
                className="h-full"
                style={{
                  width: "0.5px",
                  marginLeft: `${i * 25}%`,
                  position: "absolute",
                  background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent 100%)",
                }}
              />
            ))}
          </div>

          {/* Mobile crosshair — vertical center */}
          <div
            className="absolute left-1/2 top-0 bottom-0 lg:hidden pointer-events-none"
            style={{
              width: "0.5px",
              background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent 100%)",
            }}
          />
          {/* Mobile crosshair — horizontal center */}
          <div
            className="absolute top-1/2 left-0 right-0 lg:hidden pointer-events-none"
            style={{
              height: "0.5px",
              background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent 100%)",
            }}
          />

          {pillars.map((p, idx) => (
            <div
              key={p.label}
              className={`group relative p-6 md:p-8 lg:p-10 ${
                /* add top border for bottom row on mobile */
                idx >= 2 ? "lg:border-t-0" : ""
              }`}
            >
              {/* Icon */}
              <div className="mb-5">
                <p.icon
                  className="w-7 h-7 transition-transform duration-500 group-hover:scale-105"
                  style={{ color: "#525aa6" }}
                />
              </div>

              {/* Label */}
              <span
                className="block text-[11px] font-bold tracking-[0.2em] mb-4"
                style={{
                  color: "#525aa6",
                  fontFamily: "'Europa', 'Inter', sans-serif",
                }}
              >
                {p.label}
              </span>

              {/* Title */}
              <h3
                className="text-base md:text-lg font-bold mb-3"
                style={{
                  color: "#525aa6",
                  fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
                }}
              >
                {p.title}
              </h3>

              {/* Body */}
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
