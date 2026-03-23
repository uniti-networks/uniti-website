import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NodeCanvas from "@/components/NodeCanvas";
import heroImg from "@/assets/hero-careers.png";
import JuniorDeveloperContent from "@/components/careers/JuniorDeveloperContent";
import { usePageMetadata } from "@/hooks/use-page-metadata";

interface JobOpening {
  title: string;
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

const OperationsManagerContent = () => (
   <div className="space-y-4 text-white/80 text-base leading-relaxed">
    <p>Uniti Networks turns Africa's 300M underserved smartphone users into engaged customers for digital services. We combine device financing, AI-driven coaching, and service aggregation to make smartphones productive from day one. We've signed partnerships that give us a pathway to 1M users, locked in committed revenues from app partners, and achieved engagement rates 5-10x industry standard.</p>
    <p>We're scaling fast. And we need someone to help us execute.</p>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">The Role</h4>
    <p>You'll work directly with me to manage operations — team coordination, contracts, payments, and ground-level problem-solving across our Ghana operations. You'll build the systems that let us move faster. Over time, this has potential to grow into senior leadership as we scale across markets.</p>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">What You'll Do</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Manage team coordination across Ghana, Spain, and remote contributors</li>
      <li>Own contract execution, vendor relationships, and payment processes</li>
      <li>Support HR and operations (hiring, onboarding, team systems)</li>
      <li>Troubleshoot operational gaps in Ghana (logistics, partner coordination, on-the-ground execution)</li>
      <li>Build scalable systems as we grow from thousands to hundreds of thousands of users</li>
    </ul>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">What We're Looking For</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Strong operations or startup experience — you've built systems from scratch</li>
      <li>Direct, low-friction communicator who moves fast and solves problems</li>
      <li>Networks in African tech, African telecom, or African impact ecosystems are a big plus</li>
      <li>Curious, collaborative, and comfortable with ownership and accountability</li>
      <li>Comfortable turning ambiguity into opportunity</li>
      <li>Preference for time zones overlapping with Africa & Europe</li>
    </ul>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">What's In It For You</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Competitive compensation (benchmarked to location) + equity</li>
      <li>Real ownership of operations — you'll build your own domain</li>
      <li>Potential to grow into senior leadership (VP/Director-level)</li>
      <li>Chance to unlock a massive, underserved market</li>
      <li>Mission-driven team solving real inclusion problems</li>
    </ul>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">How to Apply</h4>
    <p>Skip the CV. Send a short note (500 words max) to <a href="mailto:connect@unitinetworks.com" className="text-accent underline">connect@unitinetworks.com</a> on:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Why this resonates with you</li>
      <li>One example of how you've built operational systems or solved messy problems</li>
    </ul>
  </div>
);

const IndependentBoardMemberContent = () => (
  <div className="space-y-4 text-white/80 text-base leading-relaxed">
    <p>As we celebrate our first commercial launch in Ghana and prepare to expand through licensees and raise a seed round, Uniti Networks is looking to strengthen its Board by adding its first independent Board member.</p>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">About Uniti Networks</h4>
    <p>Uniti Networks builds digital activation infrastructure for first-time smartphone users in Africa. Through AI-driven coaching in local languages, curated app suites, and behavioral engagement systems, we help users derive productive economic value from their devices from day one. We're currently scaling from a pilot with MTN Ghana toward commercial deployment across multiple African markets through a licensing model that partners with mobile operators and device financiers.</p>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">The Opportunity</h4>
    <p>We're building our board to support the next phase of growth: proving commercial sustainability in Ghana, closing our first licensing deals, and raising capital to accelerate geographic expansion. In this context, we're looking for an independent board member who brings strategic value in one or more of the following areas:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Scaling technology infrastructure across emerging markets — practical knowledge of what it takes to deploy platforms across fragmented markets with varying regulatory, technical, and commercial realities</li>
      <li>Fundraising and investor relationships — connections to impact investors, family offices, or development finance institutions who invest in digital infrastructure and financial inclusion</li>
      <li>African operator relationships and commercial partnerships — experience navigating telco decision-making, understanding operator economics, and structuring partnerships and licensing deals that work for both sides</li>
      <li>Board governance experience — track record helping early-stage companies build effective governance structures and transition from founder-led to professionalized operations</li>
    </ul>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">What We're Building</h4>
    <p>Our thesis is straightforward: smartphone ownership doesn't automatically translate to productive digital participation. The gap between device ownership and sustained use of digital services (finance, health, education, work) can stretch for months or years, creating losses across the entire value chain: users don't benefit, device financiers see high NPLs, operators record low ARPU, app developers struggle with retention…</p>
    <p>We've built the infrastructure to collapse that gap: structured onboarding, AI coaching in local languages, behavioral nudges tied to concrete goals, and curated app suites that guide users toward productive engagement. Our model has demonstrated engagement rates significantly above industry baseline in pilots with Care International and is now being validated commercially with MTN Ghana.</p>
    <p>Our go-to-market strategy centers on licensing: we deploy the platform with operators and device financiers who pay us per activated user. This allows us to scale across multiple markets in parallel without the capital intensity of direct operations in each country.</p>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">Board Composition</h4>
    <p>Our current board comprises:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Kami Dar — CEO & Founder</li>
      <li>Max Cuvellier Giacomelli — Executive Chair (former Head of Mobile for Development at GSMA, co-founder of Africa: The Big Deal)</li>
    </ul>
    <p>We're building toward a five-person board with two independent members. This is the first independent seat and an opportunity to help shape this growing board.</p>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">Time Commitment</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Quarterly board meetings (2-3 hours each, remote-friendly)</li>
      <li>Ad-hoc strategic conversations as needed (estimated 5-10 hours per quarter)</li>
      <li>Active support on specific initiatives where your expertise is most relevant (e.g. licensing negotiations, fundraising introductions, operator relationships)</li>
    </ul>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">Compensation</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Equity grant: 0.5-1% depending on experience, with standard 4-year vesting</li>
    </ul>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">Ideal Candidate Profile</h4>
    <p>We're looking for someone who:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Has operated in African markets and understands the commercial realities of building technology businesses across the continent</li>
      <li>Brings a network that can open doors, whether with operators, investors, or strategic partners</li>
      <li>Is comfortable with early-stage ambiguity and willing to roll up their sleeves when needed</li>
      <li>Is passionate about digital inclusion and strongly believes it is only sustainable at scale if it is supported by commercially viable business models</li>
      <li>Can provide strategic guidance without trying to run the company</li>
    </ul>

    <h4 className="text-white font-bold text-base md:text-lg mt-6">To Apply</h4>
    <p>Email <a href="mailto:boardsearch@unitinetworks.com" className="text-accent underline">boardsearch@unitinetworks.com</a> (subject: Independent Board member - YourName) with:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Your CV</li>
      <li>A short statement (maximum 400 words) covering:
        <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
          <li>Why you're interested in Uniti Networks' approach</li>
          <li>Which of the strategic areas above you'd bring most value to</li>
          <li>2 or 3 relevant connections or experiences that would be most useful to us</li>
        </ul>
      </li>
    </ul>
    <p className="text-white/50 text-base mt-4">Applications will remain open until we identify the right candidate, but we encourage you to submit yours sooner rather than later. We aim to respond to all serious inquiries within one week.</p>
  </div>
);

const jobOpenings: JobOpening[] = [
  {
    title: "Behavioral Science Advisor",
    location: "Remote",
    type: "Part-time",
    description: <BehavioralScienceContent />,
  },
  {
    title: "Operations Manager",
    location: "Remote",
    type: "Full-time",
    description: <OperationsManagerContent />,
  },
  {
    title: "Independent Board Member",
    location: "Remote",
    type: "Board",
    description: <IndependentBoardMemberContent />,
  },
  {
    title: "Junior Developer & Data Operations",
    location: "Remote",
    type: "Part-time",
    description: <JuniorDeveloperContent />,
  },
];

const Careers = () => {
  usePageMetadata({
    title: "Careers — Uniti Networks",
    description: "Join the team building digital activation infrastructure for first-time smartphone users across Africa.",
    ogTitle: "Careers at Uniti Networks",
    ogDescription: "Join the team building digital activation infrastructure for first-time smartphone users across Africa.",
    ogUrl: "https://unitinetworks.com/careers",
    twitterTitle: "Careers at Uniti Networks",
    twitterDescription: "Join the team building digital activation infrastructure for first-time smartphone users across Africa.",
  });
  const [openJob, setOpenJob] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

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
                <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenJob(openJob === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white">{job.title}</h3>
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
