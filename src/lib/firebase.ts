// Firebase client SDK setup.
//
// This project uses Firebase only for authentication (email/password +
// Google sign-in) — there is no Firestore/Realtime Database usage here.
// All resort, booking, and testimonial content still lives in the static
// data files under src/lib/ (see dashboardContent.ts, homeContent.ts).
//
// Config values come from NEXT_PUBLIC_ environment variables so they can
// be safely exposed to the browser (this is standard practice for
// Firebase web apps — these keys identify the project, they do not grant
// privileged access on their own). See .env.example for the full list of
// required variables and where to find them in the Firebase console.
import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Firebase Auth only ever runs in the browser here (AuthProvider is a
// Client Component), but Next.js still executes client components once
// on the server as part of prerendering/static export. getAuth() throws
// immediately if the API key is missing or invalid, which would otherwise
// crash the build on any machine that hasn't set up .env.local yet (e.g.
// CI, a fresh clone, or this very build step). Initializing lazily and
// only in the browser sidesteps that, while still failing loudly with a
// clear message if someone calls getFirebaseAuth() client-side without
// configuring their environment variables.
let cachedAuth: Auth | null = null;

export function getFirebaseAuth(): Auth {
  if (typeof window === "undefined") {
    throw new Error(
      "getFirebaseAuth() was called during server-side rendering. " +
        "Firebase Auth in this project is client-only — make sure the " +
        "calling component has \"use client\" and only calls this from " +
        "an effect or event handler."
    );
  }

  if (!cachedAuth) {
    const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    cachedAuth = getAuth(app);
  }

  return cachedAuth;
}
