import { Radio, ShieldCheck, Code2, HeartHandshake, Landmark } from "lucide-react";

const clients = [
  {
    icon: Radio,
    fig: "FIG 01",
    tag: "Verified Utility",
    title: "Mobile Network Operators",
    desc: "We convert passive subscribers into high-intent users by making the device essential to their daily life. By building sustainable digital habits through the Uniti Beat, we drive long-term ARPU growth and solve the \"Silent SIM\" challenge in critical segments.",
    span: true,
  },
  {
    icon: ShieldCheck,
    fig: "FIG 02",
    tag: "Portfolio De-risking",
    title: "Device Financers",
    desc: "Repayment consistency is directly tied to device essentiality. Uniti ensures the device is deeply integrated into the user's life, significantly lowering NPL risks.",
  },
  {
    icon: Code2,
    fig: "FIG 03",
    tag: "The Induction Layer",
    title: "App Developers",
    desc: "Uniti provides a direct, scalable Induction Layer that meets users where they are, achieving 6–8x the industry-standard engagement rate.",
  },
  {
    icon: HeartHandshake,
    fig: "FIG 04",
    tag: "Impact at Scale",
    title: "NGOs / Not-for-Profits",
    desc: "Reach underserved populations with digital services that drive measurable social outcomes beyond initial rollout.",
  },
  {
    icon: Landmark,
    fig: "FIG 05",
    tag: "Digital Inclusion Infrastructure",
    title: "Governments",
    desc: "Enable national digital transformation agendas by activating citizens as productive digital participants.",
  },
];

const ClientsSection = () => (
  <section
    className="section-padding"
    style={{ background: "#FCFCFD" }}
  >
    <div className="container-wide">
      {/* Header */}
      <div className="text-center mb-20">
        <span
          className="block text-[11px] tracking-[0.25em] uppercase mb-4"
          style={{
            fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
            color: "hsl(var(--muted-foreground))",
          }}
        >
          ECOSYSTEM
        </span>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-5"
          style={{
            fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-0.03em",
            color: "hsl(var(--heading))",
          }}
        >
          The Active Ecosystem
        </h2>
        <p
          className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}
        >
          Uniti aligns the incentives of the digital value chain, converting the
          challenge of the "Activation Gap" into a measurable commercial
          opportunity.
        </p>
      </div>

      {/* Technical Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-4"
        style={{
          border: "0.5px solid rgba(34, 35, 91, 0.10)",
          borderRadius: "2px",
        }}
      >
        {clients.map((c, i) => (
          <EcoModule key={c.title} {...c} index={i} />
        ))}
      </div>
    </div>
  </section>
);

interface EcoModuleProps {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  fig: string;
  tag: string;
  title: string;
  desc: string;
  span?: boolean;
  index: number;
}

const EcoModule = ({ icon: Icon, fig, tag, title, desc, span, index }: EcoModuleProps) => (
  <div
    className={`group relative p-8 md:p-10 transition-all duration-300 ${
      span ? "md:col-span-2" : "md:col-span-1"
    }`}
    style={{
      borderRight: "0.5px solid rgba(34, 35, 91, 0.10)",
      borderBottom: index < 1 || index >= 1 ? "0.5px solid rgba(34, 35, 91, 0.10)" : "none",
      background: "transparent",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "linear-gradient(180deg, rgba(82,90,166,0.03) 0%, rgba(82,90,166,0.00) 100%)";
      // Glow all borders
      e.currentTarget.style.boxShadow = "inset 0 0 0 0.5px rgba(82, 90, 166, 0.35)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    {/* Fig number */}
    <span
      className="block text-[10px] mb-6"
      style={{
        fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
        color: "hsl(var(--muted-foreground))",
        opacity: 0.6,
      }}
    >
      {fig}
    </span>

    {/* Icon + vertical line + tag */}
    <div className="flex items-stretch gap-3 mb-5">
      <div className="flex flex-col items-center">
        <Icon
          className="w-4 h-4 shrink-0"
          style={{ color: "hsl(var(--heading))" }}
        />
        <div
          className="w-px flex-1 mt-2 transition-colors duration-300 group-hover:bg-accent"
          style={{ backgroundColor: "rgba(34, 35, 91, 0.12)" }}
        />
      </div>
      <div className="flex flex-col justify-start">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.2em] block"
          style={{
            fontFamily: "'Europa', 'Inter', sans-serif",
            color: "hsl(var(--accent))",
          }}
        >
          {tag}
        </span>
      </div>
    </div>

    {/* Headline */}
    <h3
      className="text-base md:text-lg font-bold mb-3"
      style={{
        fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
        letterSpacing: "-0.03em",
        color: "hsl(var(--heading))",
      }}
    >
      {title}
    </h3>

    {/* Body */}
    <p
      className="text-sm leading-[1.8] text-muted-foreground"
      style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}
    >
      {desc}
    </p>
  </div>
);

export default ClientsSection;
