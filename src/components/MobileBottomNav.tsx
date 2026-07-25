"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Search, Heart, User, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

// The third slot switches between "Login" and "Dashboard" depending on
// auth state (client's Option B: Dashboard is a login-only destination,
// and sits beside Wishlist once unlocked). "Explore" and "Wishlist" stay
// fixed in every state.
export default function MobileBottomNav() {
  const pathname = usePathname();
  const { user } = useAuth();

  const thirdItem = user
    ? { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" }
    : { label: "Login", icon: User, href: "/login" };

  const items = [
    { label: "Explore", icon: Search, href: "/" },
    { label: "Wishlist", icon: Heart, href: "#" },
    thirdItem,
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-sand-light border-t border-line"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Primary"
    >
      {/* active-tab indicator line */}
      <div className="h-[3px] w-full bg-line/60 relative">
        <div className="h-[3px] w-1/3 bg-teal absolute left-0 top-0" />
      </div>
      <ul className="grid grid-cols-3">
        {items.map(({ label, icon: Icon, href }) => {
          const active = href !== "#" && pathname === href;
          return (
            <li key={label}>
              <Link
                href={href}
                className={`w-full flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium transition ${
                  active ? "text-ink" : "text-ink/45"
                }`}
              >
                <Icon size={20} strokeWidth={active ? 2.4 : 2} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
