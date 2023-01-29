import { NextFunction, Request, Response } from "express";
import { userSchema } from "../models/userSchema.js";
import { findUserName } from "../services/userServices.js";

async function userValidation(req:Request, res:Response, next: NextFunction) {
    const user = req.body;
    const { error } = userSchema.validate(user, { abortEarly: false });

    if(error){
        const errors = error.details.map((d) => d.message);
        res.status(400).send(errors);
        return;
    }

    const userNow = await findUserName(user);

    if (userNow){
        res.status(409).send({mensage: "Esse usuário já existe."});
        return;
    };

    next();
}

export {
    userValidation
}