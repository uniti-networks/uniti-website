import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonial1 = "/lovable-uploads/30e61650-41b1-4250-8f63-53397d4a4fef.png";

const testimonials = [testimonial1, testimonial2, testimonial3, testimonial4];

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
