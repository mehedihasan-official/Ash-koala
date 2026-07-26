"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Gates a page behind Firebase auth. Firebase Auth state lives in the
// browser (IndexedDB), not in a server-readable cookie by default, so this
// check runs client-side rather than in Next.js middleware. While Firebase
// is still reporting back on first load, we show a lightweight loading
// state instead of flashing the protected content or bouncing straight to
// /login (which would misfire for users who are actually signed in).
export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      const loginUrl = new URL("/pages/login", window.location.origin);
      loginUrl.searchParams.set("callbackUrl", "/pages/dashboard");
      router.replace(`${loginUrl.pathname}${loginUrl.search}`);
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[60vh]">
        <p className="text-sm text-ink/40">Checking your session…</p>
      </div>
    );
  }

  return <>{children}</>;
}
