import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-girl-phone.png";
import NodeCanvas from "@/components/NodeCanvas";
import { Button } from "@/components/ui/button";
import { INVESTOR_DECK_URL } from "@/lib/links";
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

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[min(760px,calc(100svh-100px))] overflow-hidden flex items-center">
      
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
      <div className="home-hero-overlay absolute inset-0" />
      

      {/* Node network overlay */}
      <NodeCanvas />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-20 py-24">
        <div
          className="max-w-3xl animate-[fadeInUp_0.8s_ease-out_both]">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.24em] text-brand-gold">
            The activation layer for first-time smartphone users
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold text-primary-foreground leading-[0.95] mb-8"
            style={{
              fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
              letterSpacing: "0"
            }}>
            Digital activation <span className="text-brand-cream">that pays.</span>
          </h1>

          <p
            className="text-primary-foreground/80 text-base md:text-base leading-relaxed max-w-xl mb-10"
            style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}>
            The activation layer that makes smartphones productive — for users,
            operators, and the services they carry.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
            <Button
              onClick={scrollToDemo}
              className="h-auto inline-flex items-center justify-center gap-3 rounded-full bg-brand-cream px-7 py-3.5 text-base font-semibold text-brand-paris transition-colors hover:bg-primary-foreground">
              <Play className="h-4 w-4 fill-current" /> Watch the product demo
            </Button>
            <Button asChild className="h-auto rounded-full border border-primary-foreground/40 bg-transparent px-7 py-3.5 text-base text-primary-foreground hover:bg-primary-foreground/10"><a
              href={INVESTOR_DECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10">
              Join the current raise <ArrowUpRight className="h-4 w-4" />
            </a></Button>
          </div>
        </div>
      </div>

      {/* Bottom fade to dark */}
      <div className="home-hero-fade absolute bottom-0 left-0 right-0 h-24" />
    </section>);

};

export default HeroSection;