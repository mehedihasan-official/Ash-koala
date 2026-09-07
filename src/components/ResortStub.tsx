import Image from "next/image";
import type { Resort, Booking } from "@/lib/types";
import { formatCents } from "@/lib/types";

// Status pills sit on top of the resort photo, so each one is a solid fill
// rather than a translucent tint — a 10%-opacity chip disappears against a
// bright pool or sky. "Paid" uses the evergreen-tree green Ash asked for
// (--color-pine in globals.css); the other two keep their palette colours in
// the same solid treatment so the set reads as one family.
const statusStyles: Record<Booking["status"], string> = {
  Paid: "bg-gray-100 text-green-500 ring-pine-dark/40",
  Pending: "bg-gold text-white ring-gold/50",
  Expired: "bg-ink/55 text-white ring-ink/30",
};

// One card per booking — matches the reference screenshots where each
// reservation (Ref ID, dates, payout) gets its own full block, even when
// two bookings belong to the same resort.
export default function ResortStub({
  resort,
  booking,
}: {
  resort: Resort;
  booking: Booking;
}) {
  return (
    <div className="rounded-2xl border border-line bg-sand-light overflow-hidden shadow-sm">
      <div className="relative h-44 bg-teal-dark">
        <Image
          fill
          src={resort.image}
          alt={resort.name}
          sizes="(max-width: 640px) 100vw, 380px"
          className="object-cover"
        />
        <span
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusStyles[booking.status]}`}
        >
          {booking.status}
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs font-mono text-ink/45 mb-2">Ref {booking.id}</p>

        <h3 className="font-display text-xl text-teal-dark mb-1">{resort.name}</h3>
        <p className="text-sm text-ink/60 mb-4">
          {resort.unitType}
          {resort.location ? ` · ${resort.location}` : ""}
        </p>

        <div className="stub-edge mb-4" />

        <div className="flex items-center justify-between text-sm mb-1">
          <span className="text-ink/50">Dates</span>
          <span className="font-medium text-ink/80">{booking.dateRange}</span>
        </div>

        <div className="flex items-baseline justify-between mt-3">
          <span className="text-sm text-ink/50">Payout</span>
          <span className="font-display text-2xl text-gold">
            {formatCents(booking.payoutCents)}
          </span>
        </div>
      </div>
    </div>
  );
}
