type TaskEntity = {
    id: number,
    userId: number,
    categorieId: number,
    description: string,
    done: boolean,
    date: string | Date
};

type Task = Omit <TaskEntity, "id">;

export {
    Task,
    TaskEntity,
};