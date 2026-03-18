import { useState } from "react";
import { Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image: string | null;
}

const teamMembers: TeamMember[] = [
  { name: "Kami Dar", role: "CEO & FOUNDER", bio: "Kami leads Uniti's strategic vision, partner alignment and growth mapping. He has 25+ years experience at the intersection of technology and social impact, as Co-founder of Devex, the global development sector's media platform, and advisor to various organizations engaged in large-scale system change.", linkedin: "#", image: "/lovable-uploads/team-kami.png" },
  { name: "Anna Montanes", role: "PRODUCT STRATEGY", bio: "Architecting the Uniti Beat engine and platform infrastructure.", linkedin: "#", image: "/lovable-uploads/team-anna.png" },
  { name: "Samuel Alomenu", role: "BUSINESS OPERATIONS LEAD", bio: "With an MBA from Esade, Barcelona, Samuel heads Uniti's business and sales operations. He has experience leading programs and applying disruptive technology to drive impact.", linkedin: "#", image: "/lovable-uploads/team-samuel.png" },
  { name: "Rita Quansah", role: "COUNTRY LEAD, GHANA", bio: "Based out of Accra, Rita leads our operations in Ghana and service delivery, and supports the Uniti all Centre. Her background is managing maternal health and education programs in Ghana with Jhpiego and similar organizations.", linkedin: "#", image: "/lovable-uploads/team-rita.png" },
  { name: "Karan Vir Arya", role: "ENGAGEMENT LEAD", bio: "A former corporate lawyer, Karan leads the development of Uniti Beat, translating complex digital workflows into intuitive experiences for first-time smartphone users and active participants in the digital economy. His previous experiences include Google and Deutsche Bank.", linkedin: "#", image: "/lovable-uploads/team-karan.png" },
];

const advisors: TeamMember[] = [
  { name: "Max Giacomelli", role: "EXECUTIVE CHAIR", bio: "Bringing decades of experience in telecommunications and emerging markets.", linkedin: "#", image: "/lovable-uploads/team-max.png" },
  { name: "Rosa Wang", role: "ADVISOR", bio: "An author, strategist, and public communicator on transformative technologies. Her experience as Global Director for Digital Financial Services with Opportunity International and long-term commitment to spreading digital and mobile technologies to those excluded from the digital revolution are an incredible asset to the Uniti team.", linkedin: "#", image: "/lovable-uploads/team-rosa.png" },
];

interface JobOpening {
  title: string;
  location: string;
  type: string;
  description: string;
}

const jobOpenings: JobOpening[] = [
  {
    title: "Behavioral Science Advisor",
    location: "Remote",
    type: "Full-time",
    description: "Uniti Networks is solving the digital activation gap in Africa. We've built an AI-driven coaching platform that helps first-time smartphone users successfully adopt apps in finance, health, education, and agriculture. Our engagement rates are 5-10x industry standard, and we've proven the model works with real users in Ghana.\n\nNow we need to make it systematically better."
  },
];

const PersonCard = ({ person }: { person: TeamMember }) => (
  <div className="text-center">
    <div className="w-32 h-32 mx-auto rounded-full border-2 border-dashed border-white/20 mb-4 flex items-center justify-center overflow-hidden" style={{ background: "#1e204a" }}>
      {person.image ? (
        <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-xs text-white/50">Photo</span>
      )}
    </div>
    <h3 className="font-heading text-base font-bold text-white">{person.name}</h3>
    <p className="text-sm text-accent font-medium mb-2">{person.role}</p>
    <p className="text-sm text-white/70 mb-3 max-w-xs mx-auto">{person.bio}</p>
    <a href={person.linkedin} className="inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors">
      <Linkedin className="w-4 h-4" />
    </a>
  </div>
);

const TeamCareer = () => {
  const [openJob, setOpenJob] = useState<number | null>(null);
  const [showForm, setShowForm] = useState<number | null>(null);
  const [appForm, setAppForm] = useState({ name: "", email: "", cover: "" });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! We'll review your details and get back to you.");
    setAppForm({ name: "", email: "", cover: "" });
    setShowForm(null);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16" style={{ background: "#0b0c1f" }}>
        {/* Hero */}
        <section className="section-padding text-center" style={{ background: "radial-gradient(ellipse at center, #1e204a 0%, #0b0c1f 70%)" }}>
          <div className="container-narrow">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            </h1>
            <p className="text-lg text-white/70 mb-8">
              Join the team building the future of digital activation.
            </p>
            <a href="#jobs">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Job Openings
              </Button>
            </a>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding" style={{ background: "#0b0c1f" }}>
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((m) => (
                <PersonCard key={m.name} person={m} />
              ))}
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="section-padding" style={{ background: "#0b0c1f" }}>
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">Board of Advisors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-3xl mx-auto">
              {advisors.map((a) => (
                <PersonCard key={a.name} person={a} />
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="section-padding" id="jobs" style={{ background: "#0b0c1f" }}>
          <div className="container-narrow">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">Open Positions</h2>
            <div className="space-y-4">
              {jobOpenings.map((job, i) => (
                <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenJob(openJob === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white">{job.title}</h3>
                      <p className="text-sm text-white/50 mt-1">{job.location} · {job.type}</p>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${openJob === i ? "rotate-180" : ""}`} />
                  </button>

                  {openJob === i && (
                    <div className="px-6 pb-6 border-t border-white/10 pt-4">
                      <p className="text-white/70 mb-6 whitespace-pre-line">{job.description}</p>

                      {showForm === i ? (
                        <form onSubmit={handleApply} className="space-y-4">
                          <input
                            type="text"
                            required
                            placeholder="Full Name"
                            value={appForm.name}
                            onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                          <input
                            type="email"
                            required
                            placeholder="Email"
                            value={appForm.email}
                            onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                          <textarea
                            required
                            rows={4}
                            placeholder="Cover Letter"
                            value={appForm.cover}
                            onChange={(e) => setAppForm({ ...appForm, cover: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                          />
                          <p className="text-xs text-white/40">CV/Resume upload will be available soon. Please include relevant links in your cover letter.</p>
                          <div className="flex gap-3">
                            <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Submit Application</Button>
                            <Button type="button" variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => setShowForm(null)}>Cancel</Button>
                          </div>
                        </form>
                      ) : (
                        <Button onClick={() => setShowForm(i)} className="bg-accent text-accent-foreground hover:bg-accent/90">
                          Apply Now
                        </Button>
                      )}
                    </div>
                  )}
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

export default TeamCareer;
