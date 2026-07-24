import type { Testimonial } from "@/lib/types";

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl text-teal-dark mb-2">What guests say</h2>
      <p className="text-ink/60 mb-10 max-w-xl">
        Real feedback from people who&rsquo;ve stayed at one of Ash&rsquo;s resorts.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="rounded-2xl border border-line bg-sand-light p-6 flex flex-col gap-4"
          >
            <div className="flex gap-0.5 text-gold" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} aria-hidden>
                  {i < t.rating ? "★" : "☆"}
                </span>
              ))}
            </div>
            <blockquote className="text-ink/75 leading-relaxed text-sm">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="text-sm font-medium text-teal-dark mt-auto">
              {t.guestName}
              {t.propertyName && (
                <span className="font-normal text-ink/50"> · {t.propertyName}</span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
