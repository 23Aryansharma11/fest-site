import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
export const protectRoute=async(req,res,next)=>{
    try{
    const token=await req.cookies.jwt;
    if(!token){
      return  res.status(400).json({error:"No token generated or unauthorised user"})
    }
    const decode=jwt.verify(token,process.env.JWTSECRET,(err,res)=>{
        if(err){
            return "token expired";
        }
        return res;
    });

    if(decode==="token expired"){
        return res.status(401).json({error:"Token expired"});
    }
    if(!decode){
      return  res.status(400).json({error:"User not verified"});

    }
    const user=await User.findById(decode.userId).select("-password");
if(!user){
   return res.status(400).json({error:"No user found"});

}
req.user=user;
next()
    }catch(err){
console.log(err)
return res.status(500).json({error:"Internal Server Error"});
    }
}


export const protectCollabRoute = async (req, res, next) => {
    try {
      const token = req.cookies.jwt;
      if (!token) {
        // Return JSON indicating the need to redirect
        return res.status(401).json({ redirect: "/api/collab/unauthorisedcollab" });
      }
  
      const decoded = jwt.verify(token, process.env.JWTSECRET);
      if (!decoded) {
        return res.status(401).json({ redirect: "/api/collab/unauthorisedcollab" });
      }
  
      const user = await User.findById(decoded.userId).select("-password");
      if (!user) {
        return res.status(401).json({ redirect: "/api/collab/unauthorisedcollab" });
      }
  
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ redirect: "/api/collab/unauthorisedcollab" });
      }
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  


export const protectAdminRoute=async(req,res,next)=>{
    try{
    const user=await req.user;
    console.log(user)
    if(user.isAdmin===false){
        return res.status(401).json({error:"You dont have admin permission "})
    }
 
next()
    }catch(err){
console.log(err)
return res.status(500).json({error:"Internal Server Error"});
    }
}