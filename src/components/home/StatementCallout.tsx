const StatementCallout = () => (
  <section className="bg-brand-ink px-6 py-20 md:px-12 md:py-28 lg:px-20">
    <div className="container-wide grid gap-8 border-y border-primary-foreground/15 py-12 md:grid-cols-[180px_1fr] md:py-16">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">The problem</p>
      <h2 className="text-[28px] font-semibold leading-[1.15] text-primary-foreground md:text-[44px]">
        Hardware is no longer the bottleneck. The real challenge is the{" "}
        <span className="text-brand-cream">Activation Gap</span> — the distance between device ownership and meaningful digital utility.
      </h2>
    </div>
  </section>
);

export default StatementCallout;
