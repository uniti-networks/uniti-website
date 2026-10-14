import type { ReactNode } from "react";

export interface LegalSection {
  id: string;
  heading: string;
  content: ReactNode;
}

export interface LegalDocument {
  title: string;
  country: string;
  path: string;
  description: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}