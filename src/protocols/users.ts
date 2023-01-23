type UserEntity = {
    id: number,
    name: string,
    photo: string
};

type User = Omit <UserEntity, "id">;

type newUser = Partial <UserEntity>;

export{
    User,
    UserEntity,
    newUser
};