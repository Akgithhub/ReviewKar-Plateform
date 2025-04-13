// Imports
import express from "express";
import { configDotenv } from "dotenv";
import dbConnect from './helper/dbConnect.js'


// Variables
configDotenv();
const port = process.env.PORT || 3000;
const app = express();

// Connect to database
dbConnect();



app
  .get("/", (req, res) => {
    res.send("Hello world");
  })
  .listen(port, () => {
    console.log(`server is running at ${port}`);
  });
