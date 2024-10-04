import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import connect from "./db/connectdb.js";
import authRoutes from "./routes/auth.routes.js";
import regitrationRoutes from "./routes/registration.routes.js"
import path from "path"
import adminRoutes from "./routes/admin.routes.js"
// import { connect } from "mongoose";
const app=express();
app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended:true}));
dotenv.config()
const __dirname=path.resolve()
app.use("/api/auth",authRoutes)
app.use("/api/form",regitrationRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/collab",collabRoutes)
app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})
app.listen("5000",async()=>{
    await connect()
    console.log("Server running ")
})