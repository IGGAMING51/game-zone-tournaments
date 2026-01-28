// ===== IMPORTS =====
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// ===== CONFIG =====
dotenv.config();
const app = express();

// ===== MIDDLEWARE =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔥 THIS LINE IS IMPORTANT (FRONTEND)
app.use(express.static(path.join(__dirname, "public")));

// ===== ROUTES =====
app.use("/api/auth", require("./backend/routes/auth"));

// ===== DEFAULT ROUTE =====
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// ===== DATABASE =====
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Mongo Error:", err));

// ===== SERVER START =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
