import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import Connection from "../db/connection.js";
import authRoutes from "../routes/authroutes.js";
import userRoutes from "../routes/userroutes.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

// add middlewares
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// add routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// set up MongoDB connection
Connection();

// listening to server connection
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
