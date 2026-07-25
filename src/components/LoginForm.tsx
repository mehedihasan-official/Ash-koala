"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  type AuthError,
} from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

const googleProvider = new GoogleAuthProvider();

// Turns Firebase's auth error codes into short, human-readable messages.
// Firebase intentionally returns a generic "invalid-credential" for both
// "wrong password" and "no such user" (so login forms can't be used to
// probe which emails have accounts) — the message below reflects that.
function friendlyAuthError(error: unknown): string {
  const code = (error as AuthError)?.code;

  switch (code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "That email and password don't match an account.";
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait a moment and try again.";
    case "auth/popup-closed-by-user":
      return "Google sign-in was cancelled.";
    case "auth/network-request-failed":
      return "Network error — check your connection and try again.";
    default:
      return "Something went wrong signing in. Please try again.";
  }
}

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // Owner sign-in only redirects back to /dashboard, matching the client's
  // scope (Option B: Dashboard is a login-only destination). If a
  // callbackUrl was attached (e.g. by the route guard after a redirect),
  // honor it — but only when it points somewhere inside this app.
  const callbackUrl = searchParams.get("callbackUrl");
  const redirectTo = callbackUrl?.startsWith("/") ? callbackUrl : "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const loading = emailLoading || googleLoading;

  async function handleEmailSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setEmailLoading(true);

    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), email.trim(), password);
      router.push(redirectTo);
    } catch (err) {
      setError(friendlyAuthError(err));
      setEmailLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setError(null);
    setGoogleLoading(true);

    try {
      await signInWithPopup(getFirebaseAuth(), googleProvider);
      router.push(redirectTo);
    } catch (err) {
      setError(friendlyAuthError(err));
      setGoogleLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-5 w-full max-w-sm">
      <form onSubmit={handleEmailSignIn} className="flex flex-col gap-4">
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

        {error && (
          <p role="alert" className="text-sm text-clay-dark">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-1 rounded-lg bg-teal px-5 py-2.5 font-medium text-sand-light hover:bg-teal-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-sand transition disabled:opacity-60"
        >
          {emailLoading ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <div className="flex items-center gap-3 text-xs text-ink/40">
        <span className="h-px flex-1 bg-line" />
        or
        <span className="h-px flex-1 bg-line" />
      </div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="flex items-center justify-center gap-3 rounded-lg border border-line bg-white px-5 py-2.5 font-medium text-ink hover:bg-sand transition disabled:opacity-60"
      >
        <GoogleIcon />
        {googleLoading ? "Signing in…" : "Continue with Google"}
      </button>
    </div>
  );
}

// Standard multi-color Google "G" mark, inlined as SVG so the login button
// doesn't depend on an external asset request.
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.9c1.7-1.57 2.7-3.87 2.7-6.61Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.81.54-1.85.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.95v2.33A9 9 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.95A9 9 0 0 0 0 9c0 1.45.35 2.83.95 4.03l3-2.33Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .95 4.97l3 2.33C4.66 5.17 6.65 3.58 9 3.58Z"
      />
    </svg>
  );
}
