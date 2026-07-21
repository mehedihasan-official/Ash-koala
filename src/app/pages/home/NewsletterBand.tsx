"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  }

  return (
    <section className="bg-gradient-to-br from-sand-light via-sand to-sand-light py-14 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-10 sm:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-ink mb-2">
            Join the Ash&rsquo;s <span className="italic text-teal">community</span>
          </h2>
          <p className="text-ink/60 mb-6 max-w-md">
            Insider access to exclusive deals delivered straight to your inbox
          </p>

          {subscribed ? (
            <p className="text-teal font-medium">You&rsquo;re on the list — thanks for joining!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-line bg-sand-light px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1 rounded-lg bg-teal px-5 py-2.5 text-sm font-medium text-sand-light hover:bg-teal-dark transition shrink-0"
              >
                Count me in
                <ChevronRight size={14} />
              </button>
            </form>
          )}
        </div>

        {/* Polaroid photo stack */}
        <div className="relative h-40 sm:h-48 justify-self-center sm:justify-self-end">
          <div className="absolute right-6 top-2 w-28 sm:w-32 rotate-6 rounded-sm bg-sand-light p-2 shadow-lg">
            <img
              src="/images/resort-mountain.svg"
              alt=""
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute right-0 top-10 w-28 sm:w-32 -rotate-6 rounded-sm bg-sand-light p-2 shadow-lg">
            <img
              src="/images/resort-pool.svg"
              alt=""
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
