const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Home route (test)
app.get("/", (req, res) => {
  res.send("🎮 Game Zone Tournaments Server Running");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Use PORT from Render
const
  
