const testimonials = [
  "/lovable-uploads/13a1681e-dba9-4379-8d18-59379e8c19ea.png",
  "/lovable-uploads/03ece08a-432b-4ac5-9c08-240217161a2c.png",
  "/lovable-uploads/441ac2da-9258-433c-ba66-34782e7c2890.png",
  "/lovable-uploads/b3dd4cfc-ee54-4560-b5f8-7ad640b810cb.png"
];

const TestimonialsSection = () => (
  <section
    className="px-6 py-10 md:px-12 md:py-16 lg:px-20 lg:py-20"
    style={{ background: "#0b0c1f" }}
  >
    <div className="container-wide">
      <h2
        className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[1.1] text-center text-white mb-12"
        style={{
          fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        What People Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Testimonial ${i + 1}`}
            className="rounded-xl aspect-[3/4] w-full object-cover"
          />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
