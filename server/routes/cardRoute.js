import { Router } from "express";
import { createCard } from "../controller/cardController.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node"; 

export const cardRouter = Router();
cardRouter.post("/create-card", ClerkExpressRequireAuth(),createCard)
