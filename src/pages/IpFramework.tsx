import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NodeCanvas from "@/components/NodeCanvas";
import SectionDivider from "@/components/home/SectionDivider";
import { usePageMetadata } from "@/hooks/use-page-metadata";

/* ── Color tokens ── */
const C = {
  paris: "#22235b",
  cobalt: "#283b8d",
  gold: "#af9942",
  teal: "#3798a6",
  white: "#ffffff",
  muted: "#94A3B8",
  bgDark: "#0b0c1f",
  bgGrad: "radial-gradient(ellipse at center, #1e204a 0%, #0b0c1f 70%)",
};

const FONT_HEAD = "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Euclid Circular A', 'Europa', 'Inter', sans-serif";

const Body = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p
    className={`text-base md:text-lg leading-relaxed ${className}`}
    style={{ fontFamily: FONT_BODY, color: C.white }}
  >
    {children}
  </p>
);

const TwoToneHeading = ({ white, muted }: { white: string; muted: string }) => (
  <h2
    className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6"
    style={{ fontFamily: FONT_HEAD, letterSpacing: "-0.02em" }}
  >
    <span style={{ color: C.white }}>{white}</span>
    <span style={{ color: C.muted }}> {muted}</span>
  </h2>
);

const Tag = ({ label, color = C.cobalt }: { label: string; color?: string }) => (
  <span
    className="inline-block rounded-full px-3 py-1 text-xs font-medium text-white mr-2 mb-1"
    style={{ background: color, fontFamily: "'Europa', 'Inter', sans-serif" }}
  >
    {label}
  </span>
);

type Item = { title: string; desc: string; tags?: string[]; tagColor?: string };

const unitiCore: Item[] = [
  {
    title: "User-Controlled Data Wallet",
    desc:
      "Every user owns her longitudinal record of goals, behaviour, and service engagement. The architecture is Uniti's; the data belongs to the user. She decides what it's used for. This is also the foundation on which loyalty, credit enrichment, and retention services are built — and where partners can build directly.",
    tags: ["User-Owned", "Consent Layer", "Longitudinal Record"],
  },
  {
    title: "Behavioral Rules Engine",
    desc:
      "The lambda functions that convert raw user events into signals, and signals into milestones. This is the decision logic that determines what a user experiences and when — the mechanism that makes coaching responsive rather than generic.",
    tags: ["Events → Signals", "Signals → Milestones", "Lambda"],
  },
  {
    title: "AI Context Window & Methodology",
    desc:
      "The structure of what gets fed to the AI — how user goals, demographic data, signals, milestones, and intervention IDs are assembled, weighted, and used to generate coaching outputs. This is the Uniti engagement methodology made machine.",
    tags: ["Context Assembly", "Intervention Logic", "Engagement Methodology"],
  },
  {
    title: "Cross-Market Interaction Data",
    desc:
      "Uniti retains derived interaction data across all deployments — not raw user records, which belong to users and territories, but aggregated coaching efficacy signals: how many touchpoints it takes to drive first engagement with a given service category, which message types drive activation in fintech versus health, what behavioural patterns predict long-term retention. Raw data stays local. What Uniti learns from it doesn't.",
    tags: ["Derived Data", "Coaching Signals", "Cross-Market Learning"],
  },
  {
    title: "Goal-Setting Framework — Extensible",
    desc:
      "The structure of how user goals are defined, tracked, and evolved across the platform. The core framework is Uniti's — but it is designed to be extended. Partners can configure deployment-wide mandatory services (e.g. every Kenyan user onboards to M-Pesa) and add service categories beyond the core tier 1–4 structure. What cannot be changed is the underlying logic that connects goals to coaching.",
    tags: ["Progress2Goal", "Configurable", "Extensible"],
  },
];

