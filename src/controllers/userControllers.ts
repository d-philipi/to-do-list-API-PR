import { Request, Response } from "express";
import { newUser, User } from "../protocols/users.js";
import { insertUser } from "../repositories/userRepositorie.js";
import { findUser } from "../services/userServices.js";

async function createUser(req:Request, res:Response) {
    const user = req.body as User;
    try {
        await insertUser(user);

        return res.sendStatus(200);
      } catch (error) {

        return res.sendStatus(500).send({message: "Erro ao registrar o usuário"});
      }
}

async function loginUser(req:Request, res:Response) {
    const name = req.body as newUser;
    try {
        const result = await findUser(name);

        return res.sendStatus(200).send(result);
      } catch (error) {

        return res.sendStatus(500).send({message: "Usuário não, encontrado"});
      }
}

export {
    createUser,
    loginUser
}