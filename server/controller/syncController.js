import userModel from "../model/authModel.js";
import { clerkClient } from "@clerk/clerk-sdk-node";

export const syncUserWithDB = async (req, res) => {
  const userId = req.auth.userId;

  try {
    // const clerkUser = await clerk.users.getUser(userId); // get full user data
    // const existing = await userModel.findOne({ userId });
    const userId = req.auth.userId; // Get the userId from the authenticated user
    console.log("UserId : ",userId);
    
    // if (!existing) {
    //   const newUser = new userModel({
    //     userId,
    //     email: clerkUser.emailAddresses[0].emailAddress,
    //     firstName: clerkUser.firstName,
    //     lastName: clerkUser.lastName,
    //     imageUrl: clerkUser.imageUrl,
    //     cards: [],
    //   });
    //   await newUser.save();
    // }

    res.status(200).json({ message: "User synced" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to sync user" });
  }
};
