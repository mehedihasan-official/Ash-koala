// The app uses Firebase auth on the client side, so the server-side NextAuth
// route is intentionally disabled here. Returning lightweight stubs keeps the
// app buildable on Vercel without pulling in the failing auth runtime path.
export async function auth() {
  return null;
}

export async function signIn() {
  throw new Error("Authentication is disabled on this deployment.");
}

export async function signOut() {
  return null;
}

export const handlers = {
  GET: async () =>
    Response.json(
      { error: "Authentication is disabled on this deployment." },
      { status: 404 },
    ),
  POST: async () =>
    Response.json(
      { error: "Authentication is disabled on this deployment." },
      { status: 404 },
    ),
};
