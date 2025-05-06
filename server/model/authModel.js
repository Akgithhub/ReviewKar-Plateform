import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, unique: true },
    name: String,
    email: String,
    imageUrl: String,
    role: { type: String, default: "user" },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "cardModel" }],
    company: { type: String },
    description: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    websiteUrl: { type: String },
    telephoneUrl: { type: String },
    facebookUrl: { type: String },
    twitterUrl: { type: String },
    linkedinUrl: { type: String },
    otherSocialUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Export the model
const userModel = mongoose.model("userModel", userSchema);
export default userModel;
