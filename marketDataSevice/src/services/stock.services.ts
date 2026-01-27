import { Request } from "express";
import { connectWebSocket, getmarketFeedUrl, InitProtoBuf } from "../../config/ws.client";

const stockService = {
    getMarketData: async (req: Request) => {
        InitProtoBuf()
        const marketFeedURL = await getmarketFeedUrl()
        await connectWebSocket(marketFeedURL.data.authorized_redirect_uri)
        


    }
}
export default stockService