import mongoose from "mongoose";
const collabSchema = new mongoose.Schema(
  {
   name:{
    type: String,
      required: true,
   },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
   
    transaction: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);
export const Collab = mongoose.model("Collab", collabSchema);
