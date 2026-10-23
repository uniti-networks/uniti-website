import { ArrowUpRight } from "lucide-react";
import { DEMO_EMBED_URL, DEMO_VIEW_URL } from "@/lib/links";

const steps = ["Set a goal", "Get guided", "Use a service", "Earn rewards"];

const DemoSection = () => (
  <section id="demo" className="scroll-mt-16 bg-brand-paper px-6 py-20 md:px-12 md:py-28 lg:px-20">
    <div className="container-wide grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">See it work</p>
        <h2 className="text-4xl font-extrabold leading-[1] text-brand-paris md:text-6xl">
          From first phone to first useful outcome.
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground">
          Uniti turns a new smartphone into a guided path. Users choose what matters to them, then learn, act and earn in small steps.
        </p>
        <ol className="mt-10 grid grid-cols-2 border-t border-brand-paris/20">
          {steps.map((step, i) => (
            <li key={step} className="border-b border-brand-paris/20 py-4 pr-4 text-base font-semibold text-brand-paris">
              <span className="mr-3 font-mono text-xs text-brand-gold">0{i + 1}</span>{step}
            </li>
          ))}
        </ol>
      </div>
      <div>
        <div className="overflow-hidden rounded-2xl border border-brand-paris/20 bg-brand-ink">
          <div className="aspect-video">
            <iframe
              src={DEMO_EMBED_URL}
              title="Uniti product demo"
              className="h-full w-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <a href={DEMO_VIEW_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-accent underline underline-offset-4">
          Open the demo in a new tab <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

export default DemoSection;