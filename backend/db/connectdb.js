import mongoose from "mongoose";
const connect=async()=>{
    try{
    const conn=await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log("db Connected")
    }catch(err){
      console.log(err)
    }
}
export default connect;