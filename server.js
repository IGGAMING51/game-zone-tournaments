const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./backend/config/db");
const authRoutes = require("./backend/routes/auth");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));



/* Connect DB */
connectDB();

/* Routes */
app.use("/api/auth", require("./backend/routes/auth"));

/* Test Route */
app.get("/", (req, res) => {
  res.send("🎮 Game Zone Tournaments Server Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
