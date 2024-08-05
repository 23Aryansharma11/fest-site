import express from "express"
import { protectRoute } from "../middleware/protectRoutes.js"
import { prevData, submitForm, update } from "../controllers/registration.controller.js"
const router=express.Router()
router.post("/submit",protectRoute,submitForm);
router.get("/getupdate/:id",protectRoute,prevData)
router.post("/update/:id",protectRoute,update)
export default router;