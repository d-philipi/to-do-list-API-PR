import { Request, Response } from "express";
import { newUser, User } from "../protocols/users.js";
import { insertUser } from "../repositories/userRepositorie.js";
import { findUserName } from "../services/userServices.js";

async function createUser(req:Request, res:Response) {
    const user = req.body as User;
    try {
        await insertUser(user);

        return res.sendStatus(200);
      } catch (error) {

        return res.send({message: "Erro ao registrar o usuário"}).status(500);
      }
}

async function loginUser(req:Request, res:Response) {
    const { name } = req.body;
    try {        
        const result = await findUserName(name);

        return res.send(result);
      } catch (error) {

        return res.send({message: "Usuário não, encontrado"}).status(500);
      }
}

export {
    createUser,
    loginUser
}