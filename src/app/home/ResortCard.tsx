import { Heart, Star } from "lucide-react";
import type { ListingCard } from "@/lib/homeContent";

export default function ResortCard({
  listing,
  featured = false,
}: {
  listing: ListingCard;
  featured?: boolean;
}) {
  return (
    <div className="group shrink-0 w-[260px] sm:w-[280px]">
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-teal-dark">
        <img
          src={listing.image}
          alt={listing.resortName}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {featured && (
          <span className="absolute top-3 left-3 flex items-center gap-1 rounded-md bg-sand-light/95 px-2 py-1 text-xs font-semibold text-clay-dark">
            <Star size={12} className="fill-clay-dark text-clay-dark" />
            Featured
          </span>
        )}

        <button
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-sand-light/90 hover:bg-sand-light transition"
          aria-label="Save to wishlist"
        >
          <Heart size={15} className="text-ink/70" />
        </button>

        {listing.discountLabel && (
          <span className="absolute bottom-3 left-3 rounded-md bg-sand-light/95 px-2 py-1 text-xs font-semibold text-teal-dark">
            {listing.discountLabel}
          </span>
        )}

        {listing.host && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-xl bg-ink/55 backdrop-blur-sm px-2.5 py-1.5">
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
      </div>

      <div className="mt-3">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-ink">{listing.location}</p>
          {listing.rating && (
            <span className="flex items-center gap-1 text-xs text-ink/70 shrink-0">
              <Star size={12} className="fill-gold text-gold" />
              {listing.rating}
            </span>
          )}
        </div>
        <p className="text-sm text-ink/60 truncate">{listing.resortName}</p>
        {listing.dates && <p className="text-xs text-ink/45 mt-0.5">{listing.dates}</p>}

        {listing.price && (
          <p className="mt-1.5 text-sm">
            {listing.discountLabel && (
              <span className="text-ink/45 mr-1">from</span>
            )}
            <span className="font-semibold text-ink">${listing.price}</span>
            <span className="text-ink/50"> night</span>
          </p>
        )}
      </div>
    </div>
  );
}
