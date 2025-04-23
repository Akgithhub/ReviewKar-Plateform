import userModel from "../model/authModel.js";
import { clerkClient } from "@clerk/clerk-sdk-node";

export const syncUserWithDB = async (req, res) => {
  try {
    const users = await clerkClient.users.getUserList({ limit: 100 }); // Get all users

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    const syncedUsers = [];

    for (const user of users) {
      const existing = await userModel.findOne({ id: user.id });

      if (!existing) {
        const newUser = await userModel.create({
          clerkId: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.emailAddresses[0]?.emailAddress || "",
          phone: user.phoneNumbers[0]?.phoneNumber || "",
          imageUrl: user.imageUrl,
        });
        syncedUsers.push(newUser);
      }
    }

    res.status(200).json({
      message: "Users synced successfully",
      count: syncedUsers.length,
      syncedUsers,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Error syncing users",
      error: error.message,
    });
  }
};
