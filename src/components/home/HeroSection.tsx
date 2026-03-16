import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-girl-phone.png";

/* ── Animated Node Network Canvas ── */
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  speed: number;
}

const NODE_COUNT = 60;
const CONNECT_DIST = 140;

function createNodes(w: number, h: number): Node[] {
  return Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    radius: 1.5 + Math.random() * 2,
    phase: Math.random() * Math.PI * 2,
    speed: 0.3 + Math.random() * 0.7
  }));
}

const NodeCanvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let nodes: Node[];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = createNodes(canvas.offsetWidth, canvas.offsetHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (t: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.25;
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // draw nodes with breathing pulse
      for (const n of nodes) {
        const pulse = 0.4 + 0.6 * ((Math.sin(t * 0.001 * n.speed + n.phase) + 1) / 2);
        // glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.08 * pulse})`;
        ctx.fill();
        // core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.7 * pulse})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }} />);


};

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
      className="relative w-full min-h-[90vh] overflow-hidden flex items-center">
      
      {/* Background image with parallax */}
      <img
        src={heroImg}
        alt="Young woman engaging with smartphone technology"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: "47% center",
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-24" style={{ maxWidth: "40%" }}>
        <div
          className="max-w-xl animate-[fadeInUp_0.8s_ease-out_both]">
          
          




          

          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] mb-6"
            style={{
              fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.02em"
            }}>Digital Activation That Pays


            <br />
            The Uniti Beat Engine
          </h1>

          <p
            className="text-white/75 text-base md:text-lg leading-relaxed max-w-md mb-10"
            style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}>
            
            The activation layer that makes smartphones productive — for users,
            operators, and the services they carry.
          </p>

          <button
            onClick={scrollToProduct}
            className="rounded-lg px-8 py-3.5 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] bg-accent animate-[fadeInUp_0.8s_ease-out_0.3s_both]"
            style={{
              fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif"
            }}>
            
            Discover the Solution
          </button>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default HeroSection;