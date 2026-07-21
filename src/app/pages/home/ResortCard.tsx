// ResortCard.tsx

import { Heart, Star } from "lucide-react";
import type { ListingCard } from "@/lib/homeContent";

export default function ResortCard({
  listing,
  featured = false,
}: {
  listing: ListingCard;
  featured?: boolean;
}) {
  // Reference shows a small photo-carousel dot indicator on each card.
  // We only have one image per listing right now, so we render a single
  // dot — swap this for listing.images.length once multi-photo data exists.
  const photoDots = 1;

  return (
    <div className="group shrink-0 w-[85vw] xs:w-[320px] sm:w-[300px] lg:w-[320px] snap-start">
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-teal-dark">
        <img
          src={listing.image}
          alt={listing.resortName}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* "TOP 21" style ribbon badge */}
        {featured && (
          <span className="absolute top-3 left-3 flex h-9 w-9 flex-col items-center justify-center rounded-full bg-sand-light shadow-sm text-center leading-none">
            <span className="text-[8px] font-bold text-teal">TOP</span>
            <span className="text-[10px] font-bold text-teal">21</span>
          </span>
        )}

        <button
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-sand-light/95 hover:bg-sand-light transition"
          aria-label="Save to wishlist"
        >
          <Heart size={15} className="text-ink/70" />
        </button>

        {listing.host && (
          <div className="absolute bottom-6 left-3 right-3 flex items-center gap-2 rounded-xl bg-ink/55 backdrop-blur-sm px-2.5 py-1.5">
            <div className="h-7 w-7 rounded-full bg-gold/80 shrink-0" />
            <div className="min-w-0">
              <p className="text-[11px] text-sand-light/85 truncate">
                Hosted by {listing.host.name}
              </p>
              <p className="text-[11px] font-semibold text-gold truncate">
                {listing.host.tier}
              </p>
            </div>
          </div>
        )}

        {/* Photo carousel dot indicator */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1">
          {Array.from({ length: photoDots }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === 0 ? "bg-sand-light" : "bg-sand-light/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm text-ink/70">{listing.location}</p>
          {listing.rating && (
            <span className="flex items-center gap-1 text-xs text-ink/70 shrink-0">
              <Star size={12} className="fill-ink text-ink" />
              {listing.rating}
            </span>
          )}
        </div>
        <p className="text-[15px] font-semibold text-ink truncate mt-0.5">
          {listing.resortName}
        </p>
        {listing.dates && <p className="text-xs text-ink/45 mt-0.5">{listing.dates}</p>}

        <div className="mt-3 flex items-center justify-between gap-2">
          {listing.price && (
            <p className="text-sm text-ink/60">
              {listing.discountLabel && <span className="mr-1">from</span>}
              <span className="font-bold text-[15px] text-[#1CB954]">${listing.price}</span>
              <span className="text-ink/60"> night</span>
            </p>
          )}

          {listing.discountLabel && (
            <span className="flex flex-col items-center leading-none rounded-md border border-[#1CB954] px-2.5 py-1 shrink-0">
              <span className="text-[9px] text-[#1CB954]">Up to</span>
              <span className="text-base font-bold text-[#1CB954]">{listing.discountLabel}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}