const partnerLayer: Item[] = [
  {
    title: "Voice & Language Localisation",
    desc:
      "Text-to-speech voices, coaching tone and register, and language support across Kikuyu, Luo, Swahili and other local languages. Uniti may contribute to the initial build — particularly for language model selection and early audio assets — but the localisation layer is the partner's to own and evolve. Voice data of citizens belongs in local hands.",
    tags: ["Kikuyu", "Luo", "Swahili", "TTS", "Co-produced"],
    tagColor: C.teal,
  },
  {
    title: "Content Localisation",
    desc:
      "Culturally specific coaching messaging, in-app screen guides, and tutorial content. The interventions library provides the structural framework — and Uniti may contribute to the initial localisation. What is said, how it is said, and how it evolves over time is the partner's to own.",
    tags: ["Coaching Content", "Screen Guides", "1,200+ Interventions", "Co-produced"],
    tagColor: C.teal,
  },
  {
    title: "Service Suite Curation",
    desc:
      "Selection and prioritisation of apps across finance, health, education and work for the local market. Partners control which services users are activated toward — this is where revenue is optimised. Deployment-wide mandatory services (e.g. M-Pesa onboarding) are configured within the extensible goal framework.",
    tags: ["Finance", "Health", "Education", "Work"],
    tagColor: C.teal,
  },
  {
    title: "Local App Integrations & APIs",
    desc:
      "Market-specific integrations with banking, health, agriculture and education providers. These are partner IP — built for the territory, owned by the partner. Where an integration has clear multi-market applicability, cross-deployment use can be discussed separately.",
    tags: ["M-Pesa", "Safaricom APIs", "Local Banking"],
    tagColor: C.teal,
  },
  {
    title: "Rewards & Incentive Configuration",
    desc:
      "Cash and data reward amounts, triggers, and incentive structures for the local market. Partners configure the reward mechanics — the disbursement infrastructure sits in the platform layer. Custom milestone additions are possible but require careful integration with the context window to preserve coaching coherence.",
    tags: ["Cash Rewards", "Data Rewards", "Gamification"],
    tagColor: C.teal,
  },
  {
    title: "Ecosystem & Partner Relationships",
    desc:
      "MNOs, device financers, local banks, health providers. Partners own these relationships, manage commercial outcomes, and lead market development strategy for their territory.",
    tags: ["Safaricom", "M-KOPA", "MNO Relations"],
    tagColor: C.teal,
  },
];

const infrastructure: Item[] = [
  {
    title: "Mobile Money & Data Reward Rails",
    desc:
      "Cash and data reward disbursement infrastructure. Abstracted so partners configure amounts and triggers — Uniti manages the underlying payment mechanics and compliance layer across deployments.",
    tags: ["Cash Rewards", "Data Rewards", "Payment Rails"],
  },
  {
    title: "Support Infrastructure",
    desc:
      "Support channel management and escalation logic, including WhatsApp integration. Partners configure local support flows and own the user relationship — the underlying infrastructure benefits from continuous improvement across all deployments.",
    tags: ["WhatsApp", "Support Flows", "Escalation Logic"],
  },
  {
    title: "Admin & Reporting Interface",
    desc:
      "Partner-facing dashboard for deployment management, user analytics, and performance reporting. Partners access structured data feeds — Uniti maintains the aggregation and cross-market analytics layer.",
    tags: ["Dashboard", "Data Feeds", "Analytics"],
  },
];

const roadmap: { num: string; title: string; desc: string; label: string }[] = [
  {
    num: "01",
    title: "User-Controlled Data Wallet",
    desc:
      "A longitudinal record of digital behaviour, goals, and service engagement — owned by the user, accessible by her consent. The architecture and consent framework are Uniti core. Partners can build directly on top of the wallet to create territory-owned services: loyalty programmes, credit products, retention tools. What partners build on the wallet is theirs.",
    label: "UNITI ARCHITECTURE — OPEN TO PARTNER DEVELOPMENT",
  },
  {
    num: "02",
    title: "Loyalty & Cross-Service Incentives",
    desc:
      "Not yet built. The data wallet creates the foundation — what gets built on top of it is an open IP question. Partners could build the logic and technology independently, accessing the wallet directly and owning the output entirely. Alternatively, Uniti and partners could build it together and co-own what's created. Both paths are viable.",
    label: "TERRITORY-OWNED — BUILT INDEPENDENTLY OR CO-OWNED",
  },
  {
    num: "03",
    title: "Enhanced Credit Score",
    desc:
      "Longitudinal behavioural signals from the data wallet enrich any credit scoring approach — a partner's own model, an existing financer's system, or a third-party provider. The engagement data is particularly powerful for psychometric models focused on behavioural consistency. Partners can build on this infrastructure independently, or we co-build — either way, the resulting product can be licensed across other markets.",
    label: "PARTNER'S TO BUILD, CO-BUILD, OR LICENSE",
  },
  {
    num: "04",
    title: "Post-Activation Retention Layer",
    desc:
      "Ongoing service delivery to users past the initial engagement phase — driving retention, deepening usage, and generating advocacy. Delivered through the platform; operational execution sits with the partner.",
    label: "SHARED — UNITI PLATFORM, PARTNER OPERATIONS",
  },
  {
    num: "05",
    title: "Partner-Led Innovation",
    desc:
      "There are things partners may want to build that aren't on this list — and we're genuinely open to that conversation. Building on top of the Uniti stack (new services, territory-specific products, integrations) is straightforward from an IP perspective — what a partner builds is theirs. Changes to the app itself — features, UX, user behaviours — are more complex, because they touch shared infrastructure and affect every deployment. That doesn't make it a no. But it requires a different kind of discussion: one where both parties share what they're envisioning.",
    label: "OPEN TO DISCUSSION — REQUIRES MUTUAL DISCLOSURE",
  },
];

