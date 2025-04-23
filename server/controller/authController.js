import userModel from "../model/authModel.js";
// import { getAuth } from "@clerk/express";
// import { clerkClient } from "@clerk/clerk-sdk-node";
// import { clerkClient } from "@clerk/clerk-sdk-node";

export const getUserWithDB = async (req, res) => {
  try {
    const user = await userModel.find();
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({
      message: "Users fetched successfully",
      users: user,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Error getting all users",
      error: error.message,
    });
  }
};
