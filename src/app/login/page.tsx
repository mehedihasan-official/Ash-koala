"use client";

import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="absulate">
      <button
        type="button"
        onClick={() => router.back()}
        className="relative top-10 left-4 mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 text-sm font-medium text-ink transition hover:bg-sand-light active:scale-[0.98]"
      >
        <span aria-hidden="true">←</span>
      </button>

      <div className="min-h-screen flex items-center justify-center ">
        <div className="w-full max-w-sm sm:max-w-md">

          <div className="rounded-2xl border border-line bg-sand-light p-5 sm:p-8 shadow-sm">
            <h1 className="font-display text-2xl text-teal-dark mb-1">
              Owner sign in
            </h1>
            <p className="text-sm text-ink/60 mb-6">
              Access your resort listings and rental income.
            </p>
            <Suspense fallback={null}>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
