import kenyaPrivacy from "./kenya-privacy";
import kenyaTerms from "./kenya-terms";
import type { LegalDocument } from "./types";

export const legalCountries: { country: string; documents: LegalDocument[] }[] = [
  { country: "Kenya", documents: [kenyaPrivacy, kenyaTerms] },
];