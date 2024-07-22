import { Event } from "../models/events.model.js";

export const Verify=async(req,res)=>{
    try{
const {id}=req.params;
console.log(id)
const event=await Event.findById(id)
console.log(event)
if(!event){
    return res.status(400).json({error:"Event not found"})
}
event.status="accepted";
await event.save()
res.status(200).json("application Verified")
    }catch(error){
        return res.status(500).json({error:"Internal server error"})
    }
}

export const reject=async(req,res)=>{
    try{
const {id}=re.params;
const event=Event.findById(id)
if(!event){
    return res.status(400).json({error:"Event not found"})
}
event.status="rejected";
await event.save()
res.status(200).json("application Rejected")
    }catch(error){
        return res.status(500).json({error:"Internal server error"})
    }
}

export const getAll=async()=>{
    try{
     const events=await Event.find();
     if(!events){
       return res.status(400).json({error:"There are no submission of events"})
     }
     return res.status(200).json(events)
    }catch(err){
        console.log("error in getAll route")
        res.status(500).json({error:"Internal server error"})
    }
}