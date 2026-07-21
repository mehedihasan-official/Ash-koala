"use client";

import type { ListingCard } from "@/lib/homeContent";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import ResortCard from "./ResortCard";

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
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section className="mx-auto bg-gradient-to-r from-[#FBFBD4] to-[#D5F5F6] max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      {/* Fixed: missing opening <a> tag */}
      <a
        href="#"
        className="inline-flex items-center gap-1 text-xl font-semibold text-[#0b6e4f] hover:text-teal-dark transition mb-3"
      >
        {eyebrow}
        <ChevronRight size={18} className="text-xl font-semibold text-[#0b6e4f]"/>
      </a>

      <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-6 sm:mb-8 leading-tight">
        {heading}
      </h2>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {listings.map((listing) => (
            <ResortCard
              key={listing.id}
              listing={listing}
              featured={featuredBadge}
            />
          ))}
        </div>

        {/* Arrow nav — desktop only */}
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
