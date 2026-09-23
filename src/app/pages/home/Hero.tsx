"use client";

import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HERO_POSTER_URL =
  "https://koalaadmin-prod.s3.us-east-2.amazonaws.com/assets/Koala-homepageloading-blur-compressed.png";
const HERO_VIDEO_URL = "/videos/hero-video-23-9-26.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = async () => {
      setVideoLoaded(true);
      try {
        await video.play();
      } catch {}
    };

    if (video.readyState >= 2) {
      void handleCanPlay();
    } else {
      video.addEventListener("canplay", handleCanPlay);
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <section id="hero" className="relative">
      <div className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        {/* Poster / blurred placeholder — shows instantly, sits under the video */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url("${HERO_POSTER_URL}")` }}
          aria-hidden
        />

        {/* Background video — fades in once it can play */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{ opacity: videoLoaded ? 1 : 0 }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={HERO_POSTER_URL}
          aria-hidden
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-ink/15" />

        <button className="absolute right-6 top-7 z-20 rounded-full border border-ink/60 bg-sand-light px-5 py-3 text-[15px] font-medium text-ink shadow-sm md:hidden">
          Rent your timeshare
        </button>

        <div className="relative z-10 flex h-full flex-col items-center px-4 pt-[36vh] text-center md:pt-[29vh]">
          <h1 className="reveal max-w-[850px] font-display text-[31px] leading-[1.15] text-sand-light sm:text-4xl md:text-[42px]">
            Rent the timeshare. Skip the sales pitch.
          </h1>

          <div
            className="reveal mt-8 flex min-h-[72px] w-full max-w-[375px] items-center rounded-full border border-ink/70 bg-sand-light p-2 shadow-lg md:mt-9 md:max-w-[890px] md:min-h-0 md:p-1.5"
            style={{ animationDelay: "150ms" }}
          >
            <button className="flex-1 px-5 py-3 text-left text-[17px] font-medium text-ink/85 md:hidden">
              Start your search
            </button>

            <button className="hidden flex-1 items-center justify-between border-r border-ink/60 px-5 py-2 text-left text-[17px] text-ink/80 md:flex">
              Where will you go?
              <ChevronDown size={18} />
            </button>
            <button className="hidden flex-1 items-center justify-between border-r border-ink/60 px-5 py-2 text-left text-[17px] text-ink/80 md:flex">
              Add dates
              <ChevronDown size={18} />
            </button>
            <button className="hidden flex-1 items-center justify-between px-5 py-2 text-left text-[17px] text-ink/80 md:flex">
              Add guests
              <ChevronDown size={18} />
            </button>

            <button
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/60 bg-[#c7e0e7] text-ink transition hover:brightness-105 md:h-12 md:w-12"
              aria-label="Search"
            >
              <Search size={24} strokeWidth={2} />
            </button>
          </div>

          <button
            className="reveal mt-6 inline-flex items-center gap-1.5 rounded-full border border-ink/70 bg-sand-light px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:bg-white md:mt-4"
            style={{ animationDelay: "190ms" }}
          >
            Browse best deals
            <ArrowRight size={21} strokeWidth={1.8} />
          </button>

          <div className="reveal absolute bottom-5 left-5 text-left font-body text-[128px] font-bold leading-[0.8] tracking-[-0.08em] text-white sm:bottom-5 sm:left-10 sm:text-[160px] md:bottom-16 md:left-14 md:text-[205px]">
            Koala.
          </div>
        </div>
      </div>
    </section>
  );
}
