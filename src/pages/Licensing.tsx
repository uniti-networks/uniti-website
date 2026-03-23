import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroLicensing from "@/assets/hero-licensing.png";

/* ── Color tokens ── */
const C = {
  paris: "#22235b",
  cobalt: "#283b8d",
  gold: "#af9942",
  blush: "#525aa6",
  sky: "#6787c4",
  teal: "#3798a6",
  cream: "#f8f7f3",
  warmWhite: "#fdfcfa",
  white: "#ffffff",
  muted: "#94A3B8",
  bgDark: "#0b0c1f",
  bgGrad: "radial-gradient(ellipse at center, #1e204a 0%, #0b0c1f 70%)"
};

/* ── Reusable label ── */
const GoldLabel = ({ children }: {children: string;}) =>
<p
  className="text-sm font-semibold tracking-[0.15em] uppercase mb-4"
  style={{ fontFamily: "'Europa', 'Inter', sans-serif", color: C.gold }}>
  
    {children}
  </p>;


/* ── Serif heading ── */
const SerifHeading = ({
  children,
  className = ""



}: {children: React.ReactNode;className?: string;}) =>
<h2
  className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-white ${className}`}
  style={{ fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}>
  
    {children}
  </h2>;


/* ── Body text ── */
const Body = ({
  children,
  className = ""



}: {children: React.ReactNode;className?: string;}) =>
<p
  className={`text-base md:text-lg leading-relaxed ${className}`}
  style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.white }}>
  
    {children}
  </p>;


/* ── Ownership pill ── */
const OwnershipPill = ({
  label,
  color



}: {label: string;color: string;}) =>
<span
  className="inline-block rounded-full px-3 py-1 text-xs font-medium text-white mr-2 mb-1"
  style={{ background: color, fontFamily: "'Europa', 'Inter', sans-serif" }}>
  
    {label}
  </span>;


/* ── Deployment stack data ── */
const stackRows = [
{
  num: 1,
  name: "Platform",
  desc: "AI coaching engine, intervention logic library (1,200+ interventions), analytics dashboard, onboarding flows",
  tags: [{ label: "Uniti", color: C.cobalt }]
},
{
  num: 2,
  name: "Content & Localisation",
  desc: "Local language translation, text-to-speech audio, in-app screen guides — approx. 6 weeks per market",
  tags: [
  { label: "Uniti", color: C.cobalt },
  { label: "Partner input", color: C.teal }]

},
{
  num: 3,
  name: "Service Suite",
  desc: "App selection across finance, health, education. Monetisation tiers and pricing defined collaboratively",
  tags: [{ label: "Together", color: C.teal }]
},
{
  num: 4,
  name: "Integrations",
  desc: "Cash and data reward mechanisms, telco API connections, loan management, group savings apps",
  tags: [{ label: "Together", color: C.teal }]
},
{
  num: 5,
  name: "Device",
  desc: "Hardware procurement and financing, soft lock (optional), preinstallation, payment collection",
  tags: [{ label: "Partner", color: C.gold }]
},
{
  num: 6,
  name: "Distribution",
  desc: "Channel strategy — telco, NGO, employer, community. Agent networks and co-marketing",
  tags: [{ label: "Partner", color: C.gold }]
},
{
  num: 7,
  name: "Operations",
  desc: "Field support, reward delivery, user helpdesk, compliance, ongoing partnership management",
  tags: [
  { label: "Partner", color: C.gold },
  { label: "Uniti support", color: C.cobalt }]

}];


/* ── Value items ── */
const youGet = [
{ title: "Exclusive territory rights", desc: "Protected market access" },
{ title: "Proven platform + onboarding", desc: "6-month intensive setup" },
{ title: "75–80% revenue retention", desc: "" },
{
  title: "1,200+ intervention library",
  desc: "Behavioural science and AI coaching"
},
{
  title: "Ongoing platform support",
  desc: "Product updates, quarterly reviews"
}];


const unitiBrings = [
{
  title: "Core technology",
  desc: "AI coaching engine, intervention logic, analytics"
},
{
  title: "Content localisation",
  desc: "Language, audio, screen guides"
},
{
  title: "Behavioural science",
  desc: "3–5 years of field research"
},
{
  title: "Engagement outcomes at 6–8× industry norms",
  desc: "Validated in Ghana with MTN"
},
{
  title: "Partner ecosystem",
  desc: "App developers, MNOs, device financers, development organisations"
}];


/* ── Partner profile cards ── */
const partnerCards = [
{
  title: "Investment capacity",
  desc: "Ability to fund device procurement, field operations, and a 6–12 month ramp to revenue."
},
{
  title: "In-country infrastructure",
  desc: "Existing distribution channels, warehousing, or retail presence in target markets."
},
{
  title: "Operational capability",
  desc: "A team that can manage field agents, support users, and maintain partner relationships."
},
{
  title: "Mission alignment",
  desc: "A genuine commitment to digital inclusion — not just market share."
}];


/* ── Stats ── */
const stats = [
{ value: "MTN Ghana", label: "MOU signed, 1M-user pathway" },
{ value: "6", label: "Committed app partners across finance, health & education" },
{ value: "6–8×", label: "Industry engagement norms" },
{ value: "5", label: "Markets in active conversation" }];


const Licensing = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* ─── 1. Hero ─── */}
        <section
          className="relative overflow-hidden min-h-[80vh] flex items-center"
          style={{ background: C.bgDark }}>
          
          <img
            src={heroLicensing}
            alt="Busy market street with mobile commerce — emerging market infrastructure"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, hsla(239,46%,8%,0.72) 0%, hsla(239,46%,12%,0.65) 100%)",
            }}
          />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40">
            <GoldLabel>Licensing the Uniti Platform</GoldLabel>
             <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] mb-8"
              style={{
                fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
                letterSpacing: "-0.02em",
                maxWidth: "720px"
              }}>
              
               <span style={{ color: C.white }}>We built the activation stack.</span>
               <br />
               <span style={{ color: C.muted }}>You own the market.</span>
             </h1>
            <Body className="max-w-xl">
              Uniti licenses its digital activation platform to operators,
              organisations, and implementers who want to turn first-time
              smartphone users into productive digital citizens — in their
              market, on their terms.
            </Body>
          </div>
        </section>

        {/* ─── 2. Philosophy ─── */}
        <section style={{ background: C.bgGrad }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
            <GoldLabel>Our Approach</GoldLabel>
            <SerifHeading>
               <span style={{ color: C.white }}>Local partners. Local ownership.</span>
               <br className="hidden md:block" />
               <span style={{ color: C.muted }}>That's the architecture.</span>
             </SerifHeading>
            <div className="max-w-3xl space-y-6 mb-16">
              <Body>
                Digital activation doesn't scale from a headquarters thousands
                of miles away. It scales when local operators — people who know
                the distribution channels, the languages, the community dynamics
                — have real ownership of the deployment. Uniti provides the
                technology, the behavioural science, and the coaching
                intelligence. Everything else is built with and owned by
                partners on the ground.
              </Body>
              <Body>
                This isn't outsourcing. It's a conviction that the organisations
                closest to users are the ones best positioned to serve them.
                We've designed a model where capital stays local, jobs are
                created in-country, and the pace of deployment is set by the
                people who understand the ecosystem — not by us.
              </Body>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
              {
                title: "Capital stays local",
                text: "License holders retain 75–80% of revenue from their territory. Profits are reinvested where they're generated."
              },
              {
                title: "Jobs created in-country",
                text: "Every deployment builds a local team — field agents, support staff, partnership managers — not a remote headcount in another continent."
              },
              {
                title: "Adapted to the ecosystem",
                text: "Content, language, service partners, and distribution are all shaped by local knowledge. The platform flexes. The market leads."
              }].
              map((card) =>
              <div
                key={card.title}
                className="p-6 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderLeft: `3px solid ${C.gold}`
                }}>
                
                   <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.muted }}>
                  
                     {card.title}
                   </h3>
                   <Body>{card.text}</Body>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── 3. Deployment Stack ─── */}
        <section style={{ background: C.bgDark }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
            <GoldLabel>How a Deployment Works</GoldLabel>
            <SerifHeading>
               <span style={{ color: C.white }}>Seven components.</span>{" "}
               <span style={{ color: C.muted }}>Clear ownership.</span>
             </SerifHeading>
             <Body className="max-w-3xl mb-10">
               Activation isn't a single product — it's a stack. Seven components
              have to work in concert for a first-time smartphone user to become
              a productive digital citizen. Most programmes get distribution
              right. Uniti was built to orchestrate the rest.
            </Body>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: C.cobalt }} />
                <span className="text-sm" style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.muted }}>
                  Uniti delivers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: C.teal }} />
                <span className="text-sm" style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.muted }}>
                  Designed together
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: C.gold }} />
                <span className="text-sm" style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.muted }}>
                  Partner delivers
                </span>
              </div>
            </div>

            {/* Stack rows */}
            <div className="space-y-0">
              {stackRows.map((row) =>
              <div
                key={row.num}
                className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_10rem_1fr_auto] items-start md:items-center gap-x-4 py-5 transition-colors duration-200"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                
                  <span
                  className="text-2xl font-light"
                  style={{
                    fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
                    color: C.gold
                  }}>
                  
                    {row.num}
                  </span>
                  <h3
                  className="text-base font-semibold col-span-1 md:col-span-1 text-white"
                  style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif" }}>
                  
                    {row.name}
                  </h3>
                   <p
                  className="hidden md:block text-base"
                  style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.white }}>
                  
                    {row.desc}
                  </p>
                  <div className="col-span-2 md:col-span-1 mt-2 md:mt-0 flex flex-wrap">
                    {row.tags.map((t) =>
                  <OwnershipPill key={t.label} label={t.label} color={t.color} />
                  )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── 4. Value Split ─── */}
        <section style={{ background: C.bgGrad }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
            <GoldLabel>The Partnership</GoldLabel>
            <SerifHeading>Clear roles. Shared outcomes.</SerifHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              {/* Left */}
              <div>
                <h3
                  className="text-xl font-semibold pb-3 mb-8 text-white"
                  style={{
                    fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif",
                    borderBottom: `2px solid ${C.gold}`
                  }}>Your market


                </h3>
                <div className="space-y-6">
                  {youGet.map((item) =>
                  <div key={item.title}>
                       <p
                      className="text-base font-semibold"
                      style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.muted }}>
                      
                         {item.title}
                       </p>
                       {item.desc &&
                    <p
                      className="text-base mt-1"
                      style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.white }}>
                      
                           {item.desc}
                         </p>
                    }
                     </div>
                  )}
                 </div>
               </div>
               {/* Right */}
               <div>
                 <h3
                  className="text-xl font-semibold pb-3 mb-8 text-white"
                  style={{
                    fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif",
                    borderBottom: `2px solid ${C.gold}`
                  }}>Our engine


                </h3>
                 <div className="space-y-6">
                   {unitiBrings.map((item) =>
                  <div key={item.title}>
                       <p
                      className="text-base font-semibold"
                      style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.muted }}>
                      
                         {item.title}
                       </p>
                       {item.desc &&
                    <p
                      className="text-base mt-1"
                      style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.white }}>
                      
                           {item.desc}
                         </p>
                    }
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. Partner Profile ─── */}
        <section style={{ background: C.bgDark }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
            <GoldLabel>Who We Work With</GoldLabel>
            <SerifHeading>Ideal licensing partner</SerifHeading>
            <Body className="max-w-3xl mb-12">
              We're looking for organisations that have the infrastructure,
              capital, and conviction to deploy digital activation in their
              market.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerCards.map((card) =>
              <div
                key={card.title}
                className="p-6 rounded-lg transition-colors duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}>
                
                   <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.muted }}>
                  
                     {card.title}
                   </h3>
                   <Body>{card.desc}</Body>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── 6. Proof — Ghana ─── */}
        <section style={{ background: C.bgGrad }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
            <GoldLabel>Live Deployment</GoldLabel>
            <SerifHeading>
              Ghana: the reference model
            </SerifHeading>
            <Body className="max-w-3xl mb-14">
              Ghana is proof-of-concept for the licensing model. Uniti operates
              Ghana directly — all future markets are licensed. The deployment
              validates unit economics, the app partner model, distribution
              strategy, and support at scale.
            </Body>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) =>
              <div key={s.value}>
                  <p
                  className="text-3xl md:text-4xl mb-2"
                  style={{
                    fontFamily: "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
                    color: C.gold
                  }}>
                  
                    {s.value}
                  </p>
                   <p
                  className="text-sm leading-snug"
                  style={{
                    fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif",
                    color: C.white
                  }}>
                  
                    {s.label}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── 7. CTA ─── */}
        <section style={{ background: C.bgDark }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 text-center">
            <SerifHeading>Let's build your stack</SerifHeading>
            <Body className="max-w-2xl mx-auto mb-8">
              Every market is different. The conversation starts with
              understanding your ecosystem — who the users are, what
              distribution looks like, and which services matter most.
            </Body>
             <p
              className="text-base"
              style={{ fontFamily: "'Euclid Circular A', 'Europa', 'Inter', sans-serif", color: C.white }}>
              
              For inquiries, write to us at{" "}
              <a
                href="mailto:licensing@unitinetworks.com"
                className="font-bold transition-opacity duration-200 hover:opacity-80"
                style={{ color: C.sky }}>
                
                licensing@unitinetworks.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};

export default Licensing;