import { UserEntity } from "../protocols/users.js";
import { getTasks } from "../repositories/taskRepositorie.js";

async function findTasks (user: UserEntity){
    
    const tasks = await getTasks(user);

    return tasks.rows;
}

export {
    findTasks,
}