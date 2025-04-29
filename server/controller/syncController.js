import userModel from "../model/authModel.js";
import { clerkClient } from "@clerk/express";

export const syncUserWithDB = async (req, res) => {
  try {
    // Step 1: Extract the userId from the authenticated request
    const { clerkId, name, email, imageUrl, role } = req.body;
    // console.log(clerkId);

    if (!clerkId) {
      // console.log("❌ Authentication failed");
      return res.status(401).json({ message: "Unauthorized" });
    }

    // console.log("✅ Authenticated Clerk UserID:", clerkId);

    // Step 2: Retrieve user details from the request body

    if (!clerkId || !name || !email) {
      return res.status(400).json({ message: "Missing user data in request" });
    }

    // Step 3: Check if the user already exists in the database
    let user = await userModel.findOne({ clerkId });

    if (!user) {
      // Create a new user
      user = await userModel.create({
        clerkId,
        name,
        email,
        imageUrl,
        role,
      });

      // console.log("✅ New user created:", user);
    } else {
      // Update existing user details
      user.name = name;
      user.email = email;
      user.imageUrl = imageUrl;
      user.role = role;
      await user.save();

      // console.log("♻️ Existing user updated:", user);
    }

    return res.status(200).json({ message: "User synced successfully", user });
  } catch (error) {
    // console.error("❌ Error syncing user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
