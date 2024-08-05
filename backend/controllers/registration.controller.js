import { Event } from "../models/events.model.js";
import { User } from "../models/user.model.js";
import sendEmail from "./sendMail.controller.js";

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
 await sendEmail(email,eventName)
   return res.status(200).json(event);
    }catch(error){
        console.log("Error in submit form controller")
return  res.status(500).json({error:"internal server error"})
    }}

    export const prevData=async(req,res)=>{
        console.log("hello")
       const {id}=req.params;
       console.log(id)
       try{
        const event=await Event.findById(id);
        if(!event){
            return res.status(400).json({error:"No such event found"});

        }

        return await res.status(201).json(event);

       }catch(err){
         res.status(500).json({error:"Internal server error"});
         console.log("Error in update route")
         
       }
    }

    export const update=async(req,res)=>{
        const {id}=req.params;
        const {contact}=req.body;
        const {player1Name}=req.body;
        const {player2Name}=req.body;
        const {player3Name}=req.body;
        const {player4Name}=req.body;
        const {year}=req.body;
        const {branch}=req.body;
        const {transaction}=req.body;
     try{
     const event=await Event.findById(id)
     if(!event){
        return res.status(400).json({error:"Event not found"});

     }
     event.contact=contact||event.contact
     event.player1Name=player1Name||event.player1Name
     event.player2Name=player2Name||event.player2Name
     event.player3Name=player3Name||event.player3Name
     event.player4Name=player4Name||event.player4Name
     event.year=year||event.year
     event.branch=branch||event.branch
     event.transaction=transaction||event.transaction
    
await event.save();
return res.status(200).json("Event updated")
     }catch(error){
        res.status(500).json({error:"Internal server error"});
     }
    }