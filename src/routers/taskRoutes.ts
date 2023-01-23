import { Router } from "express";
import { changeTask, createTask, removeTask, showTasks } from "../controllers/taskControllers.js";
import { taskValidation } from "../middlewares/taskMiddleware.js";

const router = Router();

router.post("/task", taskValidation, createTask);
router.get("/tasks/:id", showTasks);
router.delete("/task/:id", removeTask);
router.put("/task/:id", changeTask);

export default router;