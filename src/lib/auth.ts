import { authConfig } from "@/lib/auth.config";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Full config — includes the Credentials provider, which touches Mongoose
// and bcrypt (Node-only). This file must NOT be imported from middleware.ts;
// use auth.config.ts there instead. This file is safe to import from API
// routes and server components, which run in the Node runtime.
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // Authentication is temporarily disabled until MongoDB is configured.
        return {
          id: "demo-user",
          email: String(credentials.email).toLowerCase().trim(),
          name: "Demo User",
        };
      },
    }),
  ],
});
