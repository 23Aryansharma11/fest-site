import express from "express";
import { submitForm, UnauthSubmitForm } from "../controllers/collab.controller.js";
import { protectCollabRoute } from "../middleware/protectRoutes.js";

const router = express.Router();

// Protected route for form submission
router.post("/submit", protectCollabRoute, submitForm);

// Unauthorised route handling
router.post("/unauthorisedcollab", UnauthSubmitForm);

export default router;
