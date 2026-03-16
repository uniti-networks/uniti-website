import unitiSymbol from "@/assets/uniti-symbol-white.svg";
import unitiSymbolParis from "@/assets/uniti-symbol-paris.svg";

const cards = [
  {
    label: "Intent",
    title: "Goal-Centric Onboarding",
    text: "Users define priorities across health, savings, education, and work to build their own pathway to relevance.",
  },
  {
    label: "Access",
    title: "Adaptive Audio",
    text: "Voice guidance in local languages ensures that literacy and comprehension never limit utility.",
  },
  {
    label: "Foundation",
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
        <div className="absolute inset-0 flex items-start justify-center pt-16 md:pt-20 pointer-events-none">
          <div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full animate-beat-pulse"
            style={{ backgroundColor: "rgba(82, 90, 166, 0.15)" }}
          />
        </div>

        {/* Logo symbol — 20% larger */}
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
            className="relative rounded-[12px] border border-border bg-card p-8 md:p-10 flex flex-col overflow-hidden shadow-sm"
          >
            {/* Watermark */}
            <img
              src={unitiSymbolParis}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-10px] right-[-10px] w-28 h-28 opacity-[0.05]"
            />

            {/* Category label */}
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] mb-4 pb-2 self-start"
              style={{
                fontFamily: "'Europa', 'Inter', sans-serif",
                color: "#22235b",
                borderBottom: "1px solid #525aa6",
              }}
            >
              {c.label}
            </span>

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
