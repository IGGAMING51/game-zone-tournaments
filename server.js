import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import User from "./models/User.js";

dotenv.config();

/* Fix __dirname for ES Modules */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Serve frontend files */
app.use(express.static(path.join(__dirname, "public")));

/* Home route */
app.get("/", (req, res) => {
  res.send("Game Zone API running 🚀");
});

/* Signup page */
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});

/* Signup API */
app.post("/api/signup", async (req, res) => {
  try {
    const { gameName, gameUID, email, password } = req.body;

    if (!gameName || !gameUID || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { gameUID }]
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email or Game UID already registered"
      });
    }

    await User.create({
      gameName,
      gameUID,
      email,
      password
    });

    res.status(201).json({
      message: "Signup successful ✅"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

/* MongoDB connection */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error:", err));

/* Start server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});