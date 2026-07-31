import type { Resort, Testimonial } from "@/lib/types";

//Koala's actual resort data (from the resort details he provided).
// Both listings are Marriott's Cypress Harbour, same dates, two separate
// bookings/units — matches the reference screenshots exactly.
//
// Scope was for 3-4 resorts on this page. Only 2 real bookings have been
// provided so far, so only those 2 render below — the layout (grid,
// "All Listings (N)" counter, total payout) already scales cleanly to 3 or
// 4 without any code changes. To add the next resort, copy one of the
// objects below, swap in its real Ref ID / dates / payout, and point
// `image` at a photo dropped into public/images/ (rsort-img3.webp and
// rsort-img4.webp are already sitting in that folder, unused, ready for
// the next two resorts once their details come in).
export const resorts: Resort[] = [

  {
    id: "cypress-harbour-4",
    name: "Holiday Inn Club Vacations Orange Lake Resort",
    unitType: "3 Bd villa",
    location: "Orlando, Florida",
    image: "/images/rsort-img5.webp",
    bookings: [
      {
        id: "KL363330",
        status: "Paid",
        dateRange: "Jan 02, 2026 - Jan 09, 2026",
        payoutCents: 186555, // $2,022.16
      },
    ],
  },

  

  {
    id: "cypress-harbour-1",
    name: "Marriott's Cypress Harbour",
    unitType: "2 Bedroom Villa",
    location: "Orlando, FL",
    image: "/images/rsort-img1.webp",
    bookings: [
      {
        id: "KL363332",
        status: "Paid",
        dateRange: "Jun 05, 2026 - Jun 12, 2026",
        payoutCents: 345568 // $2,099.44
      },
    ],
  },


  {
    id: "cypress-harbour-2",
    name: "Marriott's Cypress Harbour",
    unitType: "2 Bedroom Villa",
    location: "Orlando, FL",
    image: "/images/rsort-img2.webp",
    bookings: [
      {
        id: "KL363333",
        status: "Paid",
        dateRange: "Jun 05, 2026 - Jun 12, 2026",
        payoutCents: 393755, // $2,022.16
      },
    ],
  },

  {
    id: "cypress-harbour-5",
    name: "The Residences at Orange Lake Resort",
    unitType: "Holiday Inn Club Vacations",
    location: "Kissimmee, FL 34747",
    image: "/images/rsort-img6.webp",
    bookings: [
      {
        id: "KL363330",
        status: "Paid",
        dateRange: "Jul 19, 2026 - Jul 22, 2026",
        payoutCents: 579867, // $2,022.16
      },
    ],
  },

  {
    id: "cypress-harbour-3",
    name: "Westin Princeville Ocean Resort Villas",
    unitType: "Studio Standard",
    location: "3838 Wyllie Road, Princeville, HI, 96722",
    image: "/images/rsort-img4.webp",
    bookings: [
      {
        id: "KL363334",
        status: "Paid",
        dateRange: "Aug 09, 2026 - Aug 16, 2026",
        payoutCents: 273693, // $2,022.16
      },
    ],
  },

  
];




export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    guestName: "Janice M.",
    quote:
      "The booking was seamless and the villa was even better than the photos. Would rent fromKoala again in a heartbeat.",
    rating: 5
    
  },
  {
    id: "t-2",
    guestName: "Thomas C.",
    quote:
      "Great communication throughout and the resort amenities were fantastic for our family trip.",
    rating: 5,
    
  },
  {
    id: "t-3",
    guestName: "Laurie K.",
    quote:
      "Easy process from start to finish. Everything matched what was promised — highly recommend.",
    rating: 5,
  },
];
