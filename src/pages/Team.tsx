import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NodeCanvas from "@/components/NodeCanvas";
import heroCityscape from "@/assets/hero-cityscape.png";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string | null;
}

const allTeam: TeamMember[] = [
  { name: "Kami Dar", role: "CEO & FOUNDER", bio: "Kami leads Uniti's strategic vision, partner alignment and growth mapping. He has 25+ years experience at the intersection of technology and social impact, as Co-founder of Devex, the global development sector's media platform, and advisor to various organizations engaged in large-scale system change.", image: "/lovable-uploads/team-kami.png" },
  { name: "Max Giacomelli", role: "EXECUTIVE CHAIR", bio: "Bringing decades of experience in telecommunications and emerging markets.", image: "/lovable-uploads/team-max.png" },
  { name: "Anna Montanes", role: "PRODUCT STRATEGY", bio: "Architecting the Uniti Beat engine and platform infrastructure.", image: "/lovable-uploads/team-anna.png" },
  { name: "Samuel Alomenu", role: "BUSINESS OPERATIONS LEAD", bio: "With an MBA from Esade, Barcelona, Samuel heads Uniti's business and sales operations. He has experience leading programs and applying disruptive technology to drive impact.", image: "/lovable-uploads/team-samuel.png" },
  { name: "Karan Vir Arya", role: "ENGAGEMENT LEAD", bio: "A former corporate lawyer, Karan leads the development of Uniti Beat, translating complex digital workflows into intuitive experiences for first-time smartphone users and active participants in the digital economy. His previous experiences include Google and Deutsche Bank.", image: "/lovable-uploads/team-karan.png" },
  { name: "Rita Quansah", role: "COUNTRY LEAD, GHANA", bio: "Based out of Accra, Rita leads our operations in Ghana and service delivery, and supports the Uniti all Centre. Her background is managing maternal health and education programs in Ghana with Jhpiego and similar organizations.", image: "/lovable-uploads/team-rita.png" },
  { name: "Rosa Wang", role: "ADVISOR", bio: "An author, strategist, and public communicator on transformative technologies. Her experience as Global Director for Digital Financial Services with Opportunity International and long-term commitment to spreading digital and mobile technologies to those excluded from the digital revolution are an incredible asset to the Uniti team.", image: "/lovable-uploads/team-rosa.png" },
];

const PersonCard = ({ person }: { person: TeamMember }) => (
  <div className="text-center">
    <div className="w-[148px] h-[148px] mx-auto rounded-full mb-4 flex items-center justify-center overflow-hidden" style={{ background: "radial-gradient(circle at 50% 40%, #1a1c48 0%, #0a0b1e 100%)" }}>
      {person.image ? (
        <img src={person.image} alt={person.name} className="w-full h-full object-cover" style={{ objectPosition: "center center", transform: "scale(1.2)" }} />
      ) : (
        <span className="text-base text-white/50">Photo</span>
      )}
    </div>
    <h3 className="font-heading text-base font-bold text-white">{person.name}</h3>
     <p className="text-base text-accent font-medium mb-2">{person.role}</p>
     <p className="text-base text-white mb-3 max-w-xs mx-auto">{person.bio}</p>
  </div>
);

const Team = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16" style={{ background: "#0b0c1f" }}>
        {/* Hero */}
        <section className="relative w-full min-h-[70vh] overflow-hidden flex items-center">
          <img
            src={heroCityscape}
            alt="Aerial cityscape at golden hour — urban infrastructure at scale"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsla(239,46%,8%,0.72) 0%, hsla(239,46%,12%,0.65) 100%)",
            }}
          />
          <NodeCanvas />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-24 animate-[fadeInUp_0.8s_ease-out_both]">
            <div className="max-w-xl">
              <h1
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] mb-6"
                style={{
                  fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                The Architects of
                <br />
                Digital Transition
              </h1>
              <p
                className="text-white/75 text-base md:text-lg leading-relaxed max-w-md mb-10"
                style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}
              >
                Meet the team building the future of digital activation.
              </p>
            </div>
          </div>
        </section>

        {/* Team — strict 2-column grid */}
        <section className="section-padding" style={{ background: "#0b0c1f" }}>
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14">
              {allTeam.slice(0, 6).map((m) => (
                <PersonCard key={m.name} person={m} />
              ))}
            </div>
            {/* Rosa Wang — centered */}
            <div className="mt-14 flex justify-center">
              <div className="w-full max-w-xs">
                <PersonCard person={allTeam[6]} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Team;
