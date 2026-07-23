"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { upcomingEvents } from "@/lib/homeContent";

export default function UpcomingEvents() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  // Track how many cards are visible at once, per breakpoint
  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = Math.max(0, upcomingEvents.length - perView);

  const scrollToIndex = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(maxIndex, i));
      setActiveIndex(clamped);
      const track = trackRef.current;
      if (!track) return;
      const card = track.children[0] as HTMLElement | undefined;
      if (!card) return;
      const cardWidth = card.offsetWidth + 16; // includes gap-4 (1rem = 16px)
      track.scrollTo({ left: clamped * cardWidth, behavior: "smooth" });
    },
    [maxIndex]
  );

  // Keep activeIndex in sync when the user swipes/scrolls manually (mobile)
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    const i = Math.round(track.scrollLeft / cardWidth);
    setActiveIndex(Math.max(0, Math.min(maxIndex, i)));
  }, [maxIndex]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex items-start justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark transition mb-2"
          >
            Upcoming Events
            <ChevronRight size={15} />
          </a>
          <h2 className="font-display text-2xl sm:text-3xl text-ink">
            Our best priced stays on sporting events, concerts and more
          </h2>
        </div>

        {/* Nav arrows — desktop/tablet only */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0 mt-1">
          <button
            type="button"
            aria-label="Previous events"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/50 transition hover:border-ink/40 hover:text-ink disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next events"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex >= maxIndex}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/50 transition hover:border-ink/40 hover:text-ink disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {upcomingEvents.map((event) => (
          <a
            key={event.id}
            href="#"
            className="group relative h-64 w-full flex-shrink-0 snap-start rounded-2xl overflow-hidden block sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
          >
            <Image
              fill
              src={event.image}
              alt=""
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
            <span className="absolute top-3 right-3 rounded-md bg-sand-light/95 px-2 py-1 text-xs font-semibold text-teal-dark">
              from ${event.price} night
            </span>
            <span className="absolute bottom-4 left-4 right-4 font-medium text-sm text-sand-light leading-snug">
              {event.title}
            </span>
          </a>
        ))}
      </div>

      {/* Dots — mobile only */}
      <div className="mt-4 flex justify-center gap-1.5 sm:hidden">
        {upcomingEvents.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition ${
              i === activeIndex ? "bg-ink/60" : "bg-ink/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}