/**
 * Seed script — creates the admin login and sample dashboard data.
 *
 * Usage:
 *   npx tsx scripts/seed.ts
 *
 * Reads ADMIN_EMAIL / ADMIN_PASSWORD from .env.local (falls back to
 * defaults below for local dev — change these before deploying).
 */
import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../src/models/User";
import Property from "../src/models/Property";
import Testimonial from "../src/models/Testimonial";

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "ash@example.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme123";

async function seed() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not set. Add it to .env.local first.");
  }

  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");

  // --- Admin user ---
  const existing = await User.findOne({ email: ADMIN_EMAIL.toLowerCase() });
  if (existing) {
    console.log(`User ${ADMIN_EMAIL} already exists, skipping.`);
  } else {
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await User.create({
      email: ADMIN_EMAIL.toLowerCase(),
      passwordHash,
      name: "Ash",
      role: "owner",
    });
    console.log(`Created admin user: ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`);
  }

  // --- Sample properties (placeholder — replace with Ash's real resorts/photos) ---
  const propertyCount = await Property.countDocuments();
  if (propertyCount === 0) {
    await Property.insertMany([
      {
        name: "Marriott's Grande Vista",
        location: "Orlando, FL",
        brand: "Marriott Vacation Club",
        unitType: "2BR Villa, Sleeps 8",
        description: "Placeholder listing — replace with Ash's real resort details and photos.",
        images: [],
        order: 1,
        payouts: [
          { label: "Jun 2026", date: new Date("2026-06-28"), amount: 84000, guestNights: 6, status: "paid" },
          { label: "May 2026", date: new Date("2026-05-20"), amount: 71500, guestNights: 5, status: "paid" },
        ],
      },
      {
        name: "Hilton Grand Vacations at SeaWorld",
        location: "Orlando, FL",
        brand: "Hilton Grand Vacations",
        unitType: "1BR Suite, Sleeps 4",
        description: "Placeholder listing — replace with Ash's real resort details and photos.",
        images: [],
        order: 2,
        payouts: [
          { label: "Jun 2026", date: new Date("2026-06-15"), amount: 52000, guestNights: 4, status: "paid" },
        ],
      },
      {
        name: "Wyndham Bonnet Creek",
        location: "Orlando, FL",
        brand: "Club Wyndham",
        unitType: "2BR Deluxe, Sleeps 8",
        description: "Placeholder listing — replace with Ash's real resort details and photos.",
        images: [],
        order: 3,
        payouts: [
          { label: "Jul 2026", date: new Date("2026-07-10"), amount: 39000, guestNights: 3, status: "pending" },
        ],
      },
    ]);
    console.log("Inserted 3 placeholder properties.");
  } else {
    console.log("Properties already exist, skipping.");
  }

  // --- Sample testimonials (placeholder — replace with client-provided reviews) ---
  const testimonialCount = await Testimonial.countDocuments();
  if (testimonialCount === 0) {
    await Testimonial.insertMany([
      {
        guestName: "Placeholder — Guest Name",
        quote:
          "Placeholder testimonial text. Replace with real guest reviews once Ash provides them.",
        rating: 5,
        order: 1,
      },
      {
        guestName: "Placeholder — Guest Name",
        quote:
          "Placeholder testimonial text. Replace with real guest reviews once Ash provides them.",
        rating: 5,
        order: 2,
      },
    ]);
    console.log("Inserted 2 placeholder testimonials.");
  } else {
    console.log("Testimonials already exist, skipping.");
  }

  await mongoose.disconnect();
  console.log("Done.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
