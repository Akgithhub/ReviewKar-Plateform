import cardModel from "../model/cardModel.js";
import userModel from "../model/authModel.js";
import { clerkClient, getAuth } from "@clerk/express";
export const createCard = async () => {
  const userId = req.auth.userId; // Get the Clerk userId
  const { title, content } = req.body;

  try {
    // Step 1: Find or create the user in your DB
    let user = await userModel.findOne({ userId });
    if (!user) {
      user = new userModel({ userId, cards: [] });
      await user.save();
    }

    // Step 2: Create the card and associate with user
    const newCard = new Card({ title, content, userId });
    const savedCard = await newCard.save();

    // Step 3: Push the card ID to the user's cards array
    user.cards.push(savedCard._id);
    await user.save();

    res.status(201).json(savedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating card");
  }
};
