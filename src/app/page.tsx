import SiteHeader from "@/components/SiteHeader";
import MobileBottomNav from "@/components/MobileBottomNav";
import Hero from "@/app/home/Hero";
import ListingCarousel from "@/app/home/ListingCarousel";
import WhatIsSection from "@/app/home/WhatIsSection";
import TrustSection from "@/app/home/TrustSection";
import FeaturedDestinations from "@/app/home/FeaturedDestinations";
import UpcomingEvents from "@/app/home/UpcomingEvents";
import ExperienceIcons from "@/app/home/ExperienceIcons";
import VacationersGuide from "@/app/home/VacationersGuide";
import NewsletterBand from "@/app/home/NewsletterBand";
import SiteFooter from "@/app/home/SiteFooter";
import {
  exclusiveDeals,
  featuredStays,
} from "@/lib/homeContent";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <Hero />

        <ListingCarousel
          eyebrow="Resorts"
          heading="Exclusive deals at our top resorts"
          listings={exclusiveDeals}
        />

        <WhatIsSection />

        <TrustSection />

        <ListingCarousel
          eyebrow="Featured Listings"
          heading="Featured stays from verified members"
          listings={featuredStays}
          featuredBadge
        />

        <FeaturedDestinations />

        <UpcomingEvents />

        <ExperienceIcons />

        <VacationersGuide />

        <NewsletterBand />
      </main>

      <SiteFooter />

      <MobileBottomNav />
    </>
  );
}
