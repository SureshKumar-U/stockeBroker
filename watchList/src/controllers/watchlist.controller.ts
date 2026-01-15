import { Request, Response } from "express"

import watchListService from "../services/watchlist.service"

const watchListController = {
    create: async (req: Request, res: Response) => {
        try {
            const data = await watchListService.create(req.body)
            return res.status(200).json({
                message: "watchList created successfully",
                data: data
            })
        } catch (err) {
            return res.status(err.status).json({ message: err.message })
        }


    },
    getAll: async (_req: Request, res: Response) => {
        const data = await watchListService.getAll()
        return res.status(200).json({
            message: "getAll watchList fetched successfully",
            data: data
        })
    },
    addStock: async (req: Request, res: Response) => {
        try {
            console.log("controller was called")
            const data = await watchListService.addStock(req.body)
            return res.status(200).json({
                messag: "addStcok to watchList successfully",
                data
            })
        } catch (err) {
            return res.status(500).json({
                message: err.message

            })
        }
    }

}

export default watchListController