const ItemCard = ({ item }: { item: Item }) => (
  <div
    className="p-6 md:p-7 rounded-lg transition-colors duration-200"
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <span
      className="block h-px w-10 mb-4"
      style={{ background: C.gold, opacity: 0.85 }}
      aria-hidden
    />
    <h3
      className="text-xl md:text-2xl font-semibold mb-4 leading-tight"
      style={{
        fontFamily: FONT_HEAD,
        color: C.white,
        letterSpacing: "-0.01em",
      }}
    >
      {item.title}
    </h3>
    <Body className="mb-4">{item.desc}</Body>
    {item.tags && (
      <div className="flex flex-wrap">
        {item.tags.map((t) => (
          <Tag key={t} label={t} color={item.tagColor ?? C.cobalt} />
        ))}
      </div>
    )}
  </div>
);

const IpFramework = () => {
  usePageMetadata({
    title: "Platform Architecture & IP Framework — Uniti Networks",
    description:
      "A structured view of what Uniti owns, what partners own, and where we build together — the platform architecture and IP framework.",
    ogTitle: "Platform Architecture & IP Framework",
    ogDescription:
      "What Uniti owns, what partners own, and where we build together — and why it matters for everyone in the ecosystem.",
    ogUrl: "https://unitinetworks.com/ip-framework",
  });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* ─── Hero ─── */}
        <section
          className="relative overflow-hidden min-h-[420px] flex items-center"
          style={{ background: C.bgDark }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsla(239,46%,12%,0.95) 0%, hsla(239,46%,8%,1) 100%)",
            }}
          />
          <NodeCanvas />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-20 py-20 md:py-28 lg:py-32">
            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] mb-6 text-white max-w-3xl"
              style={{ fontFamily: FONT_HEAD, letterSpacing: "-0.02em" }}
            >
              Platform Architecture & IP Framework
            </h1>
            <p
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}
            >
              A structured view of what Uniti owns, what partners own, and where we build together —
              and why it matters for everyone in the ecosystem.
            </p>
          </div>
        </section>

        {/* ─── Legend ─── */}
        <section style={{ background: C.bgGrad }}>
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 pt-12 md:pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Uniti Core", desc: "Platform IP that compounds across markets", color: C.cobalt },
                { label: "Partner Layer", desc: "Territory-owned, co-designed", color: C.teal },
                { label: "Infrastructure", desc: "Uniti maintained, partner accessible", color: C.gold },
              ].map((l) => (
                <div
                  key={l.label}
                  className="p-5 rounded-lg flex items-start gap-3"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderLeft: `3px solid ${l.color}`,
                  }}
                >
                  <div>
                    <h3
                      className="text-base font-semibold text-white mb-1"
                      style={{ fontFamily: FONT_BODY }}
                    >
                      {l.label}
                    </h3>
                    <p className="text-sm" style={{ fontFamily: FONT_BODY, color: C.muted }}>
                      {l.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 01 Uniti Core ─── */}
        <section style={{ background: C.bgGrad }}>
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 pt-12 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
            <p
              className="text-sm tracking-[0.25em] mb-3"
              style={{ fontFamily: FONT_BODY, color: C.gold }}
            >
              01 · UNITI IP
            </p>
            <TwoToneHeading
              white="Uniti Core"
              muted="— Platform IP that compounds across markets."
            />
            <Body className="mb-10 max-w-4xl">
              These components remain under Uniti ownership not to exclude partners but because their
              value compounds across markets. An insight from a user in Accra improves coaching for a
              user in Nairobi. That cross-pollination only works if the underlying infrastructure stays
              integrated. Uniti's investors and shareholders expect this — and so should our partners,
              because it makes their deployment better over time.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {unitiCore.map((item) => (
                <ItemCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ─── 02 Partner Layer ─── */}
        <section style={{ background: C.bgDark }}>
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 pt-12 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
            <p
              className="text-sm tracking-[0.25em] mb-3"
              style={{ fontFamily: FONT_BODY, color: C.teal }}
            >
              02 · PARTNER & CO-DESIGNED
            </p>
            <TwoToneHeading
              white="Partner Layer"
              muted="— Most of what makes the platform work for a specific market belongs to the partner who builds it."
            />
            <Body className="mb-10 max-w-4xl">
              A partner's knowledge of the local ecosystem, its relationships with MNOs and local
              service providers, and its understanding of local users is irreplaceable. For localisation
              specifically — voice, language, coaching tone — Uniti may contribute to the initial build,
              particularly early in a deployment. In those cases, the output is still territory-owned:
              co-produced, but the partner's to own and evolve. Think of it as building on the rails:
              what you build is yours.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerLayer.map((item) => (
                <ItemCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ─── 03 Infrastructure ─── */}
        <section style={{ background: C.bgGrad }}>
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 pt-12 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
            <p
              className="text-sm tracking-[0.25em] mb-3"
              style={{ fontFamily: FONT_BODY, color: C.gold }}
            >
              03 · UNITI-MAINTAINED
            </p>
            <TwoToneHeading
              white="Platform Infrastructure"
              muted="— Connective layers that every deployment plugs into."
            />
            <Body className="mb-10 max-w-4xl">
              Uniti maintains these centrally so that every partner benefits from continuous
              improvements — without each market having to rebuild independently. Partners access these
              as services, not codebases.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infrastructure.map((item) => (
                <ItemCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ─── 04 Roadmap ─── */}
        <section style={{ background: C.bgDark }}>
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 pt-12 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
            <p
              className="text-sm tracking-[0.25em] mb-3"
              style={{ fontFamily: FONT_BODY, color: C.gold }}
            >
              04 · EARLY DESIGN
            </p>
            <TwoToneHeading
              white="Product Roadmap"
              muted="— The next layers of the platform."
            />
            <Body className="mb-10 max-w-4xl">
              Some Uniti-led, some partner's to own outright, some genuinely open. The principle
              throughout is the same: what you build on the platform is yours. What changes the
              platform itself is a shared conversation.
            </Body>
            <div className="space-y-6">
              {roadmap.map((r) => (
                <div
                  key={r.num}
                  className="p-6 rounded-lg grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 md:gap-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="text-3xl md:text-4xl font-light"
                    style={{ fontFamily: FONT_HEAD, color: C.gold }}
                  >
                    {r.num}
                  </span>
                  <div>
                    <h3
                      className="text-xl md:text-2xl font-semibold mb-4 leading-tight"
                      style={{
                        fontFamily: FONT_HEAD,
                        color: C.white,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {r.title}
                    </h3>
                    <Body className="mb-3">{r.desc}</Body>
                    <p
                      className="text-xs md:text-sm tracking-[0.15em]"
                      style={{ fontFamily: FONT_BODY, color: "#88ccff" }}
                    >
                      {r.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ─── Why this structure ─── */}
        <section style={{ background: C.bgGrad }}>
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32">
            <TwoToneHeading
              white="Why the structure is designed this way"
              muted="— For any territory partner considering this framework."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  title: "Cross-market learning benefits everyone",
                  text:
                    "Raw user data stays local — it belongs to users and is governed within each territory. What Uniti retains across markets is derived interaction data: coaching efficacy signals, engagement patterns, activation benchmarks. That's what makes the platform smarter in every market.",
                },
                {
                  title: "Local ownership is the model, not a concession",
                  text:
                    "Partners own their market, customer relationships, service suite, and revenues. This isn't a franchise — it's a peer collaboration. What you build on the platform is yours.",
                },
                {
                  title: "African tech, built with African partners",
                  text:
                    "Traditional tech scaling has concentrated ownership outside the continent. This model is designed to invert that. Equity participation, local IP ownership, and majority revenue retention are structural.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-6 rounded-lg"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderLeft: `3px solid ${C.gold}`,
                  }}
                >
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ fontFamily: FONT_BODY, color: C.muted }}
                  >
                    {card.title}
                  </h3>
                  <Body>{card.text}</Body>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IpFramework;