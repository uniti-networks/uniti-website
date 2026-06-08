import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NodeCanvas from "@/components/NodeCanvas";
import heroImg from "@/assets/hero-careers.png";
import { usePageMetadata } from "@/hooks/use-page-metadata";

interface JobOpening {
  title: string;
  slug: string;
  location: string;
  type: string;
  description: React.ReactNode;
}

const BehavioralScienceContent = () => (
   <div className="space-y-4 text-white/80 text-base leading-relaxed">
    <p>Uniti Networks is solving the digital activation gap in Africa. We've built an AI-driven coaching platform that helps first-time smartphone users successfully adopt apps in finance, health, education, and agriculture. Our engagement rates are 5-10x industry standard, and we've proven the model works with real users in Ghana.</p>
    <p>Now we need to make it systematically better.</p>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">The Role</h4>
    <p>Part-time (10-15 hours/month) for 6 months, with potential to grow full-time. You'll design our data collection approach, analyze behavioral patterns, and optimize our coaching interventions. If this works and funding allows, you could grow into a thought leadership role — representing us at conferences, publishing insights, and shaping how the industry thinks about digital activation.</p>
    <p>This is a product role, not pure research. You'll work directly with our team to improve what we're building, not write papers about it.</p>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">What You'll Do</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Design experiments to test coaching interventions (nudges, incentives, messaging)</li>
      <li>Analyze user behavior to identify patterns and optimize engagement</li>
      <li>Build a versioned, systematic approach to iterating on our coaching model</li>
      <li>Work with our product team to translate insights into improvements</li>
      <li>(Potential future) Represent Uniti at conferences and publish on behavioral science for underserved users</li>
    </ul>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">What We're Looking For</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Expertise in behavioral economics and intervention design</li>
      <li>Quantitative mindset — you approach problems like an engineer (structured experimentation, A/B testing, causal thinking)</li>
      <li>Experience with low-literacy or low-income users is a major plus</li>
      <li>Curious, collaborative, comfortable with ownership and accountability</li>
      <li>Comfortable working independently and setting your own agenda</li>
      <li>Africa-based or Europe-based preferred (remote works)</li>
    </ul>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">What's In It For You</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>$1K/month for 6 months, with potential to grow full-time</li>
      <li>Shape a novel approach to digital activation in emerging markets</li>
      <li>Potential path to thought leadership (conferences, publications, industry influence)</li>
      <li>Mission-driven team solving real problems at scale</li>
    </ul>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">How to Apply</h4>
    <p>Skip the CV. Send a short note (500 words max) to <a href="mailto:connect@unitinetworks.com" className="text-accent underline">connect@unitinetworks.com</a> on:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Why this work matters to you</li>
      <li>Our coaching library has hundreds of messages organized around different goals: explaining WHY to adopt a behavior, HOW to use a specific app, and moments of celebration, support, reactivation, and incentivization. How would you approach analyzing whether we have the right balance? What would you measure to know if the architecture is working?</li>
    </ul>
  </div>
);


const jobOpenings: JobOpening[] = [
  {
    title: "Behavioral Science Advisor",
    slug: "behavioral-science-advisor",
    location: "Remote",
    type: "Part-time",
    description: <BehavioralScienceContent />,
  },
];

const Careers = () => {
  const { slug } = useParams<{ slug?: string }>();
  usePageMetadata({
    title: "Careers — Uniti Networks",
    description: "Join the team building digital activation infrastructure for first-time smartphone users across Africa.",
    ogTitle: "Careers at Uniti Networks",
    ogDescription: "Join the team building digital activation infrastructure for first-time smartphone users across Africa.",
    ogUrl: "https://unitinetworks.com/careers",
    twitterTitle: "Careers at Uniti Networks",
    twitterDescription: "Join the team building digital activation infrastructure for first-time smartphone users across Africa.",
  });

  const initialIndex = slug ? jobOpenings.findIndex((j) => j.slug === slug) : null;
  const [openJob, setOpenJob] = useState<number | null>(initialIndex !== -1 ? initialIndex : null);
  const sectionRef = useRef<HTMLElement>(null);
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [offset, setOffset] = useState(0);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  useEffect(() => {
    if (slug && initialIndex !== null && initialIndex >= 0) {
      setTimeout(() => {
        jobRefs.current[initialIndex]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [slug, initialIndex]);

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setOffset(-rect.top * 0.25);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-16" style={{ background: "#0b0c1f" }}>
        {/* Hero Section */}
        <section
          ref={sectionRef}
          className="relative w-full h-[420px] overflow-hidden flex items-center"
        >
          <img
            src={heroImg}
            alt="Cell tower silhouette at dusk"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "center 30%",
              transform: `translateY(${offset}px)`,
              willChange: "transform",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, hsla(239,46%,18%,0.75) 0%, hsla(239,46%,22%,0.5) 50%, hsla(239,46%,30%,0.3) 100%)",
            }}
          />
          <NodeCanvas />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-24 md:py-32 lg:py-40 animate-[fadeInUp_0.8s_ease-out_both]">
            <div className="max-w-xl">
              <h1
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] mb-6"
                style={{
                  fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Open Positions
              </h1>
              <p
                className="text-white/75 text-base md:text-lg leading-relaxed max-w-md mb-10"
                style={{ fontFamily: "'Europa', 'Inter', sans-serif" }}
              >
                Join the team building the future of digital activation.
              </p>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="section-padding" style={{ background: "#0b0c1f" }}>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {jobOpenings.map((job, i) => (
                <div key={i} ref={(el) => { jobRefs.current[i] = el; }} className="border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenJob(openJob === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                        {job.title}
                        <span
                          role="button"
                          tabIndex={0}
                          className="relative inline-flex items-center justify-center p-1 rounded hover:bg-white/10 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(`https://unitinetworks.com/careers/${job.slug}`);
                            setCopiedSlug(job.slug);
                            setTimeout(() => setCopiedSlug(null), 2000);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.stopPropagation();
                              navigator.clipboard.writeText(`https://unitinetworks.com/careers/${job.slug}`);
                              setCopiedSlug(job.slug);
                              setTimeout(() => setCopiedSlug(null), 2000);
                            }
                          }}
                        >
                          <Share2 className="w-4 h-4 text-white/40 hover:text-white/70 transition-colors" />
                          {copiedSlug === job.slug && (
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg animate-[fadeInUp_0.2s_ease-out]">
                              Link copied!
                            </span>
                          )}
                        </span>
                      </h3>
                      <p className="text-base text-white/50 mt-1">{job.location} · {job.type}</p>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-200 ${openJob === i ? "rotate-180" : ""}`} />
                  </button>

                  {openJob === i && (
                    <div className="px-6 pb-6 border-t border-white/10 pt-4">
                      {job.description}
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
