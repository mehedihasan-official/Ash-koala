import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import Property from "@/models/Property";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const properties = await Property.find().sort({ order: 1 }).lean();
    return NextResponse.json({ properties });
  } catch {
    return NextResponse.json({ properties: [] });
  }
}
