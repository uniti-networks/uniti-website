import { ArrowUpRight } from "lucide-react";
import { INVESTOR_DECK_URL } from "@/lib/links";

const InvestorCallout = () => (
  <section className="bg-brand-cream px-6 py-16 md:px-12 lg:px-20">
    <div className="container-wide flex flex-col justify-between gap-8 md:flex-row md:items-center">
      <p className="max-w-3xl text-3xl font-extrabold leading-tight text-brand-paris md:text-4xl">
        If you’re interested in joining our current raise, click here to learn more.
      </p>
      <a href={INVESTOR_DECK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-paris px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-brand-blush">
        View investor deck <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  </section>
);

export default InvestorCallout;