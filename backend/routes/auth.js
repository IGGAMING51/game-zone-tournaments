const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/login", async (req, res) => {
  try {
    const { gameUid, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    res.json({
      message: "Login successful 🎮",
      user: {
        email: user.email,
        gameUid: user.gameUid
      }
    });

  } catch (err) {
    res.status(500).json({
      message: "Server error"
    });
  }
});


router.post("/signup", async (req, res) => {
  try {
    let { gameUid, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email & password required"
      });
    }

    if (!gameUid) {
      gameUid = "XXXXXXXXXX";
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      gameUid,
      email,
      password: hashed
    });

    await user.save();

    res.json({
      message: "Signup successful 🚀"
    });

  } catch (err) {
    res.status(500).json({
      message: "Signup failed"
    });
  }
});

