import express from "express"
import { protectRoute } from "../middleware/protectRoutes.js"
import { submitForm } from "../controllers/registration.controller.js"
const router=express.Router()
router.post("/submit",protectRoute,submitForm);
export default router;
