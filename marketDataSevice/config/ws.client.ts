// Function to authorize the market data feed
import WebSocket from 'ws';
import protobuf from "protobufjs"

// Initialize global variables
let protobufRoot = null;
export const InitProtoBuf = () => {
    protobufRoot = protobuf.loadSync(__dirname + "/marketdata.proto")
    console.log("protobuff initialized ")

}

export const decodeProtoBuf = (buffer) => {
    if (!protobufRoot) {
        console.log("protobuf was not initialized")
    }
    const FeedResponse = protobufRoot.lookupType(
        "com.upstox.marketdatafeederv3udapi.rpc.proto.FeedResponse"
    );
    return FeedResponse.decode(buffer)


}
export const getmarketFeedUrl = async () => {
    const url = "https://api.upstox.com/v3/feed/market-data-feed/authorize";
    const accessToken = "eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiI0WUNFNlciLCJqdGkiOiI2OTc4NmY0MmRmMmJhNTNkMWFiODE0ODUiLCJpc011bHRpQ2xpZW50IjpmYWxzZSwiaXNQbHVzUGxhbiI6ZmFsc2UsImlhdCI6MTc2OTUwMDQ4MiwiaXNzIjoidWRhcGktZ2F0ZXdheS1zZXJ2aWNlIiwiZXhwIjoxNzY5NTUxMjAwfQ.NKIKQwM_QYYZoyM21017XRgCLbJHZr-xmUZsZLX64o4"
    let response: any = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    })
    response = await response?.json()
    return response
}

export const connectWebSocket = async (wsurl: string) => {
    return new Promise((resolve, reject) => {
        const ws = new WebSocket(wsurl, {
            followRedirects: true
        })
        ws.on("open", () => {
            console.log("connected")
            resolve("connected")

            // Set a timeout to send a subscription message after 1 second
            setTimeout(() => {
                const data = {
                    guid: crypto.randomUUID(),
                    method: "sub",
                    data: {
                        mode: "full",
                        instrumentKeys: ["NSE_INDEX|Nifty Bank", "NSE_INDEX|Nifty 50"],
                    },
                };
                ws.send(Buffer.from(JSON.stringify(data)));
            }, 1000);
        })

        ws.on("message", (msg) => {
            const message = decodeProtoBuf(msg)
            console.log((message))
        })
        ws.on("close", () => {
            console.log("disconnected");
        });
        ws.on("error", (err) => {
            console.log(err)
            reject(err)
        })
    })

}

