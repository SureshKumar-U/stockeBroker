import { NextFunction, Request, Response } from "express"
import { AppError } from "../utils/customError"

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err instanceof AppError ? err.status : 500
    return res.status(statusCode).json({
        message: err.message,
    })

}

export const notFound = (req:Request,res:Response)=>{
    const error = new AppError(`Not Found - ${req.originalUrl}`,404)
    throw error
}