const testimonial1 = "/lovable-uploads/30e61650-41b1-4250-8f63-53397d4a4fef.png";
const testimonial2 = "/lovable-uploads/30e61650-41b1-4250-8f63-53397d4a4fef.png";
const testimonial3 = "/lovable-uploads/30e61650-41b1-4250-8f63-53397d4a4fef.png";
const testimonial4 = "/lovable-uploads/30e61650-41b1-4250-8f63-53397d4a4fef.png";

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container-wide">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">What People Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <img src={testimonial1} alt="Testimonial 1" className="rounded-xl aspect-[3/4] w-full object-cover" />
        <img src={testimonial2} alt="Testimonial 2" className="rounded-xl aspect-[3/4] w-full object-cover" />
        <img src={testimonial3} alt="Testimonial 3" className="rounded-xl aspect-[3/4] w-full object-cover" />
        <img src={testimonial4} alt="Testimonial 4" className="rounded-xl aspect-[3/4] w-full object-cover" />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
