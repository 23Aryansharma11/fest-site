import express from "express"
import { getMe, login, logout, signUp } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/protectRoutes.js"
import { submitForm } from "../controllers/collab.controller.js";

router.get("/submit",submitForm)
export default router;