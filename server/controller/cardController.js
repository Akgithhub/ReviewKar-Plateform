import cardModel from "../model/cardModel.js";
import userModel from "../model/authModel.js";

// ------------------createCard-------------------
/**
 * @desc    Create a new card and link it to a user
 * @route   POST /api/card/create
 * @access  Protected (requires authentication)
 */

export const createCard = async (req, res) => {
  try {
    const { cardata, userId } = req.body;

    // Step 1: Validate input
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

    // Step 2: Find the user by Clerk ID
    const user = await userModel.findOne({ clerkId: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found in the database" });
    }

    // Step 3: Generate a slug from category
    const categorySlug = category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')    // Replace non-alphanumerics with hyphens
      .replace(/^-+|-+$/g, '');       // Remove leading/trailing hyphens

    // Step 4: Create a new card
    const newCard = await cardModel.create({
      title,
      description,
      creator: user._id,
      imageUrl,
      category,
      categorySlug, // store the slug version of category
      rewardAmount,
      totalReviewsNeeded,
      companyName,
    });

    // Step 5: Link card to the user's cards array
    user.cards.push(newCard._id);
    await user.save();

    // Step 6: Respond with success
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

// ------------------getAllCard-------------------
/**
 * @desc    Get all cards
 * @route   GET /api/card/all
 * @access  Public (or Protected if needed)
 */
export const getAllCard = async (req, res) => {
  try {
    const cards = await cardModel.find();

    if (!cards) {
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

// ------------------deleteCard-------------------
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


// ------------------updateCard-------------------
/**
 * @desc    Update a card's details
 * @route   PUT /api/card/update/:id
 * @access  Protected (Assuming middleware sets req.user)
 */

export const updateCard = async (req, res) => {
  try {
    // Temporary static user ID for testing purposes
    const userId = "6814538b66ad060dceb6f7bf";
    const cardId = req.params.id;
    const newCardData = req.body;

    console.log("User ID:", userId);
    console.log("Card ID:", cardId);

    // Step 1: Validate required IDs
    if (!cardId || !userId) {
      return res.status(400).json({
        message: "Card ID and User ID are required or not found.",
      });
    }

    // Step 2: Check if the card exists in the database
    const card = await cardModel.findById(cardId);
    if (!card) {
      return res.status(404).json({ message: "Card not found." });
    }

    // Step 3: Update the card with the provided new data
    const updatedCard = await cardModel.findByIdAndUpdate(cardId, newCardData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure updated fields meet schema validation
    });

    // Step 4: Return success response
    return res.status(200).json({
      message: "Card updated successfully.",
      card: updatedCard,
    });
  } catch (error) {
    // Step 5: Handle unexpected server errors
    console.error("Error updating card:", error.message);
    return res.status(500).json({
      message: "Server error while updating card.",
      error: error.message,
    });
  }
};

// ------------------getCardById-------------------
/**
 * @desc    Get a single card by its ID
 * @route   GET /api/card/:id
 * @access  Public or Protected (based on implementation)
 */

export const getCardById = async (req, res) => {
  try {
    const cardId = req.params.id;

    // Step 1: Validate card ID
    if (!cardId) {
      return res.status(400).json({ message: "Card ID is required." });
    }

    // Step 2: Find the card by ID in the database
    const card = await cardModel.findById(cardId);
    if (!card) {
      return res.status(404).json({ message: "Card not found." });
    }

    // Step 3: Send the card data in response
    return res.status(200).json({
      message: "Card fetched successfully.",
      card,
    });
  } catch (error) {
    // Step 4: Handle server errors
    console.error("Error fetching card by ID:", error.message);
    return res.status(500).json({
      message: "Server error while fetching card by ID.",
      error: error.message,
    });
  }
};

// ------------------getCardsByUserId-------------------
/**
 * @desc    Get all cards associated with a specific user by user ID
 * @route   GET /api/card/user
 * @access  Protected (requires authentication, currently uses static ID for testing)
 */

export const getCardsByUserId = async (req, res) => {
  try {
    // Temporary static user ID for testing purposes
    const userId = "6814538b66ad060dceb6f7bf";

    // Step 1: Validate user ID
    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    // Step 2: Fetch the user from the database
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Step 3: Extract card IDs from the user's document and fetch the corresponding cards
    const cardsId = user.cards;
    const cards = await cardModel.find({ _id: { $in: cardsId } });

    // Step 4: Return the cards in response
    return res.status(200).json({
      message: "Cards fetched successfully.",
      cards,
    });
  } catch (error) {
    // Step 5: Handle server errors
    console.error("Error fetching cards by user ID:", error.message);
    return res.status(500).json({
      message: "Server error while fetching cards by user ID.",
      error: error.message,
    });
  }
};

// ------------------getCardByCategory-------------------
/**
 * @desc    Get all cards by category slug
 * @route   GET /api/card/category/:category
 * @access  Public
 */

export const getCardByCategory = async (req, res) => {
  try {
    const categorySlug = req.params.category;

    // Step 1: Validate category slug from URL params
    if (!categorySlug) {
      return res.status(400).json({ message: "Category is required." });
    }

    // Step 2: Fetch cards from the database by category slug
    const cards = await cardModel.find({ categorySlug });

    // Step 3: Check if any cards exist in the given category
    if (!cards || cards.length === 0) {
      return res.status(404).json({ message: "No cards found in this category." });
    }

    // Step 4: Send the matching cards in the response
    return res.status(200).json({
      message: "Cards fetched successfully.",
      cards,
    });

  } catch (error) {
    console.error("Error fetching cards by category:", error.message);
    return res.status(500).json({
      message: "Server error while fetching cards by category.",
      error: error.message,
    });
  }
};

