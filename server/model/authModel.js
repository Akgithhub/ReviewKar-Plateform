import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, unique: true },
    email: String,
    name: String,
    imageUrl: String,
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "cardModel" }],
    role: { type: String, default: "user" },
    company: { type: String },
    description: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    website: { type: String },
    telephone: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
    otherSocial: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Export the model
const userModel = mongoose.model("userModel", userSchema);
export default userModel;
