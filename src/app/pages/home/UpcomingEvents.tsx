import { ChevronRight } from "lucide-react";
import { upcomingEvents } from "@/lib/homeContent";

export default function UpcomingEvents() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <a
        href="#"
        className="inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark transition mb-2"
      >
        Upcoming Events
        <ChevronRight size={15} />
      </a>
      <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6 sm:mb-8">
        Our best priced stays on sporting events, concerts and more
      </h2>

      <div className="grid gap-4 sm:grid-cols-3">
        {upcomingEvents.map((event) => (
          <a
            key={event.id}
            href="#"
            className="group relative h-64 rounded-2xl overflow-hidden block"
          >
            <img
              src={event.image}
              alt=""
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
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
    </section>
  );
}
