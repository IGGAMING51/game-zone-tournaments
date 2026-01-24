const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🎮 Game Zone Tournaments Server Running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
