import { Router } from "express";
import syncUserWithDB from "../controller/authController.js";
export const userRouter = Router();
userRouter.post("/sync-user",syncUserWithDB )
// route.get();
// route.delete();
// route.patch();
// route.post();