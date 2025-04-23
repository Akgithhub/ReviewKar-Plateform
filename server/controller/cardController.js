import cardModel from "../model/cardModel.js";
import { clerkClient, getAuth } from "@clerk/express";
export const createCard = async () => {
  const { userId } = getAuth(req);
  const user = await clerkClient.users.getUser(userId);
  console.log(user);
};
