import { prisma } from "../database/db.js";
import { newUser, User } from "../protocols/users.js";
import { Prisma, users } from "@prisma/client";

function insertUser(user: User): Prisma.Prisma__usersClient<users, never>{

    const result = prisma.users.create({
        data : {
            name: user.name,
            photo: user.photo
        }
    })

    return result;
};

function getUserByName ( name: string ): Prisma.Prisma__usersClient<users, never>{

    const result = prisma.users.findUnique({
        where:{
            name: name
        }
    });

    return result;
};

function getUserById ( id: number ): Prisma.Prisma__usersClient<users, never>{
    
    const result = prisma.users.findUnique({
        where:{
            id: id
        }
    });

    return result;
};

export {
    insertUser,
    getUserByName,
    getUserById
}