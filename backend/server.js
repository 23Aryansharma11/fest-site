import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import connect from "./db/connectdb.js";
import authRoutes from "./routes/auth.routes.js";
import regitrationRoutes from "./routes/registration.routes.js"
import adminRoutes from "./routes/admin.routes.js"
// import { connect } from "mongoose";
const app=express();
app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended:true}));
dotenv.config()

app.use("/api/auth",authRoutes)
app.use("/api/form",regitrationRoutes)
app.use("/api/admin",adminRoutes)
app.listen("3000",async()=>{
    await connect()
    console.log("Server running ")
})