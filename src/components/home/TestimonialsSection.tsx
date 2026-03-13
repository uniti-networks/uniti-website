const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container-wide">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">What People Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-xl border-2 border-dashed border-border bg-section-alt aspect-[3/4] flex items-center justify-center">
            <span className="text-sm text-muted-foreground">Testimonial {i}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
