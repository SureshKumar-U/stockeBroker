import { Request, Response } from "express"

import watchListService from "../services/watchlist.service"
const watchListController = {

    create: async (_req: Request, res: Response) => {
        await watchListService.create()
        return res.status(200).json({
            message: "watchList created successfully"
        })

    },
    getAll: async (_req: Request, res: Response) => {

        await watchListService.getAll()
        return res.status(200).json({
            message: "getAll watchList fetched successfully"
        })
    },
    addStock: async (_req: Request, res: Response) => {

        await watchListService.addStock()
        return res.status(200).json({
            messag: "addStcok to watchList successfully"
        })
    }

}

export default watchListController