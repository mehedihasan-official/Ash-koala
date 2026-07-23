export default function WhatIsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-base font-semibold text-[#1CB954] mb-2">What’s Koala?</p>
          <h2 className="font-bold text-3xl sm:text-4xl text-ink mb-2">
            Timeshare Rentals
            <br />
            <span className="text-[#1CB954]">Made Easy</span>
          </h2>
          <p className="text-base font-semibold mt-4 max-w-md leading-relaxed">
            Rent directly from a verified owner and get access to resort-grade
            stays for a fraction of the usual cost.
          </p>
          
        </div>

        {/* Overlapping photo pair */}
        <div className="relative h-72 sm:h-80">
          <div className="absolute left-0 top-0 w-[62%] h-[72%] rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/resort-golf.svg"
              alt="Resort grounds"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[55%] h-[62%] rounded-2xl overflow-hidden shadow-lg border-4 border-sand">
            <img
              src="/images/resort-lagoon.svg"
              alt="Guests enjoying the resort"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-6 grid gap-5">
            <button className="grid-row-1 rounded-lg bg-[#1CB954] px-5 py-2.5 text-sm font-medium text-sand-light hover:bg-teal-dark transition">
              Learn More
            </button>
            <button className="rounded-lg border border-line border-[#1CB954] text-[#1CB954] px-5 py-2.5 text-sm font-medium text-ink/80 hover:bg-sand transition">
              Rent your timeshare
            </button>
          </div>
      </div>
    </section>
  );
}
