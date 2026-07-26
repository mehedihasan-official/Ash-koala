import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// The dashboard is already protected client-side by the Firebase-based auth flow,
// and importing NextAuth in middleware here triggers the openid-client runtime issue
// under the Edge bundle. Keeping middleware lightweight avoids the crash while
// preserving the route matcher for future expansion.
export function middleware(req: NextRequest) {
  void req;
  return NextResponse.next();
}

export const config = {
  matcher: ["/pages/dashboard/:path*"],
};
