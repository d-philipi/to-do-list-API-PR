import { newUser } from "../protocols/users.js";
import { getUserByName, getUserById } from "../repositories/userRepositorie.js";


async function findUser (user: newUser){

    let userExist;

    switch (user) {
        case user.name:
            userExist = await getUserByName(user);
            break;
        case user.id:
            userExist = await getUserById(user);
            break;
        default:
            break;
    }
    

    if(userExist.rowCount === 0){
        throw Error;
    }

    return userExist.rows[0];
}

export {
    findUser,
}