"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

export default function DashboardHeader() {
  const router = useRouter();
  const { user, signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
    router.push("/");
  }

  return (
    <header className="border-b border-line bg-sand-light">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-display italic text-lg text-teal-dark">Ash&rsquo;s Resorts</p>
          <p className="text-xs text-ink/45">
            {user?.email ?? "Owner dashboard"}
          </p>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink/70 hover:bg-sand transition"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
