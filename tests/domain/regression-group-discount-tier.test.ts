import { describe, it, expect } from "vitest";
import { buildInvoice } from "../../src/domain/invoice";

const NOW = 1_700_000_000_000;
const ev = { id: "e1", name: "Midnight Arcade — Neon Tour", totalSeats: 20, seatsSold: 0, priceCents: 4_400, startMs: NOW + 5 * 86_400_000 };

describe("group discount tiers regression", () => {
  it("applies the 10% tier to exactly ten tickets", () => {
    const invoice = buildInvoice(ev, 10, NOW);
    expect(invoice.groupPercent).toBe(10);
    expect(invoice.discountPercent).toBe(10);
    expect(invoice.discountCents).toBe(4_400);
  });
});
