import heroDefault from "@/assets/hero-default.jpg";

const HeroSection = () => (
  <section className="relative w-full min-h-[80vh] flex items-center justify-center">
    <img
      src={heroDefault}
      alt="Hero background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6">
        Digital Activation That Pays
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
        The activation layer that makes smartphones productive — for users, operators, and the services they carry.
      </p>
    </div>
  </section>
);

export default HeroSection;
