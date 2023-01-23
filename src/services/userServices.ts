import { newUser } from "../protocols/users.js";
import { getUserByName, getUserById } from "../repositories/userRepositorie.js";


async function findUserName (user: newUser){
    
    const userExist = await getUserByName(user);

    return userExist;
}

async function findUserId (user: newUser){

    const userExist = await getUserById(user);

    return userExist;
}

export {
    findUserName,
    findUserId
}