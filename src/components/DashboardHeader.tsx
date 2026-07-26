"use client";

import { useAuth } from "@/components/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function DashboardHeader() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  async function handleSignOut() {
    setMenuOpen(false);
    await signOut();
    router.push("/");
  }

  // Close the dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close the dropdown on Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="border-b border-line bg-sand-light">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-4">
        <div>
          <img
            src="/logo/mobile-menu-koala-k-logo-vector.svg"
            alt="mobile-logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-ink/70 hover:bg-sand transition"
          >
            Home
          </Link>
          <Link
            href="/pages/dashboard"
            className="rounded-lg px-4 py-2 text-sm font-medium text-ink/70 hover:bg-sand transition"
          >
            Dashboard
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink/70 hover:bg-sand transition"
          >
            Sign out
          </button>
        </nav>

        {/* Mobile hamburger + dropdown */}
        <div className="relative md:hidden" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            className="rounded-lg border border-line p-2 text-ink/70 hover:bg-sand transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 mt-2 w-44 rounded-lg border border-line bg-sand-light shadow-lg py-1 z-50"
            >
              <Link
                href="/"
                role="menuitem"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-sm text-ink/70 hover:bg-sand transition"
              >
                Home
              </Link>
              <Link
                href="/pages/dashboard"
                role="menuitem"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-sm text-ink/70 hover:bg-sand transition"
              >
                Dashboard
              </Link>
              <button
                type="button"
                role="menuitem"
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-2 text-sm text-ink/70 hover:bg-sand transition"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
