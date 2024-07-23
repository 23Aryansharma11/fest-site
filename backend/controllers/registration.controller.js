import { Event } from "../models/events.model.js";
import { User } from "../models/user.model.js";

export const submitForm=async(req,res)=>{
    try{
    const {eventName,contact,player1Name,player2Name,player3Name,player4Name,email,year,branch,transaction}=req.body;
    console.log(eventName)
    const user=await User.findById(req.user._id).select("-password")
    if(!user){
        return res.status(400).json({error:"User not authorized"});
    }
    if(!eventName||!player1Name||!email||!year||!branch||!transaction){
        return res.status(400).json({message:"Enter required fields"});
    }
    const event=new Event({
        eventName,
        contact,
        player1Name,
        player2Name,
        player3Name,
        player4Name,
        email,
        year,
        branch,
        transaction,
        
    })
    if(!event){
        return res.status(400).json({error:"Event not created"})
    }

   await event.save()
   const eventid=event._id.toString();
   console.log(eventid)
   console.log("user is",user)
 user.applied.push(eventid);
 await user.save();
   return res.status(200).json(event);
    }catch(error){
        console.log("Error in submit form controller")
return  res.status(500).json({error:"internal server error"})
    }}