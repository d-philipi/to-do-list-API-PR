import { Router } from "express";
import { changeTask, createTask, removeTask, showTasks } from "../controllers/taskControllers";
import { taskValidation } from "../middlewares/taskMiddleware";

const router = Router();

router.post("/task", taskValidation, createTask);
router.get("/tasks/:id", showTasks);
router.delete("/tasks/:id", removeTask);
router.put("/tasks/:id", changeTask);

export default router;