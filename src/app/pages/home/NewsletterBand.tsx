"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  }

  return (
    <section className="bg-gradient-to-br from-sand-light via-sand to-sand-light py-14 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-10 sm:grid-cols-[1.2fr_0.8fr] items-center">
        {/* Polaroid photo stack — first on mobile, right side on desktop */}
        <div className="relative h-56 sm:h-64 justify-self-center sm:justify-self-end sm:order-2 w-full max-w-[280px] sm:max-w-none">
          <div className="absolute left-50 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-24 top-0 w-52 sm:w-60 -rotate-6 rounded-sm bg-sand-light  shadow-lg">
            <Image
              width={160}
              height={160}
              src="/images/newsletter1.png"
              alt=""
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute left-18 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-10 top-4 w-52 sm:w-60 rotate-3 rounded-sm bg-sand-light  shadow-lg">
            <Image
              width={160}
              height={160}
              src="/images/newsletter2.png"
              alt=""
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-0 top-10 w-52 sm:w-40 rotate-6 rounded-sm bg-sand-light  shadow-lg">
            <Image
              width={160}
              height={160}
              src="/images/newsletter3.png"
              alt=""
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        <div className="sm:order-1">
          <h2 className="font-display text-3xl sm:text-4xl text-ink mb-2">
            Join the Koala{" "}
            <span className="italic text-teal">community</span>
          </h2>
          <p className="text-ink/60 mb-6 max-w-md">
            Insider access to exclusive deals delivered straight to your inbox
          </p>

          {subscribed ? (
            <p className="text-teal font-medium">
              You&rsquo;re on the list — thanks for joining!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
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
                  className="inline-flex items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-[#0B6E4F] to-[#1CB954] px-5 py-3 text-sm font-medium text-sand-light hover:bg-teal-dark transition shrink-0 sm:w-auto w-full"
                >
                  Count me in
                  <ChevronRight size={14} />
                </button>
              </div>

              <label className="mt-3 flex items-center gap-2 text-sm text-ink/70 cursor-pointer">
                <input
                  type="checkbox"
                  checked={subscribe}
                  onChange={(e) => setSubscribe(e.target.checked)}
                  className="h-4 w-4 rounded border-line accent-teal"
                />
                Yes, subscribe me for awesome deals
              </label>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}