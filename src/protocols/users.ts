type UserEntity = {
    id: number,
    name: string,
    photo: string
};

type User = Omit <UserEntity, "id">;

export{
    User,
    UserEntity
};