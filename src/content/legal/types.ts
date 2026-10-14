import type { ReactNode } from "react";

export interface LegalSection {
  id: string;
  heading: string;
  content: ReactNode;
}

export interface LegalDocument {
  status: "draft" | "final";
  title: string;
  country: string;
  path: string;
  description: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}

export const isLegalDraft = (document?: Pick<LegalDocument, "status">) => document?.status === "draft";