const rows = [
  { feature: "Easy Online Booking", included: true },
  { feature: "90 Day Rental Guarantee", included: true },
  { feature: "Verified & Protected Listing Badge", included: true },
  { feature: "Pricing review & guidance", included: true },
  { feature: "Professional inquiry management", included: true },
  { feature: "Dedicated phone support", included: true },
];

export default function GuaranteeSection() {
  return (
    <section className="border-y border-line bg-teal-dark">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-body text-sm font-semibold tracking-[0.18em] uppercase text-gold mb-3">
          Full-Service · 90-Day Rental Guarantee
        </p>
        <h2 className="font-display text-3xl text-sand-light mb-2">
          FULL-SERVICE · ZERO COST TO YOU
        </h2>
        <p className="text-sand-light/60 mb-10 max-w-xl">
          We handle everything — listing, marketing, booking, guest communication. For Holiday Inn Club Vacations Owners, we guarantee your points rent within 90 days. Zero risk, zero cost upfront — we take 8% ONLY AFTER YOU GET PAID.
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
