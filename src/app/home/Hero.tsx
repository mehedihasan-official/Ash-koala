import { MapPin, Calendar, Users, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      {/* Full-bleed background image */}
      <div className="relative h-[70vh] min-h-[440px] max-h-[720px] w-full overflow-hidden">
        <img
          src="/images/hero-slope.svg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/25 to-ink/40" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center">
          <h1 className="reveal font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-sand-light max-w-3xl">
            Timeshare Rentals
            <br />
            Made Easy
          </h1>
          <p
            className="reveal mt-4 max-w-md text-sm sm:text-base text-sand-light/85"
            style={{ animationDelay: "80ms" }}
          >
            Rent directly from timeshare owners at a fraction of the resort&rsquo;s
            price
          </p>

          {/* Search bar */}
          <div
            className="reveal mt-8 w-full max-w-2xl rounded-2xl sm:rounded-full bg-sand-light shadow-lg p-2 flex flex-col sm:flex-row gap-1"
            style={{ animationDelay: "150ms" }}
          >
            <label className="flex-1 flex items-center gap-2.5 rounded-full px-4 py-2.5 hover:bg-sand transition text-left cursor-pointer">
              <MapPin size={16} className="text-ink/40 shrink-0" />
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold text-ink/50">Where</span>
                <span className="block text-sm text-ink/70 truncate">Search destinations</span>
              </span>
            </label>
            <div className="hidden sm:block w-px bg-line my-1.5" />
            <label className="flex-1 flex items-center gap-2.5 rounded-full px-4 py-2.5 hover:bg-sand transition text-left cursor-pointer">
              <Calendar size={16} className="text-ink/40 shrink-0" />
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold text-ink/50">When</span>
                <span className="block text-sm text-ink/70 truncate">Add dates</span>
              </span>
            </label>
            <div className="hidden sm:block w-px bg-line my-1.5" />
            <label className="flex-1 flex items-center gap-2.5 rounded-full px-4 py-2.5 hover:bg-sand transition text-left cursor-pointer">
              <Users size={16} className="text-ink/40 shrink-0" />
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold text-ink/50">Who</span>
                <span className="block text-sm text-ink/70 truncate">Add guests</span>
              </span>
            </label>
            <button
              className="flex items-center justify-center gap-2 rounded-full bg-teal text-sand-light h-11 sm:h-auto sm:w-11 sm:aspect-square shrink-0 hover:bg-teal-dark transition"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={2.5} />
              <span className="sm:hidden text-sm font-medium">Search</span>
            </button>
          </div>

          <button
            className="reveal mt-6 rounded-full border border-sand-light/50 px-5 py-2 text-sm font-medium text-sand-light hover:bg-sand-light/10 transition"
            style={{ animationDelay: "220ms" }}
          >
            Browse Best Deals
          </button>
        </div>
      </div>
    </section>
  );
}
