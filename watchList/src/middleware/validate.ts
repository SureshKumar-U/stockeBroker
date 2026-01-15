import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { AppError } from "../utils/customError";
import { error } from "node:console";


const validateSource = ["body", "params", "query"]
export const validator = (schemaObject: Record<string, Joi.ObjectSchema>) => (req: Request, res: Response, next: NextFunction) => {
    const errors = []
    let payload = {}
    validateSource.forEach((key) => {
        const schema = schemaObject[key]
        if (!schema) return
        const { error, value } = schema.validate(req[key], {
            abortEarly: false,
            convert: false,
        })
        payload = { ...payload, ...value }
        if (error) {
            errors.push(...error.details.map((detail: Joi.ValidationErrorItem) => detail.message))
        }

    })

    if (errors.length) return res.status(400).json({ message: "validation failed", error: errors })
    if (Object.keys(payload).length == 0) {
        return res.status(400).json({
            message: "validation failed",
            error: [
                "Request payload is missing in body, query, and params"
            ]
        })

    }
    next()
}

