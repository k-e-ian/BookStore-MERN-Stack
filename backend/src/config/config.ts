import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDBURL = process.env.MONGO_URI as string;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBURL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

export default connectDB;
