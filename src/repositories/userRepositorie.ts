import { DB } from "../database/db.js";
import { QueryResult } from "pg";
import { newUser, User, UserEntity } from "../protocols/users.js";

function insertUser(user: User){
    const result = DB.query(
        'INSERT INTO users (name, photo) VALUES ($1, $2);',
        [user.name, user.photo]
    );

    return result;
};

function getUserByName ( user: newUser ): Promise<QueryResult<UserEntity>>{
    const result = DB.query(
        'SELECT * FROM users WHERE name = $1',
        [ user.name ]
    );

    return result;
};

function getUserById ( user: newUser ): Promise<QueryResult<UserEntity>>{
    const result = DB.query(
        'SELECT * FROM users WHERE id = $1',
        [ user.id ]
    );

    return result;
};

export {
    insertUser,
    getUserByName,
    getUserById
}