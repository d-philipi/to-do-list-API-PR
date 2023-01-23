import { Router } from "express";
import { createUser, loginUser } from "../controllers/userControllers.js";
import { userValidation } from "../middlewares/userMiddleware.js";

const router = Router();

router.post("/register", userValidation, createUser);
router.post("/login", loginUser);

export default router;