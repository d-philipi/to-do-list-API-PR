import { getUserByName, getUserById } from "../repositories/userRepositorie.js";


async function findUserName (name: string){
    
    const userExist = await getUserByName(name);

    return userExist;
}

async function findUserId (id: number){

    const userExist = await getUserById(id);

    return userExist;
}

export {
    findUserName,
    findUserId
}