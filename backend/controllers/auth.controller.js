import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { generateToken } from "../lib/utils/generateToken.js";
import JWT from "jsonwebtoken";
export const signUp = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ error: "Please enter every field" });
    }
    const emailfound = await User.findOne({ email });
    if (emailfound) {
      return res
        .status(400)
        .json({ error: "Email already exists. Kindly Login!" });
    }

    const salt = 10;
    const protetetedpass = await bcrypt.hash(password, salt);
    const user = new User({
      fullName,
      email,
      password: protetetedpass,
    });
    if (!user) {
      return res.status(400).json({ error: "User not created" });
    }
    await user.save();
    generateToken(user._id, res);
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.status(400).json({ error: "No such user found" });
    }

    const comparepass = await bcrypt.compare(password, userFound.password);
    if (!comparepass) {
      return res
        .status(400)
        .json({ error: "Enter valid username or password" });
    }

    generateToken(userFound._id, res);
    return res.status(200).json({
      _id: userFound._id,

      fullName: userFound.fullName,
      email: userFound.email,
      isAdmin: userFound.isAdmin,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal server error occured" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.json({ message: "Logged Out Successfully" });
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};
export const getMe = async (req, res) => {
  console.log("in getme");
  try {
    const userid = req.user.id.toString();
    console.log(userid);
    const user = await User.findById(userid).populate("applied");
    if (!user) {
      res.status(400).json({ error: "user not found" });
    }
    return res.status(200).json(user.applied);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
