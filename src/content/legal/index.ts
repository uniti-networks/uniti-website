import kenyaPrivacy from "./kenya-privacy";
import kenyaTerms from "./kenya-terms";
import ghanaPrivacy from "./ghana-privacy";
import ghanaTerms from "./ghana-terms";
import type { LegalDocument } from "./types";

export const legalCountries: { country: string; documents: LegalDocument[] }[] = [
  { country: "Ghana", documents: [ghanaPrivacy, ghanaTerms] },
  { country: "Kenya", documents: [kenyaPrivacy, kenyaTerms] },
];