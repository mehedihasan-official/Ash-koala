import type { Property } from "@/lib/types";
import { formatCents } from "@/lib/types";
import Image from "next/image";

const statusStyles: Record<string, string> = {
  paid: "bg-teal/10 text-teal-dark",
  pending: "bg-gold/20 text-gold",
  upcoming: "bg-ink/5 text-ink/50",
};

export default function ResortStub({ property }: { property: Property }) {
  const totalEarned = property.payouts
    .filter((p) => p.status === "paid")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="rounded-2xl border border-line bg-sand-light overflow-hidden shadow-sm">
      {/* Image / header */}
      <div className="relative h-40 bg-teal-dark">
        {property.images[0] ? (
          <Image
            fill
            src={property.images[0]}
            alt={property.name}
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="font-display italic text-sand-light/40 text-sm">
              Photo pending
            </span>
          </div>
        )}
        {!property.active && (
          <span className="absolute top-3 right-3 rounded-full bg-ink/70 px-3 py-1 text-xs text-sand-light">
            Inactive
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-clay-dark mb-1">
          {property.brand || "Resort"}
        </p>
        <h3 className="font-display text-xl text-teal-dark mb-1">
          {property.name}
        </h3>
        <p className="text-sm text-ink/60 mb-4">
          {property.location}
          {property.unitType ? ` · ${property.unitType}` : ""}
        </p>

        <div className="flex items-baseline justify-between mb-5">
          <span className="text-sm text-ink/50">Total earned</span>
          <span className="font-display text-2xl text-gold">
            {formatCents(totalEarned)}
          </span>
        </div>

        {/* Perforated divider — the stub tear line */}
        <div className="stub-edge mb-5" />

        <ul className="flex flex-col gap-3">
          {property.payouts.length === 0 && (
            <li className="text-sm text-ink/40 italic">
              No payouts recorded yet.
            </li>
          )}
          {property.payouts.map((payout) => (
            <li
              key={`${payout.label}-${payout.date}`}
              className="flex items-center justify-between text-sm"
            >
              <div>
                <p className="font-medium text-ink/80">{payout.label}</p>
                <p className="text-ink/45 text-xs">
                  {payout.guestNights} night
                  {payout.guestNights === 1 ? "" : "s"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                    statusStyles[payout.status] ?? statusStyles.upcoming
                  }`}
                >
                  {payout.status}
                </span>
                <span className="font-medium text-ink/80 w-16 text-right">
                  {formatCents(payout.amount)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
