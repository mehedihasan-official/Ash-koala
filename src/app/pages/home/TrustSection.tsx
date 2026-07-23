"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Check } from "lucide-react";
import { testimonials, pressLogos } from "@/lib/homeContent";

const TRUSTPILOT_GREEN = "#1CB954";

/** Trustpilot-style 5-square rating (filled squares w/ white stars, partial last square for non-integer ratings) */
function TrustpilotStars({
  rating = 4.5,
  size = 28,
  gap = 4,
}: {
  rating?: number;
  size?: number;
  gap?: number;
}) {
  return (
    <div className="flex" style={{ gap }}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i)); // 1 = full, 0 = empty, between = partial
        return (
          <div
            key={i}
            className="relative flex items-center justify-center"
            style={{ width: size, height: size, backgroundColor: "#DCDCE6" }}
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%`, backgroundColor: TRUSTPILOT_GREEN }}
            />
            <Star
              size={size * 0.62}
              className="relative fill-white text-white"
              strokeWidth={0}
            />
          </div>
        );
      })}
    </div>
  );
}

function TrustpilotLogo({ size = 22 }: { size?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <Star size={size} style={{ color: TRUSTPILOT_GREEN }} className="fill-current" />
      <span className="text-[22px] font-semibold tracking-tight text-[#191919]">
        Trustpilot
      </span>
    </div>
  );
}

function RatingSummary({ align = "center" }: { align?: "center" | "left" }) {
  return (
    <div className={`flex flex-col ${align === "center" ? "items-center" : "items-start"} gap-2`}>
      <p className="text-[26px] sm:text-[28px] font-normal text-[#191919]">Excellent</p>
      <TrustpilotStars rating={4.5} size={30} gap={3} />
      <p className="text-sm text-[#191919]">
        Based on{" "}
        <span className="underline underline-offset-2 decoration-[#191919]/70">
          1,331 reviews
        </span>
      </p>
      <TrustpilotLogo />
    </div>
  );
}

function ReviewCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="flex w-full flex-shrink-0 flex-col rounded-sm bg-white px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.08)] sm:w-auto">
      <div className="mb-3 flex items-center gap-2">
        <TrustpilotStars rating={5} size={20} gap={2} />
        <span className="flex items-center gap-1 text-xs text-[#191919]/70">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#191919]/40">
            <Check size={9} strokeWidth={3} />
          </span>
          <span className="underline underline-offset-2">Verified</span>
        </span>
      </div>

      <p className="mb-1 text-sm text-[#191919]/90">
        <span className="font-medium">{t.name}</span>
        <span className="text-[#191919]/50">, {t.timeAgo ?? "recently"}</span>
      </p>

      <p className="mb-1 text-base font-bold leading-snug text-[#191919]">{t.headline}</p>

      <p className="text-sm leading-relaxed text-[#191919]/80 line-clamp-2">{t.quote}</p>
    </div>
  );
}

export default function TrustSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(4);
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);

  const scrollToIndex = (i: number) => {
    const clamped = Math.max(0, Math.min(maxIndex, i));
    setIndex(clamped);
    const track = trackRef.current;
    if (track) {
      const child = track.children[0] as HTMLElement | undefined;
      const cardWidth = child ? child.offsetWidth + 16 : 0;
      track.scrollTo({ left: clamped * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#f5f4d8] to-[#d9f0ea] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ---------- Mobile layout ---------- */}
        <div className="sm:hidden">
          <div className="mb-6 flex justify-center">
            <RatingSummary align="center" />
          </div>

          <div className="relative">
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 snap-center">
                  <ReviewCard t={t} />
                </div>
              ))}
            </div>
          </div>

          {/* dots */}
          <div className="mt-4 flex justify-center gap-1.5">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === index ? "bg-[#191919]/60" : "bg-[#191919]/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ---------- Desktop / tablet layout ---------- */}
        <div className="hidden sm:flex sm:items-center sm:gap-6">
          <div className="flex-shrink-0">
            <RatingSummary align="left" />
          </div>

          <button
            aria-label="Previous reviews"
            onClick={() => scrollToIndex(index - 1)}
            disabled={index === 0}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#191919]/15 text-[#191919]/50 transition hover:border-[#191919]/40 hover:text-[#191919] disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-4 overflow-x-hidden scroll-smooth"
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-shrink-0"
                  style={{
                    width:
                      perView === 4
                        ? "calc(25% - 12px)"
                        : perView === 2
                        ? "calc(50% - 8px)"
                        : "100%",
                  }}
                >
                  <ReviewCard t={t} />
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Next reviews"
            onClick={() => scrollToIndex(index + 1)}
            disabled={index >= maxIndex}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#191919]/15 text-[#191919]/50 transition hover:border-[#191919]/40 hover:text-[#191919] disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* ---------- Press strip ---------- */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-40 sm:mt-14 sm:justify-between sm:gap-x-8">
          {pressLogos.map((name) => (
            <span
              key={name}
              className="whitespace-nowrap font-serif text-lg italic tracking-tight text-[#191919] sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}