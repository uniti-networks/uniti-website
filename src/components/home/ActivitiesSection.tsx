import { Box, Settings, Puzzle, UserCheck } from "lucide-react";
import logoMtn from "@/assets/logo-mtn-white.png";
import logoEsoko from "@/assets/logo-esoko.png";
import logoUniti from "@/assets/logo-uniti-white.png";

/* ── Data ── */

const weGrowPhotos = [
  "/lovable-uploads/2e392a58-d64a-4bf3-a0f3-c1dc276a55d5.png",
  "/lovable-uploads/6ff3e2cd-7d41-435f-89fa-4ea124582d2f.png",
  "/lovable-uploads/5ef9e408-9b5e-44d8-b036-546d90882035.jpg",
];

const methodology = [
  {
    Icon: Box,
    label: "FRAMEWORK",
    title: "Scalable Framework",
    desc: "Designed to activate users across high-utility sectors — from financial services to healthcare.",
  },
  {
    Icon: Settings,
    label: "IMPACT",
    title: "Systemic Impact",
    desc: "Turning connectivity into a measurable economic tool for rural and peri-urban populations at a national scale.",
  },
  {
    Icon: Puzzle,
    label: "ADOPTION",
    title: "Overcoming the Skills Gap",
    desc: "Solving the barriers of perceived exclusion and technical friction that cause users to abandon digital services.",
  },
  {
    Icon: UserCheck,
    label: "RETENTION",
    title: "Extrinsic to Intrinsic",
    desc: "Moving users from extrinsic rewards to personal relevance as the ultimate driver of retention.",
  },
];

const FONT_TITLE = "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Europa', 'Inter', sans-serif";
const MUTED_INDIGO = "#7e8fbf";
const HAIRLINE_COLOR = "rgba(255,255,255,0.15)";
const CARD_BORDER = "0.5px solid rgba(255,255,255,0.15)";
const GLASS_BG = "rgba(255,255,255,0.03)";

const ActivitiesSection = () => (
  <section
    className="relative w-full overflow-hidden"
    style={{ background: "#0b0c1f", margin: 0 }}
  >
    {/* Subtle low glow — NOT a centered radial to avoid seam with section above */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 80%, rgba(30,32,74,0.35) 0%, transparent 50%)",
      }}
    />

    <div className="relative z-10 px-6 pt-16 pb-16 md:px-12 md:pt-24 md:pb-24 lg:px-20 lg:pt-32 lg:pb-32">
      <div className="max-w-7xl mx-auto">
        {/* ── Headline ── */}
        <h2
          className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[1.1] max-w-[1200px] mb-16 md:mb-24"
          style={{
            fontFamily: FONT_TITLE,
            letterSpacing: "-0.02em",
          }}
        >
          <span className="text-white">The Path to Scale</span>
          <span style={{ color: "#94A3B8" }}>
            {" "}— We are bridging the gap between basic connectivity and full
            digital participation through a series of targeted roll-outs.
          </span>
        </h2>

        {/* ── Methodology Grid (mirrors Product Architecture crosshair grid) ── */}
        <div className="relative grid grid-cols-2 lg:grid-cols-4 mb-16 md:mb-24">
          {/* Desktop vertical dividers with blush glow */}
          {[1, 2, 3].map((i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 hidden lg:block pointer-events-none"
              style={{
                left: `${i * 25}%`,
                width: "0.5px",
                background: `linear-gradient(to bottom, transparent 0%, ${HAIRLINE_COLOR} 20%, ${HAIRLINE_COLOR} 80%, transparent 100%)`,
              }}
            />
          ))}

          {/* Mobile crosshair — vertical */}
          <div
            className="absolute left-1/2 top-0 bottom-0 lg:hidden pointer-events-none"
            style={{
              width: "0.5px",
              background: `linear-gradient(to bottom, transparent 0%, ${HAIRLINE_COLOR} 20%, ${HAIRLINE_COLOR} 80%, transparent 100%)`,
            }}
          />
          {/* Mobile crosshair — horizontal */}
          <div
            className="absolute top-1/2 left-0 right-0 lg:hidden pointer-events-none"
            style={{
              height: "0.5px",
              background: `linear-gradient(to right, transparent 0%, ${HAIRLINE_COLOR} 20%, ${HAIRLINE_COLOR} 80%, transparent 100%)`,
            }}
          />

          {methodology.map((node) => (
            <div key={node.label} className="group p-6 md:p-8 lg:p-10">
              <node.Icon
                className="w-6 h-6 text-white mb-5 transition-transform duration-500 group-hover:scale-105"
                strokeWidth={1.5}
              />
              <span
                className="block text-[11px] font-bold tracking-[0.2em] mb-4"
                style={{
                  color: "#525aa6",
                  fontFamily: FONT_BODY,
                }}
              >
                {node.label}
              </span>
              <h3
                className="text-base md:text-lg font-medium mb-3"
                style={{
                  color: MUTED_INDIGO,
                  fontFamily: FONT_TITLE,
                }}
              >
                {node.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#ffffff",
                  fontFamily: FONT_TITLE,
                  fontWeight: 300,
                }}
              >
                {node.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Proof Cards (50/50) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Card A — National Deployment */}
          <div
            className="p-8 lg:p-10 flex flex-col transition-all duration-500"
            style={{
              border: CARD_BORDER,
              background: GLASS_BG,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(82,90,166,0.1), inset 0 0 30px rgba(82,90,166,0.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3
              className="text-base md:text-lg font-medium mb-3"
              style={{
                fontFamily: FONT_TITLE,
                color: MUTED_INDIGO,
              }}
            >
              National Deployment: MTN Ghana &amp; Esoko
            </h3>
            <p
              className="text-sm leading-relaxed mb-8 flex-1"
              style={{
                fontFamily: FONT_BODY,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Uniti is working with MTN Ghana and Esoko on a phased deployment
              that establishes the behavioral infrastructure required to activate
              one million users from MTN's subscriber base.
            </p>
            {/* White logos — visually balanced */}
            <div className="flex items-center gap-4 md:gap-10">
              <img
                src={logoMtn}
                alt="MTN logo"
                className="h-8 md:h-12 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
              />
              <img
                src={logoEsoko}
                alt="Esoko logo"
                className="h-3.5 md:h-5 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
              />
              <img
                src={logoUniti}
                alt="Uniti logo"
                className="h-6 md:h-8 w-auto object-contain"
                style={{ opacity: 0.85 }}
              />
            </div>
          </div>

          {/* Card B — WeGrow Project */}
          <div
            className="p-8 lg:p-10 flex flex-col transition-all duration-500"
            style={{
              border: CARD_BORDER,
              borderLeft: "none",
              background: GLASS_BG,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(82,90,166,0.1), inset 0 0 30px rgba(82,90,166,0.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3
              className="text-base md:text-lg font-medium mb-3"
              style={{
                fontFamily: FONT_TITLE,
                color: MUTED_INDIGO,
              }}
            >
              The WeGrow Project
            </h3>
            <p
              className="text-sm leading-relaxed mb-8 flex-1"
              style={{
                fontFamily: FONT_BODY,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Our infrastructure is built on validated behavioral data. In our
              foundational deployment with CARE International and DANIDA, we
              successfully moved users from silent device ownership to active
              digital participation.
            </p>
            {/* Photo grid — stacked on mobile, 3-col on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {weGrowPhotos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`WeGrow field photo ${i + 1}`}
                  className="w-full object-cover h-[140px] md:h-[160px]"
                  style={{ borderRadius: 4 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
