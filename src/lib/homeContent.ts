// Placeholder content mirroring the structure of the reference homepage.
// Swap image paths / copy once Ash provides real resort photos & details.

export interface ListingCard {
  id: string;
  image: string;
  location: string;
  resortName: string;
  dates?: string;
  price?: number;
  rating?: number;
  discountLabel?: string;
  host?: { name: string; tier: "Platinum VIP Member" | "Gold VIP Member" };
}

export const exclusiveDeals: ListingCard[] = [
  {
    id: "ed-1",
    image: "/images/resort-beach.svg",
    location: "Noord, Aruba",
    resortName: "Sandbar Surf Club",
    rating: 4.6,
    price: 199,
    discountLabel: "54% off",
  },
  {
    id: "ed-2",
    image: "/images/resort-lagoon.svg",
    location: "Noord, Aruba",
    resortName: "Palmwave Ocean Club",
    rating: 4.5,
    price: 200,
    discountLabel: "54% off",
  },
  {
    id: "ed-3",
    image: "/images/resort-pool.svg",
    location: "Lake Buena Vista, Florida",
    resortName: "Bonnet Creek Retreat",
    rating: 4.5,
    price: 47,
    discountLabel: "25% off",
  },
  {
    id: "ed-4",
    image: "/images/resort-golf.svg",
    location: "Williamsburg, Virginia",
    resortName: "Kingsgate Villas",
    rating: 4.3,
    price: 42,
  },
];

export const featuredStays: ListingCard[] = [
  {
    id: "fs-1",
    image: "/images/resort-beach.svg",
    location: "Kapolei, Hawaii",
    resortName: "Ko Olina Beach Club",
    dates: "Dec 12 – Dec 19, 2026",
    price: 724,
    host: { name: "Christine", tier: "Platinum VIP Member" },
  },
  {
    id: "fs-2",
    image: "/images/resort-lagoon.svg",
    location: "Kapolei, Hawaii",
    resortName: "Ko Olina Beach Club",
    dates: "Mar 7 – Mar 14, 2027",
    price: 818,
    host: { name: "Dennis", tier: "Gold VIP Member" },
  },
  {
    id: "fs-3",
    image: "/images/resort-golf.svg",
    location: "Orlando, Florida",
    resortName: "Vistana Resort Villas",
    dates: "Dec 20 – Dec 27, 2026",
    price: 279,
    host: { name: "Melvin", tier: "Platinum VIP Member" },
  },
  {
    id: "fs-4",
    image: "/images/resort-mountain.svg",
    location: "Breckenridge, Colorado",
    resortName: "Gold Point Resort",
    dates: "Dec 18 – Dec 25, 2026",
    price: 325,
    host: { name: "Pat", tier: "Gold VIP Member" },
  },
];

export const destinations = [
  { id: "d-1", name: "Orlando", image: "/images/resort-golf.svg" },
  { id: "d-2", name: "Las Vegas", image: "/images/resort-desert.svg" },
  { id: "d-3", name: "Maui", image: "/images/resort-lagoon.svg" },
];

export const upcomingEvents = [
  {
    id: "ue-1",
    image: "/images/resort-village.svg",
    title: "Outside Lands Festival Stays — Vacation Rentals Near the Park",
    price: 300,
  },
  {
    id: "ue-2",
    image: "/images/resort-desert.svg",
    title: "Formula 1 US Grand Prix — Stay Close to the High-Speed Action",
    price: 85,
  },
  {
    id: "ue-3",
    image: "/images/resort-golf.svg",
    title: "Game, Set, Stay — Timeshare Rentals for the US Open",
    price: 150,
  },
];

