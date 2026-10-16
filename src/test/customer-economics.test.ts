import { describe, expect, it } from "vitest";
import { customerEconomics as economics } from "../content/customer-economics";
import { INVESTOR_DECK_URL, DEMO_VIDEO_ID } from "../lib/links";

describe("Supplied customer economics", () => {
  it("keeps the illustrative engagement multiplier at 6–8", () => {
    expect(economics.engagementMultiplier).toEqual({ min: 6, max: 8 });
  });
  it("keeps the activation cost threshold at $100", () => {
    expect(economics.activationCostFloorUsd).toBe(100);
  });
  it("keeps the category threshold at 10", () => {
    expect(economics.serviceCategoriesFloor).toBe(10);
  });
  it("keeps the pre-registration loss at 80 percent", () => {
    expect(economics.lostBeforeRegistrationPercent).toBe(80);
  });
  it("keeps engagement at 5 percent", () => {
    expect(economics.engagementPercent).toBe(5);
  });
  it("keeps retention at 80 percent", () => {
    expect(economics.retainedPercent).toBe(80);
  });
  it("keeps $1 downloads and $20 engaged users consistent", () => {
    expect(economics.costPerDownloadUsd).toBe(1);
    expect(economics.costPerEngagedUserUsd).toBe(20);
    expect(economics.costPerDownloadUsd / (economics.engagementPercent / 100)).toBe(economics.costPerEngagedUserUsd);
  });
  it("opens the supplied investor deck", () => {
    expect(INVESTOR_DECK_URL).toBe("https://deck.unitinetworks.com");
  });
  it("uses the supplied product demo", () => {
    expect(DEMO_VIDEO_ID).toBe("1zDzCSEeJbzqqFnSEQx6sZZPlFP6weEK7");
  });
});