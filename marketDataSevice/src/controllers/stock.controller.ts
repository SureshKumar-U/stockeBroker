import { Request, Response } from "express"
import fs from "fs"
import path from "path"
import { parser } from "stream-json"
import { streamArray } from "stream-json/streamers/StreamArray"
import { Client } from "@opensearch-project/opensearch"
import stockService from "../services/stock.services"
const csvFilepath = path.join(__dirname, "../../complete.json")


const stockController = {
    loadStockData: async (req: Request, res: Response) => {
        fs.createReadStream(csvFilepath)
            .on("open", () => console.log("File opened")).pipe(parser())
            .pipe(streamArray())
            .on("data", async (row) => {
                try {
                    const instrumentKey = row["value"]["instrument_key"]
                    const instrumentType = row["value"]["instrument_type"]
                    const name = row["value"]["name"]
                    const exchange = row["value"]["exchange"]
                    const stockdata = { instrumentKey, instrumentType, name, exchange }
                    const indexName = "stock_data"
                    const client = new Client({
                        node: process.env.OPENSEARCH_SERVICE_URI
                    })
                    //insert the stockdata in opensearch 
                    const response = await client.index({
                        index: indexName,
                        body: stockdata,
                        refresh: true,

                    })
                } catch (err) {
                    console.log("error while inserting data :", err)
                }
            })
            .on("end", () => console.log("file processing completed"))
            .on("error", (error) => console.log(error))
    },
    getMarketData: async (req: Request, res: Response) => {
        const data = await stockService.getMarketData(req)
        return res.status(200).json({
            data
        })
    }

}

export default stockController