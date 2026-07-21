"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ResortCard from "./ResortCard";
import type { ListingCard } from "@/lib/homeContent";

export default function ListingCarousel({
  eyebrow,
  heading,
  listings,
  featuredBadge = false,
}: {
  eyebrow: string;
  heading: string;
  listings: ListingCard[];
  featuredBadge?: boolean;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark transition mb-2">
        {eyebrow}
        <ChevronRight size={15} />
      </a>
      <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6 sm:mb-8">{heading}</h2>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {listings.map((listing) => (
            <ResortCard key={listing.id} listing={listing} featured={featuredBadge} />
          ))}
        </div>

        {/* Arrow nav — desktop only, matches reference */}
        <button
          onClick={() => scrollBy(-1)}
          className="hidden sm:flex absolute -left-4 top-1/3 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-sand-light border border-line shadow-sm hover:shadow-md transition"
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="hidden sm:flex absolute -right-4 top-1/3 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-sand-light border border-line shadow-sm hover:shadow-md transition"
          aria-label="Scroll right"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
