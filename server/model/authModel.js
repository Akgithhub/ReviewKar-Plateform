import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: String,
    name: String,
    imageUrl: String,
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "cardModel" }],
    role: { type: String, default: "user" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
// export default mongoose.models.User || mongoose.model("User", userSchema);
const userModel = mongoose.model("userModel", userSchema);
export default userModel;
