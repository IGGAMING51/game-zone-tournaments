import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    gameName: {
      type: String,
      required: true
    },
    gameUID: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);