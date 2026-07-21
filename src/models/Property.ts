import { Schema, models, model, type InferSchemaType } from "mongoose";

const PayoutSchema = new Schema(
  {
    label: { type: String, required: true }, // e.g. "Jul 2026" or booking reference
    date: { type: Date, required: true },
    amount: { type: Number, required: true }, // net payout to owner, in USD cents
    guestNights: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["paid", "pending", "upcoming"],
      default: "paid",
    },
    notes: { type: String },
  },
  { _id: false }
);

const PropertySchema = new Schema(
  {
    name: { type: String, required: true }, // e.g. "Marriott's Grande Vista"
    location: { type: String, required: true }, // e.g. "Orlando, FL"
    brand: { type: String }, // e.g. "Marriott Vacation Club"
    description: { type: String },
    images: { type: [String], default: [] }, // Cloudinary/S3 URLs, client-provided
    unitType: { type: String }, // e.g. "2BR Villa, Sleeps 8"
    active: { type: Boolean, default: true },
    payouts: { type: [PayoutSchema], default: [] },
    order: { type: Number, default: 0 }, // display order on dashboard
  },
  { timestamps: true }
);

export type PropertyDoc = InferSchemaType<typeof PropertySchema>;

export default models.Property || model("Property", PropertySchema);
