import { useEffect, useRef, useState, useCallback } from "react";
import unitiU from "@/assets/uniti-u-white.svg";

/* ── Node data ── */
const nodes = [
  {
    tag: "VERIFIED UTILITY",
    title: "Mobile Network\nOperators",
    desc: "We convert passive subscribers into high-intent users by building sustainable positive digital habits, making the device essential to daily life and driving long-term ARPU growth.",
    icon: "tower",
  },
  {
    tag: "PORTFOLIO DE-RISKING",
    title: "Device Financers",
    desc: "Repayment consistency is directly tied to device essentiality. We ensure the device is deeply integrated into the user's life, significantly lowering NPL risks.",
    icon: "phone",
  },
  {
    tag: "THE INDUCTION LAYER",
    title: "App Developers",
    desc: "We provide a direct, scalable Induction Layer that meets users where they are, achieving 6–8x the industry-standard engagement rate.",
    icon: "code",
  },
  {
    tag: "IMPACT AT SCALE",
    title: "NGOs / Not-for-Profits",
    desc: "We reach underserved populations with digital services that drive measurable social outcomes beyond initial rollout.",
    icon: "globe",
  },
  {
    tag: "DIGITAL INCLUSION INFRASTRUCTURE",
    title: "Governments",
    desc: "We support national digital transformation agendas by activating citizens as productive digital participants.",
    icon: "building",
  },
];

/* ── Custom SVG icons ── */
const NodeIcon = ({ type, className = "" }: { type: string; className?: string }) => {
  const props = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
  };
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

/* ── Constellation particle canvas ── */
const ConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<
    { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[]
  >([]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    ctx.clearRect(0, 0, w, h);

    const particles = particlesRef.current;
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      p.alpha = 0.12 + Math.sin(Date.now() * 0.0008 + p.x * 0.01) * 0.08;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(82, 90, 166, ${p.alpha})`;
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(82, 90, 166, ${0.04 * (1 - dist / 120)})`;
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
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    };

    resize();

    const rect = canvas.parentElement?.getBoundingClientRect();
    const w = rect?.width ?? 800;
    const h = rect?.height ?? 600;
    particlesRef.current = Array.from({ length: 35 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.15 + 0.05,
      size: Math.random() * 1.2 + 0.4,
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

/* ═══════════════════════════════════════
   DESKTOP — 360° Circular Hub (fixed coords)
   ═══════════════════════════════════════ */

// Container is 1200×820. Center = 600, 410.
const W = 1200;
const H = 700;
const CX = W / 2;
const CY = H / 2 + 60; // push center down for more headline gap
const RADIUS = 199; // 234 * 0.85 = 199 (15% closer)

// Pentagonal: 90° (top), 162°, 234°, 306°, 18°
const ANGLES_DEG = [90, 162, 234, 306, 18];

const NODE_POSITIONS = ANGLES_DEG.map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + RADIUS * Math.cos(rad), y: CY - RADIUS * Math.sin(rad) };
});

// Left-side (deg 90-270) = right-aligned text, right-side = left-aligned
const getNodeAlign = (deg: number): "center" | "right" | "left" => {
  if (deg === 90) return "center";
  if (deg > 90 && deg < 270) return "right";
  return "left";
};

const getTranslate = (align: "center" | "right" | "left") => {
  if (align === "center") return "translate(-50%, -110%)";
  if (align === "right") return "translate(-100%, -50%)";
  return "translate(0%, -50%)";
};

const getOffset = (align: "center" | "right" | "left") => {
  if (align === "center") return { marginLeft: 0, marginRight: 0, marginTop: -12 };
  if (align === "right") return { marginLeft: 0, marginRight: 24, marginTop: 0 };
  return { marginLeft: 24, marginRight: 0, marginTop: 0 };
};

// Icon alignment helper: right-aligned nodes get icon on the right, left-aligned on the left
const getIconJustify = (align: "center" | "right" | "left") => {
  if (align === "center") return "justify-center";
  if (align === "right") return "justify-end";
  return "justify-start";
};

