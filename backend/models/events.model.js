import mongoose from "mongoose"
const eventSchema=new mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    player1Name:{
        type:String,
        required:true,
        
        
    },
    player2Name:{
        type:String,
       default:""
    },
    player3Name:{
        type:String,
        default:""
    },
    player4Name:{
        type:String,
     default:""
    },
    email:{
    type:String,
    required:true,
    },
    contact:{
        type:String,
            required:true
        
    },
    year:{
        type:String,
        required:true,
        
    },
    branch:{
        type:String,
        required:true,

    },
    transaction:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending"
    }


},{timestamps:true})
export const Event=mongoose.model("Event",eventSchema);