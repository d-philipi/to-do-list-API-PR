import Joi from "joi";

const taskSchema = Joi.object({
    userId: Joi.number().required(),
    categorieId: Joi.number().required(),
    description: Joi.string().required(),
    done: Joi.boolean()
});

export {
    taskSchema
}