import { useEffect, useRef, useState, useCallback } from "react";

/* ── Node data ── */
const nodes = [
  {
    fig: "FIG 01",
    tag: "VERIFIED UTILITY",
    title: "Mobile Network\nOperators",
    desc: "We convert passive subscribers into high-intent users by making the device essential to their daily life. By building sustainable digital habits through the Uniti Beat, we drive long-term ARPU growth and solve the 'Silent SIM' challenge in critical segments.",
    icon: "tower",
  },
  {
    fig: "FIG 02",
    tag: "PORTFOLIO DE-RISKING",
    title: "Device Financers",
    desc: "Repayment consistency is directly tied to device essentiality. Uniti ensures the device is deeply integrated into the user's life, significantly lowering NPL risks.",
    icon: "phone",
  },
  {
    fig: "FIG 03",
    tag: "THE INDUCTION LAYER",
    title: "App Developers",
    desc: "Uniti provides a direct, scalable Induction Layer that meets users where they are, achieving 6–8x the industry-standard engagement rate.",
    icon: "code",
  },
  {
    fig: "FIG 04",
    tag: "IMPACT AT SCALE",
    title: "NGOs / Not-for-Profits",
    desc: "Reach underserved populations with digital services that drive measurable social outcomes beyond initial rollout.",
    icon: "globe",
  },
  {
    fig: "FIG 05",
    tag: "DIGITAL INCLUSION INFRASTRUCTURE",
    title: "Governments",
    desc: "Enable national digital transformation agendas by activating citizens as productive digital participants.",
    icon: "building",
  },
];

/* ── Custom SVG icons ── */
const NodeIcon = ({ type, className = "" }: { type: string; className?: string }) => {
  const props = { className: `${className}`, fill: "none", stroke: "currentColor", strokeWidth: 1.5, viewBox: "0 0 24 24" };
  switch (type) {
    case "tower":
      return (
        <svg {...props}>
          <path d="M12 20V10" strokeLinecap="round" />
          <path d="M12 10L8 20" strokeLinecap="round" />
          <path d="M12 10L16 20" strokeLinecap="round" />
          <path d="M10 15H14" strokeLinecap="round" />
          <circle cx="12" cy="7" r="2" />
          <path d="M8.5 4.5C9.5 3.5 10.7 3 12 3s2.5.5 3.5 1.5" strokeLinecap="round" />
          <path d="M6 2.5C7.7 1.2 9.7.5 12 .5s4.3.7 6 2" strokeLinecap="round" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18.01" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "code":
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="14" y1="4" x2="10" y2="20" strokeLinecap="round" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="7" />
          <path d="M12 2C9.5 4 8 6.5 8 9s1.5 5 4 7" />
          <path d="M12 2c2.5 2 4 4.5 4 7s-1.5 5-4 7" />
          <line x1="5" y1="9" x2="19" y2="9" />
          <path d="M7 17C8 19 9.5 21 12 22c2.5-1 4-3 5-5" strokeLinecap="round" />
          <path d="M9 20l-1 2" strokeLinecap="round" />
          <path d="M15 20l1 2" strokeLinecap="round" />
        </svg>
      );
    case "building":
      return (
        <svg {...props}>
          <path d="M3 21h18" strokeLinecap="round" />
          <path d="M5 21V7l7-4 7 4v14" strokeLinejoin="round" />
          <path d="M9 21v-4h6v4" />
          <line x1="9" y1="10" x2="9" y2="10.01" strokeLinecap="round" strokeWidth="2" />
          <line x1="12" y1="10" x2="12" y2="10.01" strokeLinecap="round" strokeWidth="2" />
          <line x1="15" y1="10" x2="15" y2="10.01" strokeLinecap="round" strokeWidth="2" />
          <line x1="9" y1="14" x2="9" y2="14.01" strokeLinecap="round" strokeWidth="2" />
          <line x1="12" y1="14" x2="12" y2="14.01" strokeLinecap="round" strokeWidth="2" />
          <line x1="15" y1="14" x2="15" y2="14.01" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
};

/* ── Glowing "U" center logo ── */
const UnitiHub = ({ size = 96 }: { size?: number }) => (
  <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
    {/* Outer glow rings */}
    <div
      className="absolute inset-0 rounded-full animate-beat-pulse"
      style={{ background: "radial-gradient(circle, rgba(82,90,166,0.25) 0%, transparent 70%)", transform: "scale(2.2)" }}
    />
    <div
      className="absolute inset-0 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(82,90,166,0.12) 0%, transparent 60%)", transform: "scale(1.6)" }}
    />
    {/* Glass circle */}
    <div
      className="relative rounded-full flex items-center justify-center"
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 40% 35%, rgba(82,90,166,0.35), rgba(30,32,74,0.8))",
        border: "0.5px solid rgba(82,90,166,0.4)",
        boxShadow: "0 0 40px 8px rgba(82,90,166,0.2), inset 0 0 20px rgba(82,90,166,0.15)",
      }}
    >
      <span
        className="text-white font-medium select-none"
        style={{
          fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
          fontSize: size * 0.4,
          letterSpacing: "-0.02em",
        }}
      >
        U
      </span>
    </div>
  </div>
);

