import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Please enter your password again"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);