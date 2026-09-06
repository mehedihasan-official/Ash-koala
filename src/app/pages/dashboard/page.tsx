import DashboardClient from "@/components/DashboardClient";
import DashboardHeader from "@/components/DashboardHeader";
import GuaranteeSection from "@/components/GuaranteeSection";
import RequireAuth from "@/components/RequireAuth";
import Testimonials from "@/components/Testimonials";
import { testimonials } from "@/lib/dashboardContent";
import { Suspense } from "react";

// Server shell. The payouts section reads the selected year from the URL
// (?year=2025) via useSearchParams, which Next requires to sit inside a
// Suspense boundary, so it lives in DashboardClient.
export default function DashboardPage() {
  return (
    <RequireAuth>
      <main className="flex-1">
        <DashboardHeader />

        <Suspense
          fallback={
            <section className="mx-auto max-w-6xl px-6 py-12">
              <p className="text-sm text-ink/40">Loading your payouts…</p>
            </section>
          }
        >
          <DashboardClient />
        </Suspense>

        <GuaranteeSection />

        <Testimonials testimonials={testimonials} />

        <footer className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-ink/50">
            © {new Date().getFullYear()} Koala&rsquo;s Resorts. Independently
            owned and operated.
          </div>
        </footer>
      </main>
    </RequireAuth>
  );
}
