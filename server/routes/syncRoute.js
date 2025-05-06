import { Router } from "express";
import { syncUserWithDB, updateUserwithCompanyDetails } from "../controller/syncController.js";
import { clerkMiddleware } from "@clerk/express";
export const syncRouter = Router();

syncRouter.post("/user-synced", clerkMiddleware(), syncUserWithDB);
syncRouter.patch(
  "/update-user-comapny-details",
  updateUserwithCompanyDetails
);
