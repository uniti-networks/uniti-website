import { customerEconomics as e } from "@/content/customer-economics";

const stages = ["Download", "Registration", "First use", "Adoption", "Engagement", "Retention", "Advocacy"];

const CustomerEconomicsSection = () => (
  <section id="why-it-pays" className="bg-primary-foreground px-6 py-20 md:px-12 md:py-28 lg:px-20">
    <div className="container-wide">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">Why it pays</p>
      <h2 className="max-w-5xl text-4xl font-extrabold leading-[1] text-brand-paris md:text-6xl">
        Acquisition buys the download. Shared activation buys the engaged user.
      </h2>

      <div className="mt-14 grid gap-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brand-paris/20 bg-brand-paris/20 md:hidden">
          <div className="bg-brand-paper p-5"><p className="text-4xl font-extrabold text-brand-paris">{e.engagementMultiplier.min}–{e.engagementMultiplier.max}×</p><p className="mt-2 text-base text-foreground">more engaged users</p></div>
          <div className="bg-brand-paper p-5"><p className="text-4xl font-extrabold text-brand-paris">${e.costPerEngagedUserUsd}</p><p className="mt-2 text-base text-foreground">per engaged user on your own</p></div>
        </div>
        <figure className="hidden md:block">
          <svg viewBox="0 0 960 430" className="w-full" role="img" aria-label="Illustrative funnel showing more users remain engaged with shared activation than on their own">
            <rect x="620" y="35" width="210" height="315" className="fill-brand-cream/45" />
            <text x="725" y="62" textAnchor="middle" className="fill-brand-gold text-[13px] font-bold tracking-[0.12em]">WHERE LIFETIME VALUE IS BUILT</text>
            <line x1="40" y1="350" x2="850" y2="350" className="stroke-brand-paris/20" />
            <rect x="66" y="80" width="10" height="270" className="fill-brand-orange" />
            <path d="M70 80 C190 175 270 225 420 270 C500 295 560 308 620 318 L620 350 L70 350Z" className="fill-brand-blush/20" />
            <path d="M70 80 C130 260 180 302 250 318 C360 340 520 343 620 345" fill="none" className="stroke-muted-foreground" strokeWidth="2" />
            <path d="M70 80 C190 175 270 225 420 270 C520 300 640 318 830 316" fill="none" className="stroke-brand-paris" strokeWidth="4" />
            <line x1="636" y1="318" x2="636" y2="345" className="stroke-brand-paris" strokeWidth="2" />
            <text x="650" y="282" className="fill-brand-paris text-[38px] font-extrabold">{e.engagementMultiplier.min}–{e.engagementMultiplier.max}×</text>
            <text x="650" y="304" className="fill-brand-paris text-[13px]">more engaged users</text>
            <text x="250" y="232" className="fill-brand-paris text-[18px] font-bold">Shared activation cost</text>
            <text x="250" y="255" className="fill-foreground text-[13px]">Coaching, rewards and goal matching</text>
            <text x="838" y="320" className="fill-brand-paris text-[13px] font-bold">With Uniti</text>
            <text x="838" y="350" className="fill-muted-foreground text-[13px]">On your own</text>
            {stages.map((s, i) => (
              <text key={s} x={[70, 205, 340, 475, 620, 735, 830][i]} y="382" textAnchor="middle" className={`text-[13px] ${s === "Engagement" || s === "Download" ? "fill-brand-paris font-bold" : "fill-foreground"}`}>{s}</text>
            ))}
          </svg>
        </figure>
        <div className="border-l border-brand-paris/20 pl-6">
          <p className="text-base font-bold text-brand-paris">What providers pay for today</p>
          <p className="mt-2 text-base text-foreground">Agents, referral fees, ads, search, radio and events.</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-3 border-y border-brand-paris/20 py-6 text-center">
        {["Finance", "Health", "Work"].map((service) => <div key={service} className="border-r border-brand-paris/20 last:border-r-0"><p className="text-base font-semibold text-brand-paris">{service}</p><p className="mt-2 text-sm text-muted-foreground">Shared investment</p></div>)}
      </div>
      <p className="mt-4 text-center text-base font-semibold text-brand-teal">One shared activation layer. Value across services.</p>

      <div className="mt-12 grid gap-8 rounded-2xl bg-brand-paris p-8 text-primary-foreground md:grid-cols-[0.8fr_1.2fr] md:p-12">
        <h3 className="text-3xl font-extrabold leading-tight text-primary-foreground">One activation, many paying services.</h3>
        <p className="text-base leading-relaxed text-primary-foreground/80">
          Activating a user costs more than ${e.activationCostFloorUsd}. No single provider can justify that alone. Uniti shares that cost across {e.serviceCategoriesFloor}+ monetizable service categories, led by finance, then health and work.
        </p>
      </div>
      <p className="mt-5 text-sm text-muted-foreground">
        Illustrative. Typical funnel: about {e.lostBeforeRegistrationPercent}% lost before registration, about {e.engagementPercent}% reach engagement, about {e.retainedPercent}% of those retained. At ${e.costPerDownloadUsd} per download, that is about ${e.costPerEngagedUserUsd} per engaged user.
      </p>
    </div>
  </section>
);

export default CustomerEconomicsSection;