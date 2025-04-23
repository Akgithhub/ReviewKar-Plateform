import { Router } from "express";
import { syncUserWithDB } from "../controller/syncController.js";
export const syncRouter = Router();
syncRouter.get("/user-synced", syncUserWithDB);
