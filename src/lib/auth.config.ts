import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe subset of the auth config — no Mongoose/bcrypt imports here.
 * Next.js middleware runs on the Edge runtime, which can't run Node-only
 * packages like Mongoose. This file is imported by middleware.ts.
 * The full config (with the Credentials provider + DB lookup) lives in
 * auth.ts and is used everywhere else (API routes, server components).
 */
export const authConfig = {
  secret:
    process.env.AUTH_SECRET ??
    process.env.NEXTAUTH_SECRET ??
    "dev-secret-change-me",
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [], // real providers are added in auth.ts
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        (session.user as { id?: string }).id = token.id as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
