import { Router } from "express";
import { createUser, loginUser } from "../controllers/userControllers.js";
import { userValidation } from "../middlewares/userMiddeware.js";

const router = Router();

router.post("/register", userValidation, createUser);
router.get("/login", loginUser);

export default router;