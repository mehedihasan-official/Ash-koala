const rows = [
  { feature: "Listing verified before it goes live", included: true },
  { feature: "Direct communication with the owner", included: true },
  { feature: "Full refund if the resort cancels your stay", included: true },
  { feature: "Booking confirmation held in escrow until check-in", included: true },
  { feature: "No hidden service or booking fees", included: true },
];

export default function GuaranteeSection() {
  return (
    <section className="border-y border-line bg-teal-dark">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-body text-sm font-semibold tracking-[0.18em] uppercase text-gold mb-3">
          The guarantee
        </p>
        <h2 className="font-display text-3xl text-sand-light mb-2">
          Booked with confidence, every time
        </h2>
        <p className="text-sand-light/60 mb-10 max-w-xl">
          Every stay booked through Ash comes with the same protections —
          no exceptions, no fine print.
        </p>

        <div className="rounded-2xl bg-sand-light/5 border border-sand-light/15 divide-y divide-sand-light/10 overflow-hidden">
          {rows.map((row) => (
            <div
              key={row.feature}
              className="flex items-center justify-between px-6 py-4"
            >
              <span className="text-sand-light/85 text-sm sm:text-base">
                {row.feature}
              </span>
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/90 text-teal-dark text-sm font-bold shrink-0 ml-4"
                aria-label="Included"
              >
                ✓
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
