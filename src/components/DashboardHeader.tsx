"use client";

import { signOut } from "next-auth/react";

export default function DashboardHeader({ name }: { name?: string | null }) {
  return (
    <header className="border-b border-line bg-sand-light">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div>
          <p className="font-display italic text-lg text-teal-dark">Ash&rsquo;s Resorts</p>
          <p className="text-xs text-ink/45">Owner dashboard</p>
        </div>
        <div className="flex items-center gap-4">
          {name && <span className="text-sm text-ink/60 hidden sm:inline">Hi, {name}</span>}
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink/70 hover:bg-sand transition"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
