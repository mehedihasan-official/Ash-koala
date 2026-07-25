"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { onAuthStateChanged, signOut as firebaseSignOut, type User } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

interface AuthContextValue {
  // undefined = Firebase hasn't reported back yet (initial load).
  // null = checked, nobody is signed in.
  // User = signed in.
  user: User | null | undefined;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Wraps the whole app (see layout.tsx) so any component can read the
// current Firebase auth state via useAuth() without prop-drilling. This is
// what powers the conditional "Dashboard" nav item — it only renders once
// `user` is truthy — and the /dashboard route guard.
export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    // Runs client-side only (effects never fire during SSR/prerendering),
    // so it's safe to touch the Firebase Auth SDK here.
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  async function signOut() {
    await firebaseSignOut(getFirebaseAuth());
  }

  return (
    <AuthContext.Provider value={{ user, loading: user === undefined, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
