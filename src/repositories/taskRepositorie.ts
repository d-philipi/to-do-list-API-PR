import { prisma } from "../database/db.js";
import { UserEntity } from "../protocols/users.js";
import { Task } from "../protocols/task.js";
import { Prisma, PrismaPromise, tasks } from "@prisma/client";

function insertTasks (task: Task): Prisma.Prisma__tasksClient<tasks, never>{

    const result = prisma.tasks.create({
        data: {
            userId: task.userId,
            text: task.text
        }
    })

    return result;
};

function getTasks ( user: UserEntity ): PrismaPromise<tasks[]>{

    const result = prisma.tasks.findMany({
        where: {
            userId: user.id
        }
    })

    return result;
};

function getTask ( id: number ): PrismaPromise<tasks[]>{

    const result = prisma.tasks.findMany({
        where: {
            id: id
        }
    })

    return result;
};

function updateTasks (id: number): Prisma.Prisma__tasksClient<tasks, never>{

    const result = prisma.tasks.update({
        where: {
            id: id
        },
        data: {
            done: true
        }
    })

    return result;
};

function deleteTasks (id: number): Prisma.Prisma__tasksClient<tasks, never>{

    const result = prisma.tasks.delete({
        where : {
            id: id
        }
    })

    return result;
};

export {
    insertTasks,
    getTasks,
    getTask,
    updateTasks,
    deleteTasks
}