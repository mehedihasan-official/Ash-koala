import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { destinations } from "@/lib/homeContent";

export default function FeaturedDestinations() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <a
        href="#"
        className="inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark transition mb-2"
      >
        Featured Destinations
        <ChevronRight size={15} />
      </a>
      <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6 sm:mb-8">
        Escape to our most popular locations
      </h2>

      <div className="grid gap-4 sm:grid-cols-3">
        {destinations.map((d) => (
          <a
            key={d.id}
            href="#"
            className="group relative h-56 sm:h-64 rounded-2xl overflow-hidden block"
          >
            <Image
              fill
              src={d.image}
              alt={d.name}
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
            <span className="absolute bottom-4 left-4 font-display text-xl text-sand-light">
              {d.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