const DesktopHub = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="hidden lg:flex justify-center relative z-10 pb-20 lg:pb-28" style={{ marginTop: 120 }}>
      <div className="relative" style={{ width: W, height: H }}>
        <ConstellationCanvas />

        {/* SVG layer — hairlines + particles */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={W}
          height={H}
          viewBox={`0 0 ${W} ${H}`}
          style={{ zIndex: 2 }}
        >
          <defs>
            {NODE_POSITIONS.map((_, i) => (
              <radialGradient key={`pg-${i}`} id={`particle-glow-${i}`}>
                <stop offset="0%" stopColor="#525aa6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#525aa6" stopOpacity="0" />
              </radialGradient>
            ))}
          </defs>

          {NODE_POSITIONS.map((pos, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <g key={i}>
                <line
                  x1={CX}
                  y1={CY}
                  x2={pos.x}
                  y2={pos.y}
                  stroke={isHovered ? "#525aa6" : "rgba(82,90,166,0.18)"}
                  strokeWidth="0.5"
                  style={{ transition: "stroke 0.4s" }}
                />
                <circle r="2.5" fill={`url(#particle-glow-${i})`}>
                  <animateMotion
                    dur={`${3 + i * 0.7}s`}
                    repeatCount="indefinite"
                    path={`M${CX},${CY} L${pos.x},${pos.y}`}
                  />
                </circle>
                <circle r="1.5" fill="rgba(82,90,166,0.5)">
                  <animateMotion
                    dur={`${4.5 + i * 0.5}s`}
                    repeatCount="indefinite"
                    begin={`${1.5 + i * 0.3}s`}
                    path={`M${CX},${CY} L${pos.x},${pos.y}`}
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Central U — dead center */}
        <div
          className="absolute"
          style={{
            left: CX,
            top: CY,
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
        >
          <div
            className="absolute rounded-full animate-beat-pulse"
            style={{
              width: 280,
              height: 280,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(82,90,166,0.3) 0%, rgba(82,90,166,0.08) 45%, transparent 70%)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 180,
              height: 180,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(82,90,166,0.2) 0%, transparent 60%)",
            }}
          />
          <img
            src={unitiU}
            alt="Uniti"
            className="relative w-[72px] h-[72px] select-none"
            style={{
              filter: "drop-shadow(0 0 24px rgba(82,90,166,0.45))",
            }}
          />
        </div>

        {/* Nodes */}
        {nodes.map((node, i) => {
          const pos = NODE_POSITIONS[i];
          const isHovered = hoveredIdx === i;
          const align = getNodeAlign(ANGLES_DEG[i]);
          const offset = getOffset(align);

          return (
            <div
              key={node.tag}
              className="absolute transition-transform duration-500 ease-out"
              style={{
                left: pos.x,
                top: pos.y,
                transform: `${getTranslate(align)} scale(${isHovered ? 1.2 : 1})`,
                maxWidth: 280,
                zIndex: isHovered ? 10 : 3,
                textAlign: align === "center" ? "center" : align === "right" ? "right" : "left",
                transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
                ...offset,
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div
                className={`flex mb-2 transition-all duration-400 ${getIconJustify(align)}`}
                style={{
                  filter: isHovered
                    ? "drop-shadow(0 0 10px rgba(82,90,166,0.7))"
                    : "none",
                }}
              >
                <NodeIcon type={node.icon} className="w-7 h-7 text-white/60" />
              </div>

              <span
                className="block text-[9px] font-bold tracking-[0.18em] mb-1.5"
                style={{
                  fontFamily: "'Europa', 'Inter', sans-serif",
                  color: "#525aa6",
                }}
              >
                {node.tag}
              </span>

              <h3
                className="text-[15px] font-medium mb-1.5 leading-tight"
                style={{
                  fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "-0.02em",
                  color: isHovered ? "#525aa6" : "rgba(255,255,255,0.85)",
                  whiteSpace: "pre-line",
                  transition: "color 0.35s",
                }}
              >
                {node.title}
              </h3>

              <p
                className="text-[13.2px] leading-[1.65]"
                style={{
                  fontFamily: "'Europa', 'Inter', sans-serif",
                  color: isHovered
                    ? "#FFFFFF"
                    : "rgba(255,255,255,0.38)",
                  transition: "color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              >
                {node.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   MOBILE — Vertical Timeline
   ═══════════════════════════════════════ */

const MobileNode = ({
  node,
  index,
}: {
  node: (typeof nodes)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative transition-all duration-700 ease-out"
      style={{
        display: "flex",
        flexDirection: isLeft ? "row" : "row-reverse",
        alignItems: "flex-start",
        opacity: active ? 1 : 0.25,
        transform: active ? "scale(1.1)" : "scale(0.95)",
        transformOrigin: isLeft ? "left center" : "right center",
      }}
    >
      {/* Content side */}
      <div
        className="flex-1"
        style={{
          textAlign: isLeft ? "right" : "left",
          paddingRight: isLeft ? 28 : 0,
          paddingLeft: isLeft ? 0 : 28,
        }}
      >
        <div
          className="inline-block mb-2"
          style={{
            filter: active
              ? "drop-shadow(0 0 6px rgba(82,90,166,0.6))"
              : "none",
            transition: "filter 0.5s",
          }}
        >
          <NodeIcon type={node.icon} className="w-7 h-7 text-white/60" />
        </div>


        <span
          className="block text-[9px] font-bold tracking-[0.18em] mb-1.5"
          style={{
            fontFamily: "'Europa', 'Inter', sans-serif",
            color: "#525aa6",
          }}
        >
          {node.tag}
        </span>

        <h3
          className="text-[15px] font-medium mb-1.5 leading-tight"
          style={{
            fontFamily:
              "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-0.02em",
            color: active ? "#fff" : "rgba(255,255,255,0.5)",
            whiteSpace: "pre-line",
            transition: "color 0.5s",
          }}
        >
          {node.title}
        </h3>

        <p
          className="text-[13.2px] leading-[1.65]"
          style={{
            fontFamily: "'Europa', 'Inter', sans-serif",
            color: active
              ? "#FFFFFF"
              : "rgba(255,255,255,0.25)",
            transition: "color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          {node.desc}
        </p>
      </div>

      {/* Horizontal connector dot on the spine */}
      <div
        className="relative flex-shrink-0"
        style={{ width: 1 }}
      >
        {/* Connector line */}
        <div
          className="absolute top-3"
          style={{
            width: 24,
            height: "0.5px",
            left: isLeft ? 0 : -24,
            background: active
              ? "#525aa6"
              : "rgba(82,90,166,0.12)",
            transition: "background 0.5s",
            boxShadow: active
              ? "0 0 8px rgba(82,90,166,0.4)"
              : "none",
          }}
        />
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════ */

const ActiveEcosystemSection = () => (
  <section
    id="ecosystem-section"
    className="relative w-full overflow-hidden"
    style={{
      background:
        "radial-gradient(ellipse at center, #1e204a 0%, #0b0c1f 70%)",
    }}
  >
    {/* ── Headline ── */}
    <div className="relative z-10 px-6 pt-12 md:px-12 md:pt-20 lg:px-20 lg:pt-24">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-[26px] md:text-[34px] lg:text-[42px] font-medium leading-[1.15] mb-6 md:mb-10"
          style={{
            fontFamily:
              "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-0.025em",
            maxWidth: 1200,
          }}
        >
          <span className="text-white">The Active Ecosystem</span>
          <span style={{ color: "#94A3B8" }}>
            {" "}
            — Uniti aligns the incentives of the digital value chain,
            converting the challenge of the &lsquo;Activation Gap&rsquo; into
            a measurable commercial opportunity.
          </span>
        </h2>
      </div>
    </div>

    {/* ── Desktop: Radial Hub (≥1024px) ── */}
    <DesktopHub />

    {/* ── Mobile / Tablet: Vertical Timeline (<1024px) ── */}
    <div className="lg:hidden relative z-10 px-6 pb-20">
      {/* Central U with halo */}
      <div className="flex justify-center mb-14 relative">
        <div
          className="absolute rounded-full animate-beat-pulse"
          style={{
            width: 200,
            height: 200,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(82,90,166,0.3) 0%, rgba(82,90,166,0.08) 45%, transparent 70%)",
          }}
        />
        <img
          src={unitiU}
          alt="Uniti"
          className="relative w-[56px] h-[56px] select-none"
          style={{
            filter: "drop-shadow(0 0 20px rgba(82,90,166,0.45))",
          }}
        />
      </div>

      {/* Spine + nodes */}
      <div className="relative max-w-sm mx-auto">
        {/* Vertical spine */}
        <div
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none"
          style={{
            width: "0.5px",
            background:
              "linear-gradient(to bottom, rgba(82,90,166,0.4) 0%, rgba(82,90,166,0.12) 50%, rgba(82,90,166,0.4) 100%)",
          }}
        />

        <div className="flex flex-col gap-20">
          {nodes.map((node, i) => (
            <MobileNode key={node.tag} node={node} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ActiveEcosystemSection;
