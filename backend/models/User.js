const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  gameUid: {
    type: String,
    default: "XXXXXXXXXX"   // 🔹 default UID
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  coins: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("User", userSchema);