export const guideArticles = [
  {
    id: "ga-1",
    image: "/images/resort-beach.svg",
    title: "Rent a Timeshare for the Whole Family",
    excerpt:
      "A timeshare can be a great lifestyle investment for travelers who love the comfort of a home away from home on vacation.",
  },
  {
    id: "ga-2",
    image: "/images/resort-village.svg",
    title: "RCI vs Interval International — Pros, Cons & Key Differences",
    excerpt:
      "Compare exchange value, fees, resort networks, and flexibility across the two major exchange programs.",
  },
  {
    id: "ga-3",
    image: "/images/resort-lagoon.svg",
    title: "Timeshares Evolve for Modern Travelers",
    excerpt:
      "Flexible memberships, short-term stays, and digital booking are reshaping how people use timeshares today.",
  },
];

export const testimonials = [
  {
    id: "t-1",
    name: "Janice M.",
    avatar: "/images/avatar-1.svg",
    quote:
      "The people here are always patient and willing to answer all my questions.",
  },
  {
    id: "t-2",
    name: "Thomas C.",
    avatar: "/images/avatar-2.svg",
    quote: "Staff is so friendly and helpful. They have my best interest at heart.",
  },
  {
    id: "t-3",
    name: "Laurie K.",
    avatar: "/images/avatar-3.svg",
    quote: "Easy to do business. Very easy to post a new listing, good reminders too.",
  },
  {
    id: "t-4",
    name: "Robert D.",
    avatar: "/images/avatar-4.svg",
    quote: "Service sets this apart. I've had several listings and the support is great.",
  },
];

export const pressLogos = [
  "The Herald Times",
  "The Travel Guide",
  "Weekend Journal",
  "Travel + Escape",
  "Trip Today",
];

export const footerResortGroups: { brand: string; resorts: string[] }[] = [
  {
    brand: "Top Marriott-Style Resorts",
    resorts: [
      "Aruba Surf Club",
      "Barony Beach Club",
      "Newport Coast Villas",
      "MountainSide",
      "Crystal Shores",
      "Desert Springs Villas II",
      "Kauai Beach Club",
      "OceanWatch at Grande Dunes",
      "Ko Olina Beach Club",
    ],
  },
  {
    brand: "Top Family Resorts",
    resorts: [
      "Grand Floridian Resort & Spa",
      "Bay Lake Tower",
      "Polynesian Villas & Bungalows",
      "Saratoga Springs",
      "Boulder Ridge Villas",
      "Copper Creek Villas & Cabins",
      "Beach Club Villas",
      "BoardWalk Villas",
      "Animal Kingdom Villas",
    ],
  },
  {
    brand: "Top Club Resorts",
    resorts: [
      "Westwinds",
      "Margaritaville by the Bay",
      "Midtown 45",
      "Nashville",
      "Ocean Walk",
      "Smoky Mountains",
      "SeaWatch Resort",
      "Grand Desert",
      "Towers on the Grove",
    ],
  },
  {
    brand: "Top Mountain Resorts",
    resorts: [
      "The Hammocks at Marathon",
      "The Marquee",
      "Casa Del Mar Beach Resort",
      "La Cabana Beach Resort",
      "Wilderness Club at Big Cedar",
      "MountainLoft",
      "Christmas Mountain Village",
      "Mountain Run at Boyne",
      "Daytona Seabreeze",
    ],
  },
];

export const footerLinkColumns = [
  {
    title: "Company",
    links: ["Partners", "About", "Press"],
  },
  {
    title: "Traveling",
    links: [
      "Destinations",
      "Last Resort",
      "Hot Deals",
      "Top 21 Resorts",
      "All Resorts",
      "Getaways",
      "Events",
      "Travel Blog",
      "Value Guide",
      "Trust & Safety",
      "Timeshare Rentals",
    ],
  },
  {
    title: "Hosting",
    links: [
      "Become A Host",
      "Pricing & Fees",
      "Owner Resources",
      "Owner Insights Blog",
      "Memberships",
    ],
  },
  {
    title: "Support",
    links: ["Contact Us", "FAQs"],
  },
];

export const topDestinationLinks = [
  ["Disney World", "Maui", "Florida", "Hawaii", "Aruba", "Orlando"],
  ["Las Vegas", "Myrtle Beach", "Oahu", "California", "New York City", "Hilton Head"],
  ["Panama City Beach", "Clearwater Beach", "Colorado"],
];
