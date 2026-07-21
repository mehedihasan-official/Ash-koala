import { Schema, models, model, type InferSchemaType } from "mongoose";

const TestimonialSchema = new Schema(
  {
    guestName: { type: String, required: true },
    quote: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    propertyName: { type: String }, // optional link back to a resort by name
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export type TestimonialDoc = InferSchemaType<typeof TestimonialSchema>;

export default models.Testimonial || model("Testimonial", TestimonialSchema);
