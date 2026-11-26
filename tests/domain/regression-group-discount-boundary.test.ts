import { describe, expect, it } from "vitest";
import { groupDiscount } from "../../src/domain/booking";

describe("group discount threshold regression", () => {
  it("awards 10% to exactly 10 tickets as documented", () => {
    expect(groupDiscount(10)).toBe(10);
  });
});
