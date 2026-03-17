const StatementCallout = () => (
  <section
    className="relative px-6 py-16 md:py-20 lg:py-24 overflow-hidden"
    style={{ background: "radial-gradient(ellipse at center, #1e204a 0%, #0b0c1f 70%)" }}
  >
    <div className="max-w-3xl mx-auto text-center">
      <p
        className="text-2xl md:text-3xl lg:text-[2rem] font-bold leading-relaxed text-white"
        style={{
          fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
        }}
      >
        Hardware is no longer the bottleneck. The real challenge is the{" "}
        <span style={{ color: "#525aa6" }}>Relevance Gap</span> — the
        distance between device ownership and meaningful digital utility.
      </p>
    </div>
  </section>
);

export default StatementCallout;
