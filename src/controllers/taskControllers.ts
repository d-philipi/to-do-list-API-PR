import { Request, Response } from "express";

async function showTasks(req:Request, res:Response) {
    return "Tasks...";
}

async function changeTask(req:Request, res:Response) {
    return "Task changed...";
}

async function createTask(req:Request, res:Response) {
    return "Task created...";
}

async function deleteTask(req:Request, res:Response) {
    return "Task deleted...";
}

export {
    showTasks,
    changeTask,
    createTask,
    deleteTask
}