import { describe, it, expect } from "vitest";
import { buildInvoice } from "../../src/domain/invoice";

const NOW = 1_700_000_000_000;
const DAY = 86_400_000;
const event = {
  id: "e1", name: "Midnight Arcade — Neon Tour", totalSeats: 100, seatsSold: 0,
  priceCents: 4_003, startMs: NOW + 5 * DAY,
};

describe("ten-ticket group discount regression", () => {
  it("applies the documented 10% tier to exactly ten tickets", () => {
    const invoice = buildInvoice(event, 10, NOW);
    expect(invoice.groupPercent).toBe(10);
    expect(invoice.discountPercent).toBe(10);
    expect(invoice.discountCents).toBe(4_003);
  });
});
