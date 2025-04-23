import { Router } from "express";
import { createCard } from "../controller/cardController.js";
import { clerkClient, requireAuth, getAuth } from '@clerk/express'
export const cardRouter = Router();
cardRouter.post("/create-card",  requireAuth(),createCard)
