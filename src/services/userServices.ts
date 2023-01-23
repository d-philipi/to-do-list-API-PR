import { User } from "../protocols/users";
import { getUser } from "../repositories/taskRepositorie";

async function findUser (user: User){
    const userExist = await getUser(user);

    if(userExist.rowCount === 0){
        throw Error;
    }

    return userExist.rows[0];
}

export {
    findUser,
}