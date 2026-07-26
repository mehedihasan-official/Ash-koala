"use client";

import { useAuth } from "@/components/AuthProvider";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    let heroHeight = 0;

    const updateHeroHeight = () => {
      const hero = document.querySelector("#hero");
      if (hero) heroHeight = hero.getBoundingClientRect().height;
    };

    const onScroll = () => {
      updateHeroHeight();
      setScrolledPastHero(window.scrollY > heroHeight * 0.85);
    };

    updateHeroHeight();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateHeroHeight);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHeroHeight);
    };
  }, []);

  // Signed-out visitors see "Owner sign in"; once Firebase confirms a
  // session, that link becomes "Dashboard" and points straight at the
  // gated owner view (Option B from the client: Dashboard only shows up
  // after a successful login).
  const authLabel = user ? "Dashboard" : "Owner sign in";
  const authHref = user ? "/pages/dashboard" : "/pages/login";

  return (
    <>
      {/* 1. Transparent Top Header - Always visible on desktop */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 w-full bg-transparent transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-3xl font-semibold text-sand-light drop-shadow-sm"
          >
            Koala<span className="text-clay">.</span>
          </Link>

          {/* Right side nav */}
          <nav className="flex items-center gap-6 text-sm text-sand-light">
            <Link href="#" className="hover:text-white transition">
              About
            </Link>
            <Link href="#" className="hover:text-white transition">
              Rent Your Timeshare
            </Link>
            <Link href={authHref} className="hover:text-white transition">
              {authLabel}
            </Link>

            <button
              className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 transition"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </nav>
        </div>
      </header>

      {/* 2. Sticky Colored Header - Appears after scrolling past hero */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 w-full bg-sand-light transition-all duration-300 ${
          scrolledPastHero
            ? "shadow-[0_1px_0_0_var(--color-line)] opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl sm:text-3xl font-semibold text-ink shrink-0"
          >
            Koala<span className="text-clay">.</span>
          </Link>

          {/* Search pill */}
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
            <span className="px-5 py-2.5 font-medium text-ink/50">
              Add guests
            </span>
            <span className="flex items-center justify-center h-9 w-9 rounded-full bg-teal text-sand-light mr-1.5">
              <Search size={16} strokeWidth={2.5} />
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 shrink-0">
            <Link
              href="#"
              className="text-sm font-medium text-ink/75 hover:text-ink transition"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-ink/75 hover:text-ink transition"
            >
              Rent Your Timeshare
            </Link>
            <Link
              href={authHref}
              className="text-sm font-medium text-ink/75 hover:text-ink transition"
            >
              {authLabel}
            </Link>
            <button
              className="flex items-center justify-center h-10 w-10 rounded-full border border-line hover:bg-sand transition"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full border border-line hover:bg-sand transition"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>
    </>
  );
}
