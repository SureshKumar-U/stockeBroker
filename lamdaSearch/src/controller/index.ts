import { Request, Response } from "express";
import OpenSearchClient from "../utils/openSearchClient";

export const getStockData = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.name as string || ""
        const query = {
            query: {
                match: {
                    name: {
                        query: searchTerm,
                    },
                },
            },
        };

        const response = await OpenSearchClient.search({
            index: "stock_data",
            body: query
        })

        const { body } = response
        // Process search results
        const hits = body.hits.hits;
        return res.status(200).json({
            message: "stock data fetched successfully",
            data: hits
        })

    } catch (err) {
        res.status(500).json({ error: err })
    }

}