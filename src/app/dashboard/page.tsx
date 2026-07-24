import DashboardHeader from "@/components/DashboardHeader";
import ResortStub from "@/components/ResortStub";
import Testimonials from "@/components/Testimonials";
import GuaranteeSection from "@/components/GuaranteeSection";
import { resorts, testimonials } from "@/lib/dashboardContent";
import { formatCents } from "@/lib/types";

export default function DashboardPage() {
  // Flatten resort + booking pairs so each booking renders as its own card,
  // same as the "All Listings (9)" style summary Ash referenced.
  const allBookings = resorts.flatMap((resort) =>
    resort.bookings.map((booking) => ({ resort, booking }))
  );

  const totalPayoutCents = allBookings.reduce(
    (sum, { booking }) => sum + booking.payoutCents,
    0
  );

  return (
    <main className="flex-1">
      <DashboardHeader />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-sm font-semibold tracking-[0.14em] uppercase text-clay-dark mb-2">
          Your resorts
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <h1 className="font-display text-4xl text-teal-dark">
            All Listings ({allBookings.length})
          </h1>
          <div className="text-right">
            <p className="text-sm text-ink/50">Total payouts</p>
            <p className="font-display text-3xl text-gold">
              {formatCents(totalPayoutCents)}
            </p>
          </div>
        </div>

        {allBookings.length === 0 ? (
          <p className="text-ink/50 italic">
            No resorts added yet. Once photos and details come in, they&rsquo;ll show up here.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allBookings.map(({ resort, booking }) => (
              <ResortStub key={booking.id} resort={resort} booking={booking} />
            ))}
          </div>
        )}
      </section>

      <GuaranteeSection />

      <Testimonials testimonials={testimonials} />

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-ink/50">
          © {new Date().getFullYear()} Ash&rsquo;s Resorts. Independently owned and operated.
        </div>
      </footer>
    </main>
  );
}
