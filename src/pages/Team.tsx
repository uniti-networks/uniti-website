import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NodeCanvas from "@/components/NodeCanvas";
import heroCityscape from "@/assets/hero-team-cityscape.png";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string | null;
  imagePosition?: string;
}

const allTeam: TeamMember[] = [
{
  name: "Kami Dar",
  role: "CEO & FOUNDER",
  bio: "Kami leads Uniti's strategic vision, partner alignment, and growth mapping. He has 25+ years of experience at the intersection of technology and social impact, as Co-founder of Devex, the global development sector's media platform, and advisor to various organizations engaged in large-scale system change.",
  image: "/lovable-uploads/team-kami.png"
},
{
  name: "Max Giacomelli",
  role: "EXECUTIVE CHAIR",
  bio: "Max drives Uniti's global scaling strategy, mobilizing capital and building the multi-stakeholder partnerships required to deliver digital impact at scale. With 20+ years of experience across for-profit and for-impact sectors, he previously led the GSMA's Mobile for Development team, managing a $25m+ portfolio reaching 220 million people. Max is also the Co-founder of Africa: The Big Deal, the leading platform for venture investment insights across the continent.",
  image: "/lovable-uploads/team-max.png"
},
{
  name: "Anna Montanes",
  role: "PRODUCT STRATEGY",
  bio: "Anna leads Uniti's product strategy and development, shaping the AI-powered activation framework for first-time smartphone users. She brings 16+ years of experience building technology for social impact across international development, health-tech, and community-tech, with deep expertise in data management and AI.",
  image: "/lovable-uploads/team-anna.png"
},
{
  name: "Samuel Alomenu",
  role: "BUSINESS OPERATIONS LEAD",
  bio: "Samuel heads Uniti's business and sales operations, focused on expanding the Uniti ecosystem. He leads the acquisition of new app developers for the Uniti suite and manages strategic engagement with Mobile Network Operators (MNOs) and device financiers. With an MBA from Esade, Barcelona, he specializes in building the commercial partnerships and logistical frameworks required to scale Uniti's reach across emerging markets.",
  image: "/lovable-uploads/team-samuel.png",
  imagePosition: "center 30%"
},
{
  name: "Karan Vir Arya",
  role: "ENGAGEMENT LEAD",
  bio: "A former corporate lawyer, Karan leads the development of the Uniti Beat engine. Drawing on his experience at Google, where he led the Internet Saathi program, he architects the digital workflows and behavioral hooks that turn passive smartphone users into active participants. His role is to ensure that Uniti's interface is globally scalable and psychologically optimized to drive consistent user engagement for first-time owners.",
  image: "/lovable-uploads/team-karan.png"
},
{
  name: "Rita Quansah",
  role: "COUNTRY LEAD, GHANA",
  bio: "Based in Accra, Rita oversees the physical execution of Uniti's mission in Ghana, managing the localized Induction Layer. She leads the regional call centers and support infrastructure, ensuring that user activation and partner support are tailored to the specific logistical realities of the West African market. With a background in managing large-scale initiatives for organizations like Jhpiego, Rita ensures Uniti's global technology is effectively adapted to the Ghanaian landscape.",
  image: "/lovable-uploads/team-rita.png",
  imagePosition: "center 30%"
},
{
  name: "Rosa Wang",
  role: "ADVISOR",
  bio: "Rosa is a leading strategist and author on the mass adoption of transformative technologies for the digitally excluded. As the former Global Director for Digital Financial Services at Opportunity International, she has dedicated her career to spreading mobile financial tools to underserved populations. At Uniti, she provides high-level advisory on financial inclusion, leveraging her extensive research and published work to guide the ethical expansion of the digital revolution.",
  image: "/lovable-uploads/team-rosa.png"
}];


const PersonCard = ({ person }: {person: TeamMember;}) =>
<div className="text-center">
    <div
    className="w-[200px] mx-auto mb-5 rounded-xl overflow-hidden"
    style={{
      aspectRatio: "3 / 4",
      boxShadow: "0 0 28px 6px rgba(0, 255, 255, 0.18), 0 0 60px 12px rgba(0, 255, 255, 0.08)"
    }}>
    
      {person.image ?
    <img
      src={person.image}
      alt={person.name}
      className="w-full h-full object-cover"
      style={{ objectPosition: person.imagePosition || "center 15%" }} /> :


    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: "radial-gradient(circle at 50% 40%, #1a1c48 0%, #0a0b1e 100%)" }}>
      
          <span className="text-base text-white/50">Photo</span>
        </div>
    }
    </div>
    <h3
    className="text-lg font-bold text-white mb-1"
    style={{ fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif" }}>
    
      {person.name}
    </h3>
    <p className="text-base text-accent font-medium mb-2">{person.role}</p>
    <p className="text-sm text-white leading-relaxed max-w-sm mx-auto">{person.bio}</p>
  </div>;


const Team = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16" style={{ background: "#0b0c1f" }}>
        {/* Hero */}
        <section className="relative w-full min-h-[52vh] overflow-hidden flex items-center">
          <img
            src={heroCityscape}
            alt="Aerial cityscape at golden hour — urban infrastructure at scale"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 35%" }} />
          
          <div
            className="absolute inset-0"
            style={{
              background:
              "linear-gradient(180deg, hsla(239,46%,8%,0.72) 0%, hsla(239,46%,12%,0.65) 100%)"
            }} />
          
          <NodeCanvas />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-24 animate-[fadeInUp_0.8s_ease-out_both]">
            <div className="max-w-xl">
              <h1
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] mb-6"
                style={{
                  fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "-0.02em"
                }}>Architecting Digital Activation
              </h1>
              <p
                className="text-white/75 text-base md:text-lg leading-relaxed max-w-md mb-10"
                style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}>
                
                Meet the team building the future of digital activation.
              </p>
            </div>
          </div>
        </section>

        {/* Team — 2-column grid, 65% width on desktop */}
        <section className="section-padding" style={{ background: "#0b0c1f" }}>
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-center text-white mb-14"
              style={{ fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif" }}>
              
              Our Team
            </h2>
            <div className="mx-auto" style={{ maxWidth: "65%" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16">
                {allTeam.slice(0, 6).map((m) =>
                <PersonCard key={m.name} person={m} />
                )}
              </div>
              {/* Rosa Wang — centered */}
              <div className="mt-16 flex justify-center">
                <div className="w-full max-w-sm">
                  <PersonCard person={allTeam[6]} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};

export default Team;