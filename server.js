const express = require("express");
const path = require("path");
const app = express();

require("./config/db");

app.use(express.json());

// ✅ FIXED PATH
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Server running on", PORT));