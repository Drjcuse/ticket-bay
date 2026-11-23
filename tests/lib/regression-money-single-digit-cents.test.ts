import { describe, expect, it } from "vitest";
import { money } from "@/lib/format";

// Reported: 3 tickets at €45.00 showed a €4.50 fee and "Pay €139.50" at checkout,
// but the card was charged €139.05. The charge was right (3% of €135 = €4.05);
// the display put the single cent digit in the tens place.
describe("money() with fewer than 10 cents", () => {
  it("shows 405 cents as €4.05, not €4.50", () => {
    expect(money(405)).toBe("€4.05");
  });

  it("shows 13905 cents as €139.05, not €139.50", () => {
    expect(money(13905)).toBe("€139.05");
  });

  it("shows 1 cent as €0.01 and a negative 7 cents as −€0.07", () => {
    expect(money(1)).toBe("€0.01");
    expect(money(-7)).toBe("−€0.07");
  });
});
