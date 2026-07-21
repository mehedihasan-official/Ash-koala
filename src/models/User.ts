import { Schema, models, model, type InferSchemaType } from "mongoose";

/**
 * Kept as a real collection (rather than a single hardcoded env-var login)
 * so that upgrading from "single admin user" to "multi-user accounts" in a
 * later phase doesn't require a data-model migration — just new routes
 * (signup, invites, roles) on top of what's already here.
 */
const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    name: { type: String },
    role: { type: String, enum: ["owner", "admin"], default: "owner" },
  },
  { timestamps: true }
);

export type UserDoc = InferSchemaType<typeof UserSchema>;

export default models.User || model("User", UserSchema);
