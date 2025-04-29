import { Router } from "express";
import { syncUserWithDB } from "../controller/syncController.js";
import { clerkMiddleware } from "@clerk/express";
export const syncRouter = Router();

syncRouter.post("/user-synced",clerkMiddleware(), syncUserWithDB);
