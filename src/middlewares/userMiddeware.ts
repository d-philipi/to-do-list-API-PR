import { NextFunction, Request, Response } from "express";
import { userSchema } from "../models/userSchema.js";
import { findUser } from "../services/userServices.js";

async function userValidation(req:Request, res:Response, next: NextFunction) {
    const user = req.body;
    const { error } = userSchema.validate(user, { abortEarly: false });

    if(error){
        const errors = error.details.map((d) => d.message);
        res.sendStatus(400).send(errors);
        return;
    }

    const userNow = await findUser(user);

    if (!userNow){
        res.sendStatus(409);
        return;
    };

    next();
}

export {
    userValidation
}