import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Testimonial from "@/models/Testimonial";

// Public route — testimonials are marketing content, shown pre-login too if needed.
export async function GET() {
  await connectDB();
  const testimonials = await Testimonial.find().sort({ order: 1 }).lean();

  return NextResponse.json({ testimonials });
}
