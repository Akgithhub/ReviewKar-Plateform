import cardModel from "../model/cardModel.js";
import userModel from "../model/authModel.js";

/**
 * @desc    Create a new card and link it to a user
 * @route   POST /api/card/create-card
 * @access  Public (or Protected if using auth middleware)
 */
export const createCard = async (req, res) => {
  try {
    const { cardata, userId } = req.body;

    // Validation
    if (!cardata || !userId) {
      return res.status(400).json({ message: "Missing card data or user ID" });
    }

    const {
      title,
      description,
      imageUrl,
      category,
      rewardAmount,
      totalReviewsNeeded,
      companyName,
    } = cardata;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    // 1. Find the user by Clerk ID
    const user = await userModel.findOne({ clerkId: userId });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found in the database" });
    }

    // 2. Create a new card
    const newCard = await cardModel.create({
      title,
      description,
      creator: user._id,
      imageUrl,
      category,
      rewardAmount,
      totalReviewsNeeded,
      companyName,
    });

    // 3. Link card to user
    user.cards.push(newCard._id);
    await user.save();

    // 4. Respond with success
    return res.status(201).json({
      message: "Card created and linked to user successfully",
      card: newCard,
    });
  } catch (error) {
    console.error("Error creating card:", error.message);
    return res.status(500).json({
      message: "Server error while creating card",
      error: error.message,
    });
  }
};

/**
 * @desc    Get all cards
 * @route   GET /api/card/all
 * @access  Public (or Protected if needed)
 */
export const getAllCard = async (req, res) => {
  try {
    const cards = await cardModel.find().populate("creator", "name email");

    if (!cards || cards.length === 0) {
      return res.status(404).json({ message: "No cards found" });
    }

    res.status(200).json({
      message: "Cards fetched successfully",
      cards,
    });
  } catch (error) {
    console.error("Error fetching cards:", error.message);
    res.status(500).json({
      message: "Server error while fetching cards",
      error: error.message,
    });
  }
};
