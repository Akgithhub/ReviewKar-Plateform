import cardModel from "../model/cardModel.js";
import userModel from "../model/authModel.js";

export const createCard = async (req, res) => {
  const clerkId = req.auth.userId; // Clerk user ID
  const { title, description } = req.body;

  try {
    // 1. Find user in DB using clerkId
    const user = await userModel.findOne({ clerkId });
    if (!user) {
      return res.status(404).json({ message: "User not found in database" });
    }

    // 2. Create card with user's MongoDB _id as creator
    const newCard = await cardModel.create({
      title,
      description,
      creator: user._id,
    });

    // 3. Push card reference to user
    user.cards.push(newCard._id);
    await user.save();

    // 4. Respond with success
    return res.status(201).json({
      message: "Card created and linked to user successfully",
      card: newCard,
    });
  } catch (err) {
    console.error("Error creating card:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getAllCard = async (req, res) => {
  try {
    const cards = await cardModel.find();
    if (!cards || cards.length === 0) {
      return res.status(404).json({ message: "No cards found" });
    }
    res.status(200).json({
      message: "Cards fetched successfully",
      cards: cards,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Error getting all cards",
      error: error.message,
    });
  }
};
