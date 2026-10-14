import { describe, expect, it } from "vitest";
import { isLegalDraft } from "@/content/legal/types";
import { legalCountries } from "@/content/legal";

describe("legal draft status", () => {
  it("enables draft treatment for draft documents", () => {
    expect(isLegalDraft({ status: "draft" })).toBe(true);
  });
  it("disables draft treatment for final documents", () => {
    expect(isLegalDraft({ status: "final" })).toBe(false);
  });
  it("does not apply draft treatment to the hub", () => {
    expect(isLegalDraft()).toBe(false);
  });
  it.each(["/privacy/ghana", "/terms/ghana", "/privacy/kenya", "/terms/kenya"])("keeps %s in draft", (path) => {
    const document = legalCountries.flatMap(country => country.documents).find(document => document.path === path);
    expect(document?.status).toBe("draft");
  });
  it("lists Ghana before Kenya", () => {
    expect(legalCountries.map(group => group.country)).toEqual(["Ghana", "Kenya"]);
  });
});