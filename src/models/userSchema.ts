import Joi from "joi";

const userSchema = Joi.object({
    name: Joi.string().required(),
    photo: Joi.string().uri().required()
});

export{
    userSchema
}