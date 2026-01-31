import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import tournamentRoutes from "./routes/tournamentRoutes.js";
import withdrawRoutes from "./routes/withdrawRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";

// Load env
dotenv.config();

// Connect DB
connectDB();

// App init
const app = express();

// Fix __dirname (ES module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (uploads)
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/tournaments", tournamentRoutes);
app.use("/api/withdraw", withdrawRoutes);
app.use("/api/notices", noticeRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GAMEZONE TOURNAMENTS API is running 🚀"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "API route not found" });
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 GAMEZONE TOURNAMENTS server running on port ${PORT}`);
});