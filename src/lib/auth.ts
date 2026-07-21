import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { authConfig } from "@/lib/auth.config";

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

        await connectDB();
        const user = await User.findOne({
          email: String(credentials.email).toLowerCase().trim(),
        });
        if (!user) return null;

        const valid = await bcrypt.compare(
          String(credentials.password),
          user.passwordHash
        );
        if (!valid) return null;

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name ?? undefined,
        };
      },
    }),
  ],
});
