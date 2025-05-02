import { Router } from "express";
import {
  createCard,
  getAllCard,
  deleteCard,
  updateCard,
  getCardById,
  getCardsByUserId,
  getCardByCategory,
} from "../controller/cardController.js";
import { clerkMiddleware } from "@clerk/express";

export const cardRouter = Router();
// cardRouter.post("/create-card",clerkMiddleware(),createCard)
cardRouter.post("/create-card", createCard);
cardRouter.get("/cards", getAllCard);
cardRouter.delete("/delete-card/:id", clerkMiddleware(), deleteCard);
cardRouter.patch("/update-card/:id", clerkMiddleware(), updateCard);
cardRouter.get("/get-card/:id", clerkMiddleware(), getCardById);
cardRouter.get("/get-cards-by-user/:id", clerkMiddleware(), getCardsByUserId);
cardRouter.get(
  "/get-card-by-category/:category",
  clerkMiddleware(),
  getCardByCategory
);
