"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Cosmetic sign-in only — there is no real authentication or account system
// behind this. Submitting the form takes the owner straight to the
// dashboard. Kept as a form (rather than a plain link) so the page still
// looks and feels like the Koala-style owner login the client asked for.
export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-ink/80">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-line bg-sand-light px-4 py-2.5 text-ink outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-medium text-ink/80">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg border border-line bg-sand-light px-4 py-2.5 text-ink outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 rounded-lg bg-teal px-5 py-2.5 font-medium text-sand-light hover:bg-teal-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-sand transition disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
