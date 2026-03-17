const partnerLogos = [
  "/lovable-uploads/919fd4a7-a972-4582-89b6-f902ebfcb424.png",
  "/lovable-uploads/5a5739ca-f8e1-4a87-8f83-a682fdb01db5.png",
  "/lovable-uploads/60a27205-1102-411c-8e6e-a5a2c755b727.png",
];

const weGrowPhotos = [
  "/lovable-uploads/2e392a58-d64a-4bf3-a0f3-c1dc276a55d5.png",
  "/lovable-uploads/6ff3e2cd-7d41-435f-89fa-4ea124582d2f.png",
  "/lovable-uploads/f28b5cd3-e547-4bcc-99f8-d40a59675c5d.png",
  "/lovable-uploads/6e7c6ded-8826-4971-bacf-a58e2e198c4f.png",
  "/lovable-uploads/5ef9e408-9b5e-44d8-b036-546d90882035.jpg",
];

const methodologyNodes = [
  {
    title: "Scalable Framework",
    desc: "Designed to activate users across high-utility sectors — from financial services to healthcare.",
  },
  {
    title: "Systemic Impact",
    desc: "Turning connectivity into a measurable economic tool for rural and peri-urban populations at a national scale.",
  },
  {
    title: "Overcoming the Skills Gap",
    desc: "Solving the barriers of perceived exclusion and technical friction that cause users to abandon digital services.",
  },
  {
    title: "Extrinsic to Intrinsic",
    desc: "Moving users from extrinsic rewards to personal relevance as the ultimate driver of retention.",
  },
];

const ActivitiesSection = () => (
  <section
    className="relative w-full overflow-hidden py-20 md:py-28 lg:py-36"
    style={{
      background: "radial-gradient(ellipse at center, #1e204a 0%, #0b0c1f 70%)",
    }}
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      {/* ── Headline ── */}
      <h2
        className="text-[26px] md:text-[34px] lg:text-[42px] font-medium leading-[1.15] mb-16 md:mb-20"
        style={{
          fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
          letterSpacing: "-0.025em",
          maxWidth: 1100,
        }}
      >
        <span style={{ color: "#525aa6" }}>The Path to Scale</span>
        <span style={{ color: "#94A3B8" }}>
          {" "}— We are bridging the gap between basic connectivity and full digital participation through a series of targeted roll-outs.
        </span>
      </h2>

      {/* ── Methodology Strip ── */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-20 md:mb-28">
        {methodologyNodes.map((node, i) => (
          <div
            key={node.title}
            className="py-6 md:py-0 md:px-6 lg:px-8"
            style={{
              borderLeft: i > 0 ? undefined : "none",
              borderTop: i > 0 ? "0.5px solid rgba(82,90,166,0.2)" : "none",
            }}
          >
            {/* Desktop: vertical hairline separator */}
            <div
              className="hidden md:block"
              style={{
                borderLeft: i > 0 ? "0.5px solid rgba(82,90,166,0.25)" : "none",
                paddingLeft: i > 0 ? undefined : 0,
                height: "100%",
                ...(i > 0 ? { marginLeft: -1, paddingLeft: 24 } : {}),
              }}
            >
              <h4
                className="text-[13px] font-medium mb-2 leading-tight"
                style={{
                  fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "-0.01em",
                }}
              >
                {node.title}
              </h4>
              <p
                className="text-[12px] leading-[1.7]"
                style={{
                  fontFamily: "'Europa', 'Inter', sans-serif",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {node.desc}
              </p>
            </div>
            {/* Mobile: stacked */}
            <div className="md:hidden">
              <h4
                className="text-[13px] font-medium mb-2 leading-tight"
                style={{
                  fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "-0.01em",
                }}
              >
                {node.title}
              </h4>
              <p
                className="text-[12px] leading-[1.7]"
                style={{
                  fontFamily: "'Europa', 'Inter', sans-serif",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {node.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── 50/50 Proof Cards ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Card A — National Deployment */}
        <div
          className="group rounded-lg p-8 lg:p-10 transition-shadow duration-500"
          style={{
            border: "0.5px solid rgba(82,90,166,0.2)",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "0 0 30px rgba(82,90,166,0.15), inset 0 0 30px rgba(82,90,166,0.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          }}
        >
          <h3
            className="text-[18px] md:text-[20px] font-medium mb-4 leading-tight"
            style={{
              fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "-0.02em",
            }}
          >
            National Deployment: MTN Ghana & Esoko
          </h3>
          <p
            className="text-[13px] leading-[1.75] mb-8"
            style={{
              fontFamily: "'Europa', 'Inter', sans-serif",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Uniti is working with MTN Ghana and Esoko on a phased deployment that establishes the behavioral infrastructure required to activate one million users from MTN's subscriber base.
          </p>
          <div className="flex items-center gap-6 mt-auto">
            {partnerLogos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Partner logo ${i + 1}`}
                className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale brightness-200"
              />
            ))}
          </div>
        </div>

        {/* Card B — WeGrow Project */}
        <div
          className="group rounded-lg p-8 lg:p-10 transition-shadow duration-500"
          style={{
            border: "0.5px solid rgba(82,90,166,0.2)",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "0 0 30px rgba(82,90,166,0.15), inset 0 0 30px rgba(82,90,166,0.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          }}
        >
          <h3
            className="text-[18px] md:text-[20px] font-medium mb-4 leading-tight"
            style={{
              fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "-0.02em",
            }}
          >
            The WeGrow Project
          </h3>
          <p
            className="text-[13px] leading-[1.75] mb-6"
            style={{
              fontFamily: "'Europa', 'Inter', sans-serif",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Our infrastructure is built on validated behavioral data. In our foundational deployment with CARE International and DANIDA, we successfully moved users from silent device ownership to active digital participation.
          </p>
          {/* Bento collage */}
          <div className="grid grid-cols-2 gap-1.5">
            <img
              src={weGrowPhotos[0]}
              alt="Field activation 1"
              className="rounded object-cover w-full aspect-[4/3]"
            />
            <img
              src={weGrowPhotos[1]}
              alt="Field activation 2"
              className="rounded object-cover w-full aspect-[4/3]"
            />
            <img
              src={weGrowPhotos[2]}
              alt="Field activation 3"
              className="rounded object-cover w-full col-span-2 aspect-[21/9]"
            />
            <img
              src={weGrowPhotos[3]}
              alt="Field activation 4"
              className="rounded object-cover w-full aspect-[4/3]"
            />
            <img
              src={weGrowPhotos[4]}
              alt="Field activation 5"
              className="rounded object-cover w-full aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
