import { Router } from "express";
import { getUserWithDB } from "../controller/authController.js";

export const userRouter = Router();

userRouter.get("/alluser", getUserWithDB);
