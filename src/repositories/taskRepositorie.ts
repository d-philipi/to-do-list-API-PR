import { DB } from "../database/db.js";
import { QueryResult } from "pg";
import { UserEntity } from "../protocols/users.js";
import { IdTask, Task, TaskEntity } from "../protocols/task.js";

function insertTasks (task: Task): Promise<QueryResult<any>>{
    const result = DB.query(
        'INSERT INTO tasks ("userId", text) VALUES ($1, $2);',
        [task.userId, task.text]
    );

    return result;
};

function getTasks ( user: UserEntity ): Promise<QueryResult<TaskEntity>>{
    const result = DB.query(
        'SELECT * FROM tasks WHERE "userId" = $1',
        [ user.id ]
    );

    return result;
};

function getTask ( id: IdTask ): Promise<QueryResult<TaskEntity>>{
    const result = DB.query(
        'SELECT * FROM tasks WHERE id = $1',
        [ id.id ]
    );

    return result;
};

function updateTasks (task: TaskEntity): Promise<QueryResult<any>>{
    const result = DB.query(
        'UPDATE tasks set done = $1 WHERE id = $2',
        [task.done,task.id]
    );

    return result;
};

function deleteTasks (id: IdTask): Promise<QueryResult<any>>{
    const result = DB.query(
        'DELETE FROM tasks WHERE id = $2',
        [ id.id ]
    );

    return result;
};

export {
    insertTasks,
    getTasks,
    getTask,
    updateTasks,
    deleteTasks
}