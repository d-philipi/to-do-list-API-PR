import { NextFunction, Request, Response } from "express";
import { taskSchema } from "../models/taskSchema.js";

async function taskValidation(req:Request, res:Response, next: NextFunction) {
    const task = req.body;
    const { error } = taskSchema.validate(task, { abortEarly: false });

    if(error){
        const errors = error.details.map((d) => d.message);
        res.send(errors).status(400);
        return;
    }

    next();
}

export{
    taskValidation,
}