import userModel from "../model/authModel.js";
import { getAuth } from "@clerk/express";
const syncUserWithDB = async (req, res) => {
  const { clerkUserId } = getAuth(req);
  console.log("clerkUserId", clerkUserId);
};
export default syncUserWithDB;
