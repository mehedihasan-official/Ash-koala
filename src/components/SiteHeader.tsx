"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Menu } from "lucide-react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`hidden md-block md-sticky top-0 z-40 w-full bg-sand-light transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-line)]" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl sm:text-3xl font-semibold text-ink shrink-0">
          Ash&rsquo;s<span className="text-clay">.</span>
        </Link>

        {/* Search pill — desktop only */}
        <button
          className="hidden md:flex items-center rounded-full border border-line bg-sand-light shadow-sm hover:shadow-md transition overflow-hidden text-sm"
          aria-label="Search resorts"
        >
          <span className="px-5 py-2.5 font-medium text-ink/80 border-r border-line">
            Anywhere
          </span>
          <span className="px-5 py-2.5 font-medium text-ink/80 border-r border-line">
            Anytime
          </span>
          <span className="px-5 py-2.5 font-medium text-ink/50">Add guests</span>
          <span className="flex items-center justify-center h-9 w-9 rounded-full bg-teal text-sand-light mr-1.5">
            <Search size={16} strokeWidth={2.5} />
          </span>
        </button>

        {/* Nav — desktop only */}
        <nav className="hidden lg:flex items-center gap-6 shrink-0">
          <Link href="#" className="text-sm font-medium text-ink/75 hover:text-ink transition">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-ink/75 hover:text-ink transition">
            Rent Your Timeshare
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-ink/75 hover:text-ink transition"
          >
            Owner sign in
          </Link>
          <button
            className="flex items-center justify-center h-10 w-10 rounded-full border border-line hover:bg-sand transition"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </nav>

        {/* Mobile: just the menu button (search + nav collapse into bottom bar / menu) */}
        <button
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full border border-line hover:bg-sand transition shrink-0"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
