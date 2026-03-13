const testimonials = [
  "/lovable-uploads/13a1681e-dba9-4379-8d18-59379e8c19ea.png",
  "/lovable-uploads/03ece08a-432b-4ac5-9c08-240217161a2c.png",
  "/lovable-uploads/441ac2da-9258-433c-ba66-34782e7c2890.png",
  "/lovable-uploads/b3dd4cfc-ee54-4560-b5f8-7ad640b810cb.png"
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container-wide">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">What People Say</h2>
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
