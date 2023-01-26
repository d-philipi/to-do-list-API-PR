type TaskEntity = {
    id: number,
    userId: number,
    text: string,
    done: boolean,
    date: string | Date
};

type Task = Omit <TaskEntity, "id">;

export {
    Task,
    TaskEntity,
};