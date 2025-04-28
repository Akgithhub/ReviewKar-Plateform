import userModel from "../model/authModel.js";
import { clerkClient } from "@clerk/clerk-sdk-node";

export const syncUserWithDB = async (req, res) => {
  try {
    // 1. Get the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1];
    console.log("Token received: ", token ? "✓" : "✗");

    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }

    // 2. Get the userId from the authenticated user context provided by Clerk middleware
    const userId = req.auth.userId;
    console.log("UserId extracted: ", userId);

    if (!userId) {
      return res.status(401).json({ message: "User ID not found in authentication context" });
    }

    // 3. Get user details from Clerk
    try {
      const clerkUser = await clerkClient.users.getUser(userId);
      console.log("Clerk user fetched successfully:", clerkUser.id);
      
      // 4. Check if user exists in our database
      const existingUser = await userModel.findOne({ clerkId: userId });
      
      if (!existingUser) {
        // 5. If user doesn't exist, create a new user in our DB with the correct schema fields
        const newUser = new userModel({
          clerkId: userId,
          email: clerkUser.emailAddresses[0].emailAddress,
          name: `${clerkUser.firstName} ${clerkUser.lastName || ''}`.trim(),
          imageUrl: clerkUser.imageUrl,
          cards: [],
          role: "user",
          createdAt: new Date()
        });
        
        await newUser.save();
        console.log("✅ New user created in database:", userId);
        res.status(201).json({ 
          message: "User synced successfully", 
          data: newUser 
        });
      } else {
        // 6. Update existing user with latest info from Clerk
        existingUser.email = clerkUser.emailAddresses[0].emailAddress;
        existingUser.name = `${clerkUser.firstName} ${clerkUser.lastName || ''}`.trim();
        existingUser.imageUrl = clerkUser.imageUrl;
        
        await existingUser.save();
        console.log("✅ Existing user updated in database:", userId);
        res.status(200).json({ 
          message: "User data refreshed", 
          data: existingUser 
        });
      }
    } catch (error) {
      console.error("❌ Error retrieving user from Clerk:", error);
      return res.status(500).json({ message: "Failed to retrieve user details", error: error.message });
    }
  } catch (err) {
    console.error("❌ Sync error:", err);
    res.status(500).json({ message: "Failed to sync user", error: err.message });
  }
};
