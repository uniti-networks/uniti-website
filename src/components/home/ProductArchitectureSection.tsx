import unitiSymbol from "@/assets/uniti-symbol-white.svg";

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
  <section className="section-padding bg-background">
    <div className="container-wide space-y-10">
      {/* Featured card */}
      <div
        className="relative rounded-2xl px-10 py-20 md:px-16 md:py-28 text-center overflow-hidden animate-border-pulse"
        style={{ backgroundColor: "hsl(var(--paris-deep))" }}
      >
        {/* Logo symbol */}
        <div className="flex justify-center mb-12">
          <img
            src={unitiSymbol}
            alt="Uniti symbol"
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>

        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6"
          style={{ fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif" }}
        >
          Contextual Intelligence: The Uniti Beat Engine
        </h2>

        <p
          className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
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
            className="rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              {c.label}
            </span>
            <h3
              className="text-lg md:text-xl font-bold mb-3"
              style={{
                color: "hsl(var(--blush-btn))",
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
