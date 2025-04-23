import { Router } from "express";
import { syncUserWithDB } from "../controller/syncController.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node"; 

export const syncRouter = Router();

syncRouter.post("/user-synced", ClerkExpressRequireAuth(), syncUserWithDB);
