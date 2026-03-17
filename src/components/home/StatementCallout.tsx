const StatementCallout = () => (
  <section
    className="relative px-6 py-16 md:py-20 lg:py-24 overflow-hidden"
    style={{ background: "radial-gradient(ellipse at center, #1e204a 0%, #0b0c1f 70%)" }}
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2
        className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[1.15]"
        style={{
          fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        <span className="text-white">
          Hardware is no longer the bottleneck. The real challenge is the{" "}
        </span>
        <span style={{ color: "#94A3B8" }}>Relevance Gap</span>
        <span className="text-white">
          {" "}— the distance between device ownership and meaningful digital utility.
        </span>
      </h2>
    </div>
  </section>
);

export default StatementCallout;
