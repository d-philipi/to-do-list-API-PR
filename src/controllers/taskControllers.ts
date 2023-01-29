import { Request, Response } from "express";
import { Task } from "../protocols/task.js";
import { deleteTasks, insertTasks, updateTasks } from "../repositories/taskRepositorie.js";
import { findTasks } from "../services/taskServices.js";
import { findUserId } from "../services/userServices.js";

async function createTask(req:Request, res:Response) {
    const task = req.body as Task;
    try {
        await insertTasks(task);

        return res.sendStatus(200);
      } catch (error) {

        return res.status(500).send({message: "Erro ao inserir a task!"});
      }
}

async function showTasks(req:Request, res:Response) {
    const {id} = req.params;
    
    try {
        const userNow = await findUserId(Number(id));
        const tasksUser = await findTasks(userNow);

        return res.status(200).send(tasksUser);
      } catch (error) {

        return res.status(500).send({message: "Erro ao mostrar as tasks!"});
      }
}

async function changeTask(req:Request, res:Response) {
    const { id }  = req.params;
    try {

        await updateTasks(Number(id));

        return res.sendStatus(200);
      } catch (error) {

        return res.status(500).send({message: "Erro ao concluir a task!"});
      }
}

async function removeTask(req:Request, res:Response) {
    const { id }  = req.params;
    try {
        await deleteTasks(Number(id));

        return res.sendStatus(200);
      } catch (error) {

        return res.status(500).send({message: "Erro ao deleter a task!", error});
      }
}

export {
    createTask,
    showTasks,
    changeTask,
    removeTask
}