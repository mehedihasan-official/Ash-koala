"use client";

import { Calendar, MapPin, Search, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HERO_POSTER_URL =
  "https://koalaadmin-prod.s3.us-east-2.amazonaws.com/assets/Koala-homepageloading-blur-compressed.png";
const HERO_VIDEO_URL = "/videos/hero-video.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = async () => {
      setVideoLoaded(true);
      try {
        await video.play();
        setVideoError(null);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unknown autoplay error";
        setVideoError(`Autoplay blocked: ${message}`);
      }
    };

    const handleError = () => {
      const err = video.error;
      setVideoError(
        err
          ? `Video failed to load (code ${err.code}): ${err.message}`
          : "Video failed to load",
      );
    };

    if (video.readyState >= 2) {
      void handleCanPlay();
    } else {
      video.addEventListener("canplay", handleCanPlay);
    }

    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <section className="relative">
      {/* Full-bleed background video */}
      <div className="relative h-[70vh] min-h-[440px] max-h-[720px] w-full overflow-hidden">
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

        {/* TEMP DEBUG — remove once video is confirmed working */}
        {videoError && (
          <div className="absolute top-2 left-2 z-50 rounded bg-red-600 px-3 py-1.5 text-xs text-white max-w-xs">
            {videoError}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/25 to-ink/40" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center">
          <h1 className="reveal font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-sand-light max-w-3xl">
            Timeshare Rentals
            <br />
            Made Easy
          </h1>
          <p
            className="reveal mt-4 max-w-md text-sm sm:text-base text-sand-light/90"
            style={{ animationDelay: "80ms" }}
          >
            Rent directly from timeshare owners at a fraction of the
            resort&rsquo;s price
          </p>

          {/* Search bar — single pill on all breakpoints, fields collapse to one on mobile */}
          <div
            className="reveal mt-8 w-full max-w-md sm:max-w-2xl rounded-full bg-sand-light shadow-lg p-1.5 flex items-center gap-0"
            style={{ animationDelay: "150ms" }}
          >
            {/* Mobile: single "Start your search" field */}
            <button className="sm:hidden flex-1 text-left px-5 py-3 text-[15px] font-medium text-ink/80">
              Start your search
            </button>

            {/* Desktop: Where / When / Who fields with dividers */}
            <label className="hidden sm:flex flex-1 items-center gap-2.5 rounded-full px-5 py-2.5 hover:bg-sand transition text-left cursor-pointer">
              <MapPin size={16} className="text-teal shrink-0" />
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold text-ink/50">
                  Where
                </span>
                <span className="block text-sm text-ink/70 truncate">
                  Search destinations
                </span>
              </span>
            </label>
            <div className="hidden sm:block w-px h-8 bg-line" />
            <label className="hidden sm:flex flex-1 items-center gap-2.5 rounded-full px-5 py-2.5 hover:bg-sand transition text-left cursor-pointer">
              <Calendar size={16} className="text-teal shrink-0" />
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold text-ink/50">
                  When
                </span>
                <span className="block text-sm text-ink/70 truncate">
                  Add dates
                </span>
              </span>
            </label>
            <div className="hidden sm:block w-px h-8 bg-line" />
            <label className="hidden sm:flex flex-1 items-center gap-2.5 rounded-full px-5 py-2.5 hover:bg-sand transition text-left cursor-pointer">
              <Users size={16} className="text-teal shrink-0" />
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold text-ink/50">
                  Who
                </span>
                <span className="block text-sm text-ink/70 truncate">
                  Add guests
                </span>
              </span>
            </label>

            <button
              className="flex items-center justify-center rounded-full bg-gradient-to-b from-teal to-teal-dark text-sand-light h-11 w-11 sm:h-12 sm:w-12 shrink-0 hover:brightness-110 transition"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={2.5} />
            </button>
          </div>

          <p
            className="reveal mt-4 text-sm text-sand-light/80"
            style={{ animationDelay: "190ms" }}
          >
            or
          </p>

          <button
            className="reveal mt-4 inline-flex items-center gap-1.5 rounded-full border border-sand-light/40 bg-sand-light/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-sand-light hover:bg-sand-light/20 transition"
            style={{ animationDelay: "220ms" }}
          >
            <span aria-hidden>🔥</span>
            Browse Best Deals
          </button>
        </div>
      </div>
    </section>
  );
}
