import express from "express"
import { getMe, login, logout, signUp } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/protectRoutes.js"
const router=express.Router()
router.post("/login",login)
router.post("/signup",signUp)
router.get("/logout",logout)
router.get("/getme",protectRoute,getMe)
export default router;