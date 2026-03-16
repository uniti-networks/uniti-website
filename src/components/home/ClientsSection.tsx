import { Radio, ShieldCheck, Code2, HeartHandshake, Landmark } from "lucide-react";

const clients = [
  {
    icon: Radio,
    tag: "Verified Utility",
    title: "Mobile Network Operators",
    desc: "We convert passive subscribers into high-intent users by making the device essential to their daily life. By building sustainable digital habits through the Uniti Beat, we drive long-term ARPU growth and solve the \"Silent SIM\" challenge in critical segments.",
  },
  {
    icon: ShieldCheck,
    tag: "Portfolio De-risking",
    title: "Device Financers",
    desc: "Repayment consistency is directly tied to device essentiality. When a smartphone becomes a critical tool for managing health, education, and financial transfers, it becomes a non-disposable asset. Uniti ensures the device is deeply integrated into the user's life, significantly lowering NPL risks.",
  },
  {
    icon: Code2,
    tag: "The Induction Layer",
    title: "App Developers",
    desc: "Uniti provides a direct, scalable Induction Layer that meets users where they are. We overcome the relevance barrier and the skills gap by coaching users on the practical relevance and specific usage of your service, achieving 6–8x the industry-standard engagement rate.",
  },
  {
    icon: HeartHandshake,
    tag: "Impact at Scale",
    title: "NGOs / Not-for-Profits",
    desc: "Reach underserved populations with digital services that drive measurable social outcomes. Uniti's behavioral infrastructure ensures your programs achieve sustainable adoption beyond initial rollout.",
  },
  {
    icon: Landmark,
    tag: "Digital Inclusion Infrastructure",
    title: "Governments",
    desc: "Enable national digital transformation agendas by activating citizens as productive digital participants. Uniti provides the behavioral layer that turns connectivity investments into measurable economic participation.",
  },
];

const ClientsSection = () => (
  <section
    className="section-padding relative overflow-hidden"
    style={{
      background: "linear-gradient(180deg, #ffffff 0%, #F8FAFC 100%)",
    }}
  >
    {/* Dotted grid background */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(34,35,91,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />

    <div className="container-wide relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          style={{ fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif" }}
        >
          The Active Ecosystem
        </h2>
        <p
          className="text-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}
        >
          Uniti aligns the incentives of the digital value chain, converting the
          challenge of the "Activation Gap" into a measurable commercial
          opportunity.
        </p>
      </div>

      {/* Top row: 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {clients.slice(0, 3).map((c) => (
          <EcoCard key={c.title} {...c} />
        ))}
      </div>

      {/* Bottom row: 2 centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[calc(66.666%+0.75rem)] mx-auto">
        {clients.slice(3).map((c) => (
          <EcoCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  </section>
);

interface EcoCardProps {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  tag: string;
  title: string;
  desc: string;
}

const EcoCard = ({ icon: Icon, tag, title, desc }: EcoCardProps) => (
  <div className="group relative rounded-[12px] bg-white/70 backdrop-blur-sm p-8 md:p-10 flex flex-col transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(82,90,166,0.2)] border border-[rgba(34,35,91,0.1)] hover:border-[#525aa6]">
    {/* Icon top-right */}
    <div className="absolute top-8 right-8 md:top-10 md:right-10">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-300"
        style={{ backgroundColor: "rgba(34, 35, 91, 0.06)" }}
      >
        <Icon className="w-5 h-5 transition-colors duration-300 text-[#22235b] group-hover:text-[#525aa6]" />
      </div>
    </div>

    {/* Label */}
    <span
      className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block"
      style={{
        fontFamily: "'Europa', 'Inter', sans-serif",
        color: "#22235b",
      }}
    >
      {tag}
    </span>

    {/* Headline */}
    <h3
      className="text-lg md:text-xl font-bold mb-3 pr-14"
      style={{
        color: "#525aa6",
        fontFamily: "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
      }}
    >
      {title}
    </h3>

    {/* Body */}
    <p
      className="text-sm md:text-base leading-[1.8] text-foreground"
      style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}
    >
      {desc}
    </p>
  </div>
);

export default ClientsSection;
