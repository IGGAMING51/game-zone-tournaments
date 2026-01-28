const express = require("express");
const router = express.Router();
const User = require("../models/User");

// SIGNUP API
router.post("/signup", async (req, res) => {
  try {
    const { gameName, gameUid, email, password } = req.body;

    if (!gameName || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      gameName,
      gameUid,
      email,
      password
    });

    await user.save();

    res.status(201).json({ message: "Signup successful" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;