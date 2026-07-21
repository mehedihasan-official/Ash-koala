import { Suspense } from "react";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="font-display text-2xl font-semibold text-ink mb-8 inline-block"
        >
          Ash&rsquo;s<span className="text-clay">.</span>
        </Link>

        <div className="rounded-2xl border border-line bg-sand-light p-8 shadow-sm">
          <h1 className="font-display text-2xl text-teal-dark mb-1">Owner sign in</h1>
          <p className="text-sm text-ink/60 mb-6">
            Access your resort listings and rental income.
          </p>
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
