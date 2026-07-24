import SiteHeader from "@/components/SiteHeader";
import MobileBottomNav from "@/components/MobileBottomNav";
import Hero from "@/app/pages/home/Hero";
import ListingCarousel from "@/app/pages/home/ListingCarousel";
import WhatIsSection from "@/app/pages/home/WhatIsSection";
import TrustSection from "@/app/pages/home/TrustSection";
import FeaturedDestinations from "@/app/pages/home/FeaturedDestinations";
import UpcomingEvents from "@/app/pages/home/UpcomingEvents";
import ExperienceIcons from "@/app/pages/home/ExperienceIcons";
import VacationersGuide from "@/app/pages/home/VacationersGuide";
import NewsletterBand from "@/app/pages/home/NewsletterBand";
import SiteFooter from "@/app/pages/home/SiteFooter";
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
