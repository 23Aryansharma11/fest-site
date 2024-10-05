import { Collab } from "../models/collabs.model.js";
import { Event } from "../models/events.model.js";
import { User } from "../models/user.model.js";
import sendEmail from "./sendMail.controller.js";

export const submitForm = async (req, res) => {
  console.log("inside collab controller");
  try {
    const { name, email, contact, transaction } = req.body;
    // console.log(eventName)
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(400).json({ error: "User not authorized" });
    }
    if (!name || !contact || !email || !transaction) {
      return res.status(400).json({ message: "Enter required fields" });
    }
    const collab = new Collab({
      name,
      email,
      contact,
      transaction,
    });
    if (!collab) {
      return res.status(400).json({ error: "collab not created" });
    }

    await collab.save();
    const collabid = collab._id.toString();
    console.log(collabid);
    console.log("user is", user);
    user && user.collabs.push(collabid);
    await user.save();
    //  await sendEmail(email,)
    return res.status(200).json(collab);
  } catch (error) {
    console.log(error);
    console.log("Error in submit form controller");
    return res.status(500).json({ error: "internal server error" });
  }
};

export const UnauthSubmitForm = async (req, res) => {
  console.log("inside collab controller");
  try {
    const { name, email, contact, transaction } = req.body;
    // console.log(eventName)
    // const user=await User.findById(req.user._id).select("-password")
    // if(!user){
    //     return res.status(400).json({error:"User not authorized"});
    // }
    if (!name || !contact || !email || !transaction) {
      return res.status(400).json({ message: "Enter required fields" });
    }
    const collab = new Collab({
      name,
      email,
      contact,
      transaction,
    });
    if (!collab) {
      return res.status(400).json({ error: "collab not created" });
    }

    await collab.save();
    const collabid = collab._id.toString();
    console.log(collabid);

    //  user && user.collabs.push(collabid);
    //  await user.save();
    //  await sendEmail(email,)
    return res.status(200).json(collab);
  } catch (error) {
    console.log(error);
    console.log("Error in submit form controller");
    return res.status(500).json({ error: "internal server error" });
  }
};
