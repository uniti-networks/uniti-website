import { Box, Settings, Puzzle, UserCheck } from "lucide-react";

/* ── Data ── */

const partnerLogos = [
  "/lovable-uploads/919fd4a7-a972-4582-89b6-f902ebfcb424.png",
  "/lovable-uploads/5a5739ca-f8e1-4a87-8f83-a682fdb01db5.png",
  "/lovable-uploads/60a27205-1102-411c-8e6e-a5a2c755b727.png",
];

const weGrowPhotos = [
  "/lovable-uploads/2e392a58-d64a-4bf3-a0f3-c1dc276a55d5.png",
  "/lovable-uploads/6ff3e2cd-7d41-435f-89fa-4ea124582d2f.png",
  "/lovable-uploads/6e7c6ded-8826-4971-bacf-a58e2e198c4f.png",
  "/lovable-uploads/5ef9e408-9b5e-44d8-b036-546d90882035.jpg",
];

const methodology = [
  {
    Icon: Box,
    title: "Scalable Framework",
    desc: "Designed to activate users across high-utility sectors — from financial services to healthcare.",
  },
  {
    Icon: Settings,
    title: "Systemic Impact",
    desc: "Turning connectivity into a measurable economic tool for rural and peri-urban populations at a national scale.",
  },
  {
    Icon: Puzzle,
    title: "Overcoming the Skills Gap",
    desc: "Solving the barriers of perceived exclusion and technical friction that cause users to abandon digital services.",
  },
  {
    Icon: UserCheck,
    title: "Extrinsic to Intrinsic",
    desc: "Moving users from extrinsic rewards to personal relevance as the ultimate driver of retention.",
  },
];

/* ── Shared styles ── */
const FONT_TITLE = "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Europa', 'Inter', sans-serif";
const HAIRLINE = "0.5px solid rgba(82,90,166,0.2)";
const GLASS_BG = "rgba(255,255,255,0.03)";
const MUTED_INDIGO = "#7e8fbf";

const ActivitiesSection = () => (
  <section
    className="relative w-full overflow-hidden py-24 md:py-32 lg:py-40"
    style={{ background: "#0b0c1f" }}
  >
    {/* Subtle center glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, rgba(30,32,74,0.6) 0%, transparent 60%)",
      }}
    />
    {/* Blush light-leak left */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: 400,
        height: 600,
        left: "20%",
        top: "30%",
        background:
          "radial-gradient(ellipse, rgba(82,90,166,0.06) 0%, transparent 70%)",
        transform: "rotate(-15deg)",
      }}
    />
    {/* Blush light-leak right */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: 400,
        height: 600,
        right: "15%",
        top: "40%",
        background:
          "radial-gradient(ellipse, rgba(82,90,166,0.05) 0%, transparent 70%)",
        transform: "rotate(10deg)",
      }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      {/* ── Headline ── */}
      <h2
        className="text-[26px] md:text-[34px] lg:text-[42px] font-medium leading-[1.15] mb-20 md:mb-28"
        style={{
          fontFamily: FONT_TITLE,
          letterSpacing: "-0.025em",
          maxWidth: 1100,
        }}
      >
        <span className="text-white">The Path to Scale</span>
        <span style={{ color: "#525aa6", opacity: 0.7 }}>
          {" "}— We are bridging the gap between basic connectivity and full
          digital participation through a series of targeted roll-outs.
        </span>
      </h2>

      {/* ── Methodology Strip ── */}
      <div className="grid grid-cols-1 md:grid-cols-4 mb-20 md:mb-28">
        {methodology.map((node, i) => (
          <div
            key={node.title}
            className="py-6 md:py-0"
            style={{
              borderTop: i > 0 ? HAIRLINE : "none",
            }}
          >
            <div
              className="md:h-full"
              style={{
                borderLeft: i > 0 ? HAIRLINE : "none",
                paddingLeft: i > 0 ? 28 : 0,
                paddingRight: 12,
              }}
            >
              {/* Mobile: remove left border, use top border */}
              <style>{`
                @media (max-width: 767px) {
                  .method-col { border-left: none !important; padding-left: 0 !important; }
                }
              `}</style>
              <div className="method-col" style={{ borderLeft: i > 0 ? HAIRLINE : "none", paddingLeft: i > 0 ? 28 : 0 }}>
                <node.Icon
                  className="mb-4"
                  size={24}
                  strokeWidth={1}
                  color="#ffffff"
                />
                <h4
                  className="text-[13px] font-medium mb-2.5 leading-tight"
                  style={{
                    fontFamily: FONT_TITLE,
                    color: MUTED_INDIGO,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {node.title}
                </h4>
                <p
                  className="text-[12px] leading-[1.75]"
                  style={{
                    fontFamily: FONT_TITLE,
                    fontWeight: 300,
                    color: "#ffffff",
                  }}
                >
                  {node.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Proof Cards ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Card A — National Deployment */}
        <div
          className="rounded-lg p-8 lg:p-10 transition-all duration-500 flex flex-col"
          style={{
            border: HAIRLINE,
            background: GLASS_BG,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 40px rgba(82,90,166,0.12), inset 0 0 40px rgba(82,90,166,0.04)";
            e.currentTarget.style.borderColor = "rgba(82,90,166,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.borderColor = "rgba(82,90,166,0.2)";
          }}
        >
          <h3
            className="text-[18px] md:text-[20px] font-medium mb-4 leading-tight"
            style={{
              fontFamily: FONT_TITLE,
              color: MUTED_INDIGO,
              letterSpacing: "-0.02em",
            }}
          >
            National Deployment: MTN Ghana &amp; Esoko
          </h3>
          <p
            className="text-[13px] leading-[1.8] mb-8 flex-1"
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 300,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Uniti is working with MTN Ghana and Esoko on a phased deployment
            that establishes the behavioral infrastructure required to activate
            one million users from MTN's subscriber base.
          </p>
          <div className="flex items-center gap-8">
            {partnerLogos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Partner logo ${i + 1}`}
                className="h-9 w-auto object-contain"
                style={{
                  filter: "brightness(0) invert(1)",
                  opacity: 0.8,
                }}
              />
            ))}
          </div>
        </div>

        {/* Card B — WeGrow Project */}
        <div
          className="rounded-lg p-8 lg:p-10 transition-all duration-500 flex flex-col"
          style={{
            border: HAIRLINE,
            background: GLASS_BG,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 40px rgba(82,90,166,0.12), inset 0 0 40px rgba(82,90,166,0.04)";
            e.currentTarget.style.borderColor = "rgba(82,90,166,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.borderColor = "rgba(82,90,166,0.2)";
          }}
        >
          <h3
            className="text-[18px] md:text-[20px] font-medium mb-4 leading-tight"
            style={{
              fontFamily: FONT_TITLE,
              color: MUTED_INDIGO,
              letterSpacing: "-0.02em",
            }}
          >
            The WeGrow Project
          </h3>
          <p
            className="text-[13px] leading-[1.8] mb-8 flex-1"
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 300,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Our infrastructure is built on validated behavioral data. In our
            foundational deployment with CARE International and DANIDA, we
            successfully moved users from silent device ownership to active
            digital participation.
          </p>
          {/* 1×4 horizontal photo grid */}
          <div className="grid grid-cols-4 gap-1.5">
            {weGrowPhotos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`WeGrow field photo ${i + 1}`}
                className="w-full object-cover"
                style={{
                  aspectRatio: "1 / 1",
                  borderRadius: 4,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
