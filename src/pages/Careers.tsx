import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const Careers = () => {
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
        <section className="section-padding" style={{ background: "#0b0c1f" }}>
          <div className="container-narrow">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">Open Positions</h1>
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

export default Careers;
