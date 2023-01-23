import Joi from "joi";

const taskSchema = Joi.object({
    userId: Joi.number().required(),
    text: Joi.string().required(),
    done: Joi.boolean().required()
});

export {
    taskSchema
}