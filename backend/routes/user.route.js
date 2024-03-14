import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserForSidebar, searchUserForSidebar } from "../controllers/user.controller.js";


const router = express.Router();

router.get("/" ,protectRoute, getUserForSidebar);
router.get("/search", protectRoute , searchUserForSidebar);

export default router;