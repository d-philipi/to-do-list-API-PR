import { Request, Response } from "express";
import { Task, TaskEntity } from "../protocols/task.js";
import { User } from "../protocols/users.js";
import { deleteTasks, insertTasks, updateTasks } from "../repositories/taskRepositorie.js";
import { findTasks } from "../services/taskServices.js";
import { findUser } from "../services/userServices.js";

async function createTask(req:Request, res:Response) {
    const task = req.body as Task;
    try {
        await insertTasks(task);

        return res.sendStatus(200);
      } catch (error) {

        return res.sendStatus(500).send({message: "Erro ao inserir a task!"});
      }
}

async function showTasks(req:Request, res:Response) {
    const user = req.body as User;
    try {
        const userNow = await findUser(user);
        const tasksUser = await findTasks(userNow);

        return res.sendStatus(200).send(tasksUser);
      } catch (error) {

        return res.sendStatus(500).send({message: "Erro ao mostrar as tasks!"});
      }
}

async function changeTask(req:Request, res:Response) {
    const task = req.body as TaskEntity;
    try {
        await updateTasks(task);

        return res.sendStatus(200);
      } catch (error) {

        return res.sendStatus(500).send({message: "Erro ao concluir a task!"});
      }
}

async function removeTask(req:Request, res:Response) {
    const task = req.body as TaskEntity;
    try {
        await deleteTasks(task);

        return res.sendStatus(200);
      } catch (error) {

        return res.sendStatus(500).send({message: "Erro ao deleter a task!"});
      }
}

export {
    createTask,
    showTasks,
    changeTask,
    removeTask
}