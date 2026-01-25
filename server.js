const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("🎮 Game Zone + MongoDB Connected");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
