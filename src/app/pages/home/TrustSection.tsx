import { Star } from "lucide-react";
import { testimonials, pressLogos } from "@/lib/homeContent";

export default function TrustSection() {
  return (
    <section className="bg-gradient-to-b from-sand-light to-sand py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Rating summary */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-teal text-teal" />
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Excellent</p>
            <p className="text-xs text-ink/50">Based on 1,324 verified reviews</p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-xl bg-sand-light border border-line p-4">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-teal text-teal" />
                ))}
                <span className="ml-1 text-[10px] uppercase tracking-wide text-ink/40 font-semibold">
                  Verified
                </span>
              </div>
              <p className="text-sm text-ink/70 leading-relaxed line-clamp-3">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <img src={t.avatar} alt="" className="h-6 w-6 rounded-full" />
                <span className="text-xs font-medium text-ink/70">{t.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Press strip */}
        <div className="mt-10 pt-8 border-t border-line/70 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50">
          {pressLogos.map((name) => (
            <span
              key={name}
              className="font-display italic text-base sm:text-lg text-ink/60 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
