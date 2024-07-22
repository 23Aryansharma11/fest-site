import express from "express"
import { getAll, reject, Verify } from "../controllers/admin.controller.js";
import { protectAdminRoute, protectRoute } from "../middleware/protectRoutes.js";
const router=express.Router();
router.post("/verify/:id",protectRoute,protectAdminRoute,Verify)
router.post("/reject/:id",protectRoute,protectAdminRoute,reject)
router.post("/getall",protectAdminRoute,getAll)
export default router