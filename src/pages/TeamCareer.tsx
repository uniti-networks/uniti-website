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
{ name: "Team Member 1", role: "CEO & Founder", bio: "Leading Uniti's mission to bridge the digital activation gap across emerging markets.", linkedin: "#", image: null },
{ name: "Team Member 2", role: "CTO", bio: "Architecting the Uniti Beat engine and platform infrastructure.", linkedin: "#", image: null },
{ name: "Team Member 3", role: "COO", bio: "Driving operational excellence and partnership development.", linkedin: "#", image: null },
{ name: "Team Member 4", role: "Head of Product", bio: "Shaping the user experience and product roadmap.", linkedin: "#", image: null },
{ name: "Team Member 5", role: "Head of Partnerships", bio: "Building relationships with MNOs, financiers, and NGOs.", linkedin: "#", image: null },
{ name: "Team Member 6", role: "Head of Content", bio: "Creating educational content for digital onboarding.", linkedin: "#", image: null }];


const advisors: TeamMember[] = [
{ name: "Advisor 1", role: "Board Advisor", bio: "Bringing decades of experience in telecommunications and emerging markets.", linkedin: "#", image: null },
{ name: "Advisor 2", role: "Board Advisor", bio: "Expert in fintech and financial inclusion across Africa.", linkedin: "#", image: null }];


interface JobOpening {
  title: string;
  location: string;
  type: string;
  description: string;
}

const jobOpenings: JobOpening[] = [
{
  title: "Senior Software Engineer",
  location: "Remote",
  type: "Full-time",
  description: "We're looking for a senior engineer to help build and scale the Uniti platform. You'll work on our behavioral intervention engine and help shape the technical architecture."
},
{
  title: "Partnership Manager — East Africa",
  location: "Nairobi, Kenya",
  type: "Full-time",
  description: "Drive partnership development with MNOs and device financiers across East Africa. Build and maintain strategic relationships that expand Uniti's reach."
},
{
  title: "Content & Curriculum Designer",
  location: "Remote",
  type: "Contract",
  description: "Design and develop educational content for digital onboarding programs. Create culturally relevant materials in multiple languages."
}];


const PersonCard = ({ person }: {person: TeamMember;}) =>
<div className="text-center">
    <div className="w-32 h-32 mx-auto rounded-full bg-section-alt border-2 border-dashed border-border mb-4 flex items-center justify-center overflow-hidden">
      {person.image ?
    <img src={person.image} alt={person.name} className="w-full h-full object-cover" /> :

    <span className="text-xs text-muted-foreground">Photo</span>
    }
    </div>
    <h3 className="font-heading text-base font-bold text-heading">{person.name}</h3>
    <p className="text-sm text-accent font-medium mb-2">{person.role}</p>
    <p className="text-sm text-foreground mb-3 max-w-xs mx-auto">{person.bio}</p>
    <a href={person.linkedin} className="inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors">
      <Linkedin className="w-4 h-4" />
    </a>
  </div>;


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
      <main className="pt-16">
        {/* Hero */}
        <section className="section-padding bg-primary text-center">
          <div className="container-narrow">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">

            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
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
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((m) =>
              <PersonCard key={m.name} person={m} />
              )}
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="section-padding section-alt">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Board of Advisors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-3xl mx-auto">
              {advisors.map((a) =>
              <PersonCard key={a.name} person={a} />
              )}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="section-padding" id="jobs">
          <div className="container-narrow">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Open Positions</h2>
            <div className="space-y-4">
              {jobOpenings.map((job, i) =>
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                  <button
                  onClick={() => setOpenJob(openJob === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-section-alt transition-colors">
                  
                    <div>
                      <h3 className="font-heading text-lg font-bold text-heading">{job.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{job.location} · {job.type}</p>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openJob === i ? "rotate-180" : ""}`} />
                  </button>

                  {openJob === i &&
                <div className="px-6 pb-6 border-t border-border pt-4">
                      <p className="text-foreground mb-6">{job.description}</p>

                      {showForm === i ?
                  <form onSubmit={handleApply} className="space-y-4">
                          <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={appForm.name}
                      onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    
                          <input
                      type="email"
                      required
                      placeholder="Email"
                      value={appForm.email}
                      onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    
                          <textarea
                      required
                      rows={4}
                      placeholder="Cover Letter"
                      value={appForm.cover}
                      onChange={(e) => setAppForm({ ...appForm, cover: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
                    
                          <p className="text-xs text-muted-foreground">CV/Resume upload will be available soon. Please include relevant links in your cover letter.</p>
                          <div className="flex gap-3">
                            <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Submit Application</Button>
                            <Button type="button" variant="outline" onClick={() => setShowForm(null)}>Cancel</Button>
                          </div>
                        </form> :

                  <Button onClick={() => setShowForm(i)} className="bg-accent text-accent-foreground hover:bg-accent/90">
                          Apply Now
                        </Button>
                  }
                    </div>
                }
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};

export default TeamCareer;