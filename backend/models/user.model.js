import mongoose from "mongoose";
// import { Event } from "./events.model"
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: { type: Boolean, default: "false" },
  applied: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      default: [],
    },
  ],
});
export const User = mongoose.model("User", userSchema);
