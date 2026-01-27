const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./backend/config/db");
const authRoutes = require("./backend/routes/auth");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Connect DB */
connectDB();

/* Routes */
app.use("/api/auth", authRoutes);

/* Test Route */
app.get("/", (req, res) => {
  res.send("🎮 Game Zone Tournaments Server Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
