const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

/* =====================
   SIGNUP
===================== */
router.post("/signup", async (req, res) => {
  try {
    let { gameUid, email, password } = req.body;

    // 🔹 Game UID default
    if (!gameUid || gameUid.trim() === "") {
      gameUid = "XXXXXXXXXX";
    }

    // 🔹 Game UID length check (if provided)
    if (gameUid !== "XXXXXXXXXX") {
      if (!/^\d{9,11}$/.test(gameUid)) {
        return res.status(400).json({
          error: "Game UID must be 9, 10, or 11 digits"
        });
      }
    }

    // 🔹 Email already exists?
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      gameUid,
      email,
      password: hashedPassword,
      coins: 0
    });

    await newUser.save();

    res.json({ message: "Signup successful 🎉" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/* =====================
   LOGIN
===================== */
router.post("/login", async (req, res) => {
  try {
    const { gameUid, email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Wrong password" });
    }

    res.json({
      message: "Login successful 🎮",
      gameUid: user.gameUid,
      coins: user.coins
    });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
