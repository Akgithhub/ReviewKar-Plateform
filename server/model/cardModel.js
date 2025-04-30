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
    //   required: true,
    },
    imageUrl: {
      type: String, // Will store the ImageKit URL
    },
    rewardAmount: {
      type: Number,
      default: 10, // ₹10 by default
    },
    totalReviewsNeeded: {
      type: Number,
    //   required: true, // How many reviews the user wants
    },
    maxSubmissions: {
      type: Number,
      default: 1, // Optionally can limit per user
    },
    companyName: {
      type: String,
    //   required: true, // Company creating the review card
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
          type: String, // e.g. "positive", "neutral", "negative"
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
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
