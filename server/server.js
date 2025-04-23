// Imports
import express from "express";
import { configDotenv } from "dotenv";
import dbConnect from "./helper/dbConnect.js";
import { userRouter } from "./routes/authRoute.js";
import { cardRouter } from "./routes/cardRoute.js";
import { syncRouter } from "./routes/syncRoute.js";
import { clerkMiddleware } from "@clerk/express";
import {ClerkExpressRequireAuth} from "@clerk/clerk-sdk-node"
import dotenv from "dotenv";
// Load environment variables
configDotenv();
dotenv.config();
// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Connect to database
dbConnect();

// Clerk middleware (authentication layer)
app.use(clerkMiddleware({ secretKey: process.env.CLERK_SECRET_KEY }));
app.use(clerkMiddleware({ secretKey: process.env.CLERK_PUBLISHABLE_KEY }));

// JSON body parsing
app.use(express.json());

// Protect routes with Clerk authentication
// app.use(ClerkExpressRequireAuth());

// Routes
app.use("/api/user", userRouter);
app.use("/api/card", cardRouter);
app.use("/api/webhooks",syncRouter)

// Root route
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
