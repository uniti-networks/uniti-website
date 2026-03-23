import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-girl-phone.png";
import NodeCanvas from "@/components/NodeCanvas";
/* ── Hero Section ── */
const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  // parallax
  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setOffset(-rect.top * 0.25);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProduct = () => {
    document.getElementById("product-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[90vh] xl:min-h-[80vh] 2xl:min-h-[70vh] overflow-hidden flex items-center"
      style={{ aspectRatio: "21/9", maxHeight: "95vh" }}>
      
      {/* Background image with parallax */}
      <img
        src={heroImg}
        alt="Young woman engaging with smartphone technology"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: "70% center",
          transform: `translateY(${offset}px)`,
          willChange: "transform"
        }} />
      

      {/* Dark overlay for text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
          "linear-gradient(105deg, hsla(239,46%,18%,0.82) 0%, hsla(239,46%,22%,0.55) 50%, hsla(239,46%,30%,0.3) 100%)"
        }} />
      

      {/* Node network overlay */}
      <NodeCanvas />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-24">
        <div
          className="max-w-xl animate-[fadeInUp_0.8s_ease-out_both]">
          
          




          

          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] mb-6"
            style={{
              fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.02em"
            }}>
            Digital Activation That Pays
            <br />
            <span className="text-white/90"></span>
          </h1>

          <p
            className="text-white/75 text-base md:text-lg leading-relaxed max-w-md mb-10"
            style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}>
            
            The activation layer that makes smartphones productive — for users,
            operators, and the services they carry.
          </p>

          <button
            onClick={scrollToProduct}
            className="rounded-lg px-8 py-3.5 text-base font-semibold text-white tracking-wide transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] bg-accent animate-[fadeInUp_0.8s_ease-out_0.3s_both]"
            style={{
              fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif"
            }}>
            
            Discover the Solution
          </button>
        </div>
      </div>

      {/* Bottom fade to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, #0b0c1f, transparent)" }} />
    </section>);

};

export default HeroSection;