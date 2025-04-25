import userModel from "../model/authModel.js";
import { clerkClient } from "@clerk/clerk-sdk-node";

export const syncUserWithDB = async (req, res) => {
  try {
    // 1. Get the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"
    console.log("Token: ", token);  // Log the token

    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }

    // 2. Use Clerk's SDK to verify the token (optional but recommended for safety)
    // You can verify the token using Clerk's SDK if you want to make sure it's valid
    try {
      await clerkClient.users.verifyToken(token); // Verifies if the token is valid
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // 3. Proceed with your logic after token verification
    const userId = req.auth.userId; // Get the userId from the authenticated user
    console.log("UserId : ", userId);
    const clerkUser = await clerkClient.users.getUser(userId); // Get full user data
    console.log("Clerk User : ", clerkUser);

    const existing = await userModel.findOne({ userId });
    if (!existing) {
      const newUser = new userModel({
        clerkId: clerkUser.id,
        userId,
        email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl,
        cards: [],
      });
      await newUser.save();
      res.status(200).json({ message: "User synced", data: newUser });
    } else {
      res.status(200).json({ message: "User already synced", data: existing });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to sync user" });
  }
};
