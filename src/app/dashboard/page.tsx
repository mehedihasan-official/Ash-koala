import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import PropertyModel from "@/models/Property";
import TestimonialModel from "@/models/Testimonial";
import DashboardHeader from "@/components/DashboardHeader";
import ResortStub from "@/components/ResortStub";
import Testimonials from "@/components/Testimonials";
import GuaranteeSection from "@/components/GuaranteeSection";
import { formatCents, type Property, type Testimonial } from "@/lib/types";

// Middleware already redirects unauthenticated visitors, but this page also
// checks directly — defense in depth if the page is ever reached another way.
export default async function DashboardPage() {
  const session = await auth();

  let properties: Property[] = [];
  let testimonials: Testimonial[] = [];

  try {
    await connectDB();
    const [propertiesRaw, testimonialsRaw] = await Promise.all([
      PropertyModel.find().sort({ order: 1 }).lean(),
      TestimonialModel.find().sort({ order: 1 }).lean(),
    ]);

    properties = JSON.parse(JSON.stringify(propertiesRaw)) as Property[];
    testimonials = JSON.parse(JSON.stringify(testimonialsRaw)) as Testimonial[];
  } catch {
    properties = [];
    testimonials = [];
  }

  const totalIncome = properties.reduce(
    (sum, p) => sum + p.payouts.filter((pay) => pay.status === "paid").reduce((s, pay) => s + pay.amount, 0),
    0
  );

  return (
    <main className="flex-1">
      <DashboardHeader name={session?.user?.name} />

      {/* Income summary */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-sm font-semibold tracking-[0.14em] uppercase text-clay-dark mb-2">
          Your resorts
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <h1 className="font-display text-4xl text-teal-dark">
            {properties.length} propert{properties.length === 1 ? "y" : "ies"} earning for you
          </h1>
          <div className="text-right">
            <p className="text-sm text-ink/50">Total income to date</p>
            <p className="font-display text-3xl text-gold">{formatCents(totalIncome)}</p>
          </div>
        </div>

        {properties.length === 0 ? (
          <p className="text-ink/50 italic">
            No resorts added yet. Once photos and details come in, they&rsquo;ll show up here.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <ResortStub key={property._id} property={property} />
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
