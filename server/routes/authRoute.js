import { Router } from "express";
import { syncUserWithDB, getUserWithDB } from "../controller/authController.js";

export const userRouter = Router();

userRouter.get("/sync-user", syncUserWithDB);
userRouter.get("/alluser", getUserWithDB);

// userRouter.get("/sync-user",requireAuth(), syncUserWithDB);
// route.get();
// route.delete();
// route.patch();
// route.post();
