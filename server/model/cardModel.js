import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Product", "Restaurant", "Hotel", "Clothing", "Service", "Other"],
      required: true,
    },
    imageUrl: {
      type: String,
    },
    rewardAmount: {
      type: Number,
      default: 10, // could be points, rupees, etc.
    },
    maxSubmissions: {
      type: Number,
      default: 1,
    },
    submissions: [
      {
        userId: { type: String },
        proofUrl: { type: String },
        status: {
          type: String,
          enum: ["Pending", "Approved", "Rejected"],
          default: "Pending",
        },
        sentiment: {
          type: String, // auto-filled by AI: e.g., "positive", "neutral", "negative"
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("cardModel", cardSchema);
