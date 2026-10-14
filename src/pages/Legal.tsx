import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import LegalPage from "@/components/LegalPage";
import { legalCountries } from "@/content/legal";

export default function Legal() {
  return (
    <LegalPage>
      {legalCountries.map(({ country, documents }) => (
        <section key={country} className="mb-10 last:mb-0">
          <h2 className="font-bold text-2xl mb-5">{country}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {documents.map((document) => (
              <Link key={document.path} to={document.path} className="flex items-center justify-between gap-4 rounded border border-border p-6 font-bold no-underline hover:bg-section-alt transition-colors">
                <span>{document.title}</span><ArrowUpRight size={20} className="shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </LegalPage>
  );
}