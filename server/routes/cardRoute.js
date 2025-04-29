import { Router } from "express";
import { createCard, getAllCard } from "../controller/cardController.js";
import { clerkMiddleware } from "@clerk/express";

export const cardRouter = Router();
cardRouter.post("/create-card",clerkMiddleware(),createCard)
cardRouter.get("/cards",getAllCard)