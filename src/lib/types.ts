export interface Payout {
  label: string;
  date: string;
  amount: number; // cents
  guestNights: number;
  status: "paid" | "pending" | "upcoming";
  notes?: string;
}

export interface Property {
  _id: string;
  name: string;
  location: string;
  brand?: string;
  description?: string;
  images: string[];
  unitType?: string;
  active: boolean;
  payouts: Payout[];
  order: number;
}

export interface Testimonial {
  _id: string;
  guestName: string;
  quote: string;
  rating: number;
  propertyName?: string;
  order: number;
}

export function formatCents(cents: number): string {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
