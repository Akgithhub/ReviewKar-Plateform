import mongoose from "mongoose";

/**
 * Establishes a connection to the MongoDB database
 * @returns {Promise<void>}
 */
const dbConnect = async () => {
  // Check if already connected to avoid multiple connections
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to database");
    return;
  }

  try {
    // Get DB URL from environment variables
    const dbUrl = process.env.DB_STRING;

    // Validate DB URL exists
    if (!dbUrl) {
      throw new Error("Database URL not found in environment variables");
    }

    // MongoDB connection options
    // const options = {
    //   maxPoolSize: 10, // Adjust based on your needs
    //   connectTimeoutMS: 10000, // 10 seconds timeout
    //   serverSelectionTimeoutMS: 5000,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // };

    // Establish connection
    const connection = await mongoose.connect(dbUrl);

    // Log successful connection with more details
    console.log(
      `Database connected successfully: ${connection.connection.host}`
    );

    // Optional: Set up connection event listeners
    mongoose.connection.on("disconnected", () => {
      console.log("Database connection disconnected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Database connection error:", err);
    });
  } catch (error) {
    // More detailed error logging
    console.error("Database connection failed:", {
      message: error.message,
      stack: error.stack,
    });

    // Optionally re-throw error for handling by caller
    throw error;
  }
};

export default dbConnect;
