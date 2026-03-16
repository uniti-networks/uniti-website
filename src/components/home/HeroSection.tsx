import heroDefault from "@/assets/hero-default.jpg";

const HeroSection = () => {
  const scrollToProduct = () => {
    document.getElementById("product-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[85vh] grid grid-cols-1 lg:grid-cols-2">
      {/* Left — text panel */}
      <div
        className="flex flex-col justify-center px-10 md:px-16 lg:px-20 xl:px-28 py-20"
        style={{ backgroundColor: "hsl(239, 46%, 24%)" }}
      >
        <h1
          className="text-4xl md:text-5xl lg:text-[3.4rem] xl:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          style={{ fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif" }}
        >
          Digital Activation
          <br />
          That Pays
        </h1>

        <p
          className="text-white/80 text-base md:text-lg leading-relaxed max-w-md mb-10"
          style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}
        >
          The activation layer that makes smartphones productive — for users,
          operators, and the services they carry.
        </p>

        <button
          onClick={scrollToProduct}
          className="self-start rounded-lg px-8 py-3.5 text-sm font-semibold text-white tracking-wide transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: "hsl(234, 34%, 49%)",
            fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
          }}
        >
          Discover the Solution
        </button>
      </div>

      {/* Right — image with glass overlay */}
      <div className="relative overflow-hidden min-h-[50vh] lg:min-h-0">
        <img
          src={heroDefault}
          alt="Uniti hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Glass overlay */}
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{ backgroundColor: "hsla(239, 46%, 40%, 0.35)" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
