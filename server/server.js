// Imports
import express from "express";
import { configDotenv } from "dotenv";
import dbConnect from "./helper/dbConnect.js";
import { userRouter } from "./routes/authRoute.js";
import { clerkMiddleware } from "@clerk/express";
import {ClerkExpressRequireAuth} from "@clerk/clerk-sdk-node"
// Load environment variables
configDotenv();

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Connect to database
dbConnect();

// Clerk middleware (authentication layer)
app.use(clerkMiddleware({ secretKey: process.env.CLERK_SECRET_KEY }));
app.use(clerkMiddleware({ secretKey: process.env.CLERK_PUBLISH_KEY }));

// JSON body parsing
app.use(express.json());

// Protect routes with Clerk authentication
app.use(ClerkExpressRequireAuth());

// Routes
app.use("/api/user", userRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