/* ── Particle canvas for constellation lines ── */
const ConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; alpha: number; size: number }[]>([]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const particles = particlesRef.current;
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      p.alpha = 0.15 + Math.sin(Date.now() * 0.001 + p.x * 0.01) * 0.1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(82, 90, 166, ${p.alpha})`;
      ctx.fill();
    }

    // Draw faint connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(82, 90, 166, ${0.06 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();

    // Init particles
    const count = 40;
    const rect = canvas.parentElement?.getBoundingClientRect();
    const w = rect?.width ?? 800;
    const h = rect?.height ?? 600;
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.2 + 0.05,
      size: Math.random() * 1.5 + 0.5,
    }));

    animRef.current = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [animate]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

/* ── Desktop radial hub layout ── */

// Arc positions for 5 nodes around center
const desktopPositions = [
  { left: "2%", top: "18%" },    // Node 1 — top-left
  { left: "72%", top: "12%" },   // Node 2 — top-right
  { left: "30%", top: "58%" },   // Node 3 — center (below hub)
  { left: "68%", top: "62%" },   // Node 4 — bottom-right
  { left: "6%", top: "70%" },    // Node 5 — bottom-left
];

const DesktopNode = ({
  node,
  position,
  index,
}: {
  node: (typeof nodes)[0];
  position: { left: string; top: string };
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const maxW = index === 2 ? "320px" : "260px";

  return (
    <div
      className="absolute transition-transform duration-500 ease-out"
      style={{
        left: position.left,
        top: position.top,
        transform: hovered ? "scale(1.05)" : "scale(1)",
        maxWidth: maxW,
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div
        className="mb-3 transition-all duration-500"
        style={{
          filter: hovered ? "drop-shadow(0 0 8px rgba(82,90,166,0.6))" : "none",
        }}
      >
        <NodeIcon type={node.icon} className="w-8 h-8 text-white/70" />
      </div>

      {/* Fig label */}
      <span
        className="block text-[10px] mb-1 tracking-[0.15em]"
        style={{
          fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        {node.fig}
      </span>

      {/* Tag */}
      <span
        className="block text-[10px] font-bold tracking-[0.2em] mb-2"
        style={{
          fontFamily: "'Europa', 'Inter', sans-serif",
          color: "#525aa6",
        }}
      >
        {node.tag}
      </span>

      {/* Title */}
      <h3
        className="text-base md:text-lg font-medium mb-2"
        style={{
          fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
          letterSpacing: "-0.02em",
          color: hovered ? "#fff" : "rgba(255,255,255,0.85)",
          whiteSpace: "pre-line",
          transition: "color 0.3s",
        }}
      >
        {node.title}
      </h3>

      {/* Description */}
      <p
        className="text-[13px] leading-[1.7]"
        style={{
          fontFamily: "'Europa', 'Inter', sans-serif",
          color: hovered ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.45)",
          transition: "color 0.4s",
        }}
      >
        {node.desc}
      </p>
    </div>
  );
};

/* ── Mobile timeline node ── */
const MobileNode = ({
  node,
  index,
}: {
  node: (typeof nodes)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex items-start gap-4 transition-all duration-700"
      style={{
        flexDirection: isLeft ? "row" : "row-reverse",
        textAlign: isLeft ? "left" : "right",
        opacity: visible ? 1 : 0.3,
        transform: visible ? "scale(1)" : "scale(0.95)",
        paddingLeft: isLeft ? "0" : "52px",
        paddingRight: isLeft ? "52px" : "0",
      }}
    >
      {/* Horizontal connector to spine */}
      <div
        className="absolute top-5"
        style={{
          left: isLeft ? "auto" : "50%",
          right: isLeft ? "50%" : "auto",
          width: "24px",
          height: "0.5px",
          background: visible
            ? "linear-gradient(to right, rgba(82,90,166,0.6), rgba(82,90,166,0.1))"
            : "rgba(255,255,255,0.08)",
          transition: "background 0.6s",
        }}
      />

      <div className="flex-1">
        {/* Icon */}
        <div
          className="mb-3 transition-all duration-500"
          style={{
            filter: visible ? "drop-shadow(0 0 6px rgba(82,90,166,0.5))" : "none",
            display: "inline-block",
          }}
        >
          <NodeIcon type={node.icon} className="w-7 h-7 text-white/70" />
        </div>

        <span
          className="block text-[9px] mb-1 tracking-[0.15em]"
          style={{
            fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          {node.fig}
        </span>

        <span
          className="block text-[9px] font-bold tracking-[0.2em] mb-2"
          style={{
            fontFamily: "'Europa', 'Inter', sans-serif",
            color: "#525aa6",
          }}
        >
          {node.tag}
        </span>

        <h3
          className="text-base font-medium mb-2"
          style={{
            fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-0.02em",
            color: visible ? "#fff" : "rgba(255,255,255,0.6)",
            whiteSpace: "pre-line",
            transition: "color 0.5s",
          }}
        >
          {node.title}
        </h3>

        <p
          className="text-[13px] leading-[1.7]"
          style={{
            fontFamily: "'Europa', 'Inter', sans-serif",
            color: visible ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.3)",
            transition: "color 0.5s",
          }}
        >
          {node.desc}
        </p>
      </div>
    </div>
  );
};

/* ── Main section ── */
const ActiveEcosystemSection = () => {
  return (
    <section
      id="ecosystem-section"
      className="relative w-full overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #1e204a 0%, #0b0c1f 70%)",
      }}
    >
      {/* ── Headline ── */}
      <div className="relative z-10 px-6 pt-16 md:px-12 md:pt-24 lg:px-20 lg:pt-32">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[26px] md:text-[34px] lg:text-[42px] font-medium leading-[1.15] max-w-[1100px] mb-6 md:mb-10"
            style={{
              fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="text-white">The Active Ecosystem</span>
            <span style={{ color: "#94A3B8" }}>
              {" "}— Uniti aligns the incentives of the digital value chain, converting the challenge of the &lsquo;Activation Gap&rsquo; into a measurable commercial opportunity.
            </span>
          </h2>
        </div>
      </div>

      {/* ── Desktop: Radial Hub ── */}
      <div className="hidden md:block relative z-10 px-6 md:px-12 lg:px-20 pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto relative" style={{ minHeight: "700px" }}>
          <ConstellationCanvas />

          {/* Center Hub */}
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "30%",
              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
          >
            <UnitiHub size={100} />
          </div>

          {/* Connection lines from hub to nodes */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 2 }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(82,90,166,0.3)" />
                <stop offset="50%" stopColor="rgba(82,90,166,0.08)" />
                <stop offset="100%" stopColor="rgba(82,90,166,0.3)" />
              </linearGradient>
            </defs>
            {/* Stylized connection lines */}
            {[
              { x1: "50%", y1: "30%", x2: "12%", y2: "22%" },
              { x1: "50%", y1: "30%", x2: "80%", y2: "16%" },
              { x1: "50%", y1: "30%", x2: "42%", y2: "62%" },
              { x1: "50%", y1: "30%", x2: "76%", y2: "66%" },
              { x1: "50%", y1: "30%", x2: "14%", y2: "74%" },
            ].map((line, i) => (
              <line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="url(#line-grad)"
                strokeWidth="0.5"
              />
            ))}
          </svg>

          {/* Nodes */}
          {nodes.map((node, i) => (
            <DesktopNode key={node.fig} node={node} position={desktopPositions[i]} index={i} />
          ))}
        </div>
      </div>

      {/* ── Mobile: Vertical Timeline ── */}
      <div className="md:hidden relative z-10 px-6 pb-16">
        {/* Center U hub */}
        <div className="flex justify-center mb-12">
          <UnitiHub size={80} />
        </div>

        {/* Vertical spine */}
        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none"
            style={{
              width: "0.5px",
              background:
                "linear-gradient(to bottom, rgba(82,90,166,0.4) 0%, rgba(82,90,166,0.15) 50%, rgba(82,90,166,0.4) 100%)",
            }}
          />

          <div className="flex flex-col gap-16">
            {nodes.map((node, i) => (
              <MobileNode key={node.fig} node={node} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveEcosystemSection;
