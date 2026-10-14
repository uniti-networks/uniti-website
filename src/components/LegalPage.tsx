import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageMetadata } from "@/hooks/use-page-metadata";
import type { LegalDocument } from "@/content/legal/types";

interface LegalPageProps {
  document?: LegalDocument;
  children?: ReactNode;
}

export default function LegalPage({ document, children }: LegalPageProps) {
  const title = document?.title ?? "Legal";
  const description = document?.description ?? "Terms and privacy policies for Uniti-powered programmes, by country.";
  usePageMetadata({
    title: `${title}${document ? ` — ${document.country}` : ""} | Uniti Networks`,
    description,
    ogTitle: `${title}${document ? ` — ${document.country}` : ""} | Uniti Networks`,
    ogDescription: description,
    ogUrl: `https://unitinetworks.com${document?.path ?? "/legal"}`,
  });

  return (
    <div className="legal-page min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <header className="legal-hero px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[760px]">
            <h1 className="text-primary-foreground text-4xl md:text-5xl font-extrabold leading-tight">{title}</h1>
            {document ? <>
              <p className="mt-4 text-primary-foreground text-base">{document.country}</p>
              <p className="mt-2 text-primary-foreground/70 text-base">Last updated: {document.lastUpdated}</p>
            </> : <p className="mt-4 text-primary-foreground/80 text-base">{description}</p>}
          </div>
        </header>
        <div className="legal-body mx-auto max-w-[808px] px-6 py-12 md:py-16">
          {document ? <>
            <nav aria-label="Table of contents" className="border-b border-border pb-8 mb-8">
              <h2 className="font-bold text-2xl mb-4">Contents</h2>
              <ol className="space-y-2">
                {document.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>)}
              </ol>
            </nav>
            <p className="mb-10">{document.intro}</p>
            {document.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 mb-10 last:mb-0">
                <h2 className="font-bold text-2xl leading-snug mb-4">{section.heading}</h2>
                {section.content}
              </section>
            ))}
          </> : children}
        </div>
      </main>
      <Footer />
    </div>
  );
}