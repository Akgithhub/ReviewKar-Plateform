import { Router } from "express";
import { getUserWithDB } from "../controller/authController.js";

export const userRouter = Router();

// userRouter.get("/sync-user", syncUserWithDB);
userRouter.get("/alluser", getUserWithDB);
