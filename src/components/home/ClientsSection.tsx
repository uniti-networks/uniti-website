import iconMno from "@/assets/icon-mno.png";
import iconFinance from "@/assets/icon-finance.png";
import iconAppdev from "@/assets/icon-appdev.png";
import iconNgo from "@/assets/icon-ngo.png";
import iconGovt from "@/assets/icon-govt.png";

const clients = [
  {
    icon: iconMno,
    tag: "Verified Utility",
    title: "Mobile Network Operators",
    desc: "We convert passive subscribers into high-intent users by making the device essential to their daily life. By building sustainable digital habits through the Uniti Beat, we drive long-term ARPU growth and solve the \"Silent SIM\" challenge in critical segments.",
  },
  {
    icon: iconFinance,
    tag: "Portfolio De-risking",
    title: "Device Financers",
    desc: "Repayment consistency is directly tied to device essentiality. When a smartphone becomes a critical tool for managing health, education, and financial transfers, it becomes a non-disposable asset. Uniti ensures the device is deeply integrated into the user's life, significantly lowering NPL risks.",
  },
  {
    icon: iconAppdev,
    tag: "The Induction Layer",
    title: "App Developers",
    desc: "Uniti provides a direct, scalable Induction Layer that meets users where they are. We overcome the relevance barrier and the skills gap by coaching users on the practical relevance and specific usage of your service, achieving 6–8x the industry-standard engagement rate.",
  },
  {
    icon: iconNgo,
    tag: "Impact at Scale",
    title: "NGOs / Not-for-Profits",
    desc: "Reach underserved populations with digital services that drive measurable social outcomes. Uniti's behavioral infrastructure ensures your programs achieve sustainable adoption beyond initial rollout.",
  },
  {
    icon: iconGovt,
    tag: "Digital Inclusion Infrastructure",
    title: "Governments",
    desc: "Enable national digital transformation agendas by activating citizens as productive digital participants. Uniti provides the behavioral layer that turns connectivity investments into measurable economic participation.",
  },
];

const ClientsSection = () => (
  <section className="section-padding">
    <div className="container-wide">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">The Active Ecosystem</h2>
        <p className="text-foreground text-lg max-w-3xl mx-auto">
          Uniti aligns the incentives of the digital value chain, converting the challenge of the "Activation Gap" into a measurable commercial opportunity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((c) => (
          <div key={c.title} className="bg-background rounded-xl p-8 border border-border hover:border-accent/30 transition-colors">
            <img src={c.icon} alt={c.title} className="w-12 h-12 mb-5 object-contain" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{c.tag}</span>
            <h3 className="font-heading text-lg font-bold text-heading mt-2 mb-3">{c.title}</h3>
            <p className="text-sm text-foreground leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
