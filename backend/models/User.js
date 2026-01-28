const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
  },
  gameUID: {
    type: String,
    default: "XXXXXXXXXX",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
