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

/**
 * @desc    Delete a specific card and update the user's card list
 * @route   DELETE /api/card/:_id
 * @access  Protected (Requires user to be authenticated)
 */

export const deleteCard = async (req, res) => {
  try {
    const cardId = req.params.id;
    // const userId = req.user?.id; // Assuming req.user is set by authentication middleware
    const userId = "6814538b66ad060dceb6f7bf";
    console.log("User ID:", userId);
    console.log("Card ID:", cardId);
    

    // Step 1: Validate input
    if (!cardId || !userId) {
      return res.status(400).json({
        message: "Card ID and User ID are required or not found.",
      });
    }

    // Step 2: Fetch the card from the database
    const card = await cardModel.findById(cardId);
    if (!card) {
      return res.status(404).json({ message: "Card not found." });
    }

    // Step 4: Delete the card document from the database
    const deletedCard = await cardModel.findByIdAndDelete(cardId);

    // Step 5: Remove the card ID from the user's cards array
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { $pull: { cards: cardId } },
      { new: true }
    );

    // Step 6: Send success response
    return res.status(200).json({
      message: "Card deleted and user updated successfully.",
      card: deletedCard,
      user: updatedUser,
    });

  } catch (error) {
    // Step 7: Handle any server-side errors
    console.error("Error deleting card:", error.message);
    return res.status(500).json({
      message: "Server error while deleting card.",
      error: error.message,
    });
  }
};

