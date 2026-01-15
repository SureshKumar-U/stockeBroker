import Joi from "joi"
// const getAllWatchList= Joi.object({

// })
export const createWatchListSchema: Record<string, Joi.ObjectSchema> =
{
    body: Joi.object({
        name: Joi.string().required()
    })
}
export const addStockToWatchListSchema : Record<string, Joi.ObjectSchema> =
{
    body: Joi.object({
        watchListName: Joi.string().required(),
        symbol: Joi.string().required(),
        exchange:Joi.string().required(),
    })
}