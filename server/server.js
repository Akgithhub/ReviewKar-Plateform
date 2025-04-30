// Imports
import express from "express";
import { configDotenv } from "dotenv";
import dbConnect from "./helper/dbConnect.js";
import { userRouter } from "./routes/authRoute.js";
import { cardRouter } from "./routes/cardRoute.js";
import { syncRouter } from "./routes/syncRoute.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import dotenv from "dotenv";
import ImageKit from "imagekit";

// Load environment variables
configDotenv();
dotenv.config();
// Create Express app
const app = express();
const port = process.env.PORT || 3001;
const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});
// Set up CORS to allow requests from the client
app.use(
  cors({
    origin: "http://localhost:5173", // Change this to your frontend URL
    credentials: true, // Allow sending cookies
    httpOnly: true,
    methods: "GET,POST,PUT,DELETE,PATCH",
  })
);

// Connect to database
dbConnect();

// Clerk middleware (authentication layer)
app.use(express.json());
app.use(clerkMiddleware({ secretKey: process.env.CLERK_SECRET_KEY }));

// Routes
app.use("/api/user", userRouter);
app.use("/api/card", cardRouter);
app.use("/api/syncuser", syncRouter);

// Image Upload route
app.get('/upload', function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
