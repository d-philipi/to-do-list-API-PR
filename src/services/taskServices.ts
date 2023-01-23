import { UserEntity } from "../protocols/users";
import { getTasks } from "../repositories/taskRepositorie";

async function findTasks (user: UserEntity){
    
    const tasks = await getTasks(user);

    return tasks.rows;
}

export {
    findTasks,
}