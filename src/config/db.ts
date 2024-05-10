import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
const MONGO_URL = process.env.MONGO_URL || "";
export const Connection = mongoose.connect(MONGO_URL)