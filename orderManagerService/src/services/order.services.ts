import console from "node:console";
import { PlaceOrder } from "../types/orders.types"
// let UpstoxClient = require('upstox-js-sdk');
import * as UpstoxClient from "upstox-js-sdk";
export const orderServices = {
    getOrders: async () => {
        const accesstokenURL = `http://localhost:9000/api/accesstoken?email=kumarsk12072000@gmail.com`
        let res: any = await fetch(accesstokenURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        const { access_token, message } = await res.json()
        if (!access_token) {
            return { status: 401, data: message }
        }
        let defaultClient = UpstoxClient.ApiClient.instance;
        var OAUTH2 = defaultClient.authentications['OAUTH2'];
        OAUTH2.accessToken = access_token;
        let apiInstance = new UpstoxClient.OrderApi();
        let apiVersion = "2.0";
        return await new Promise((resolve, reject) => {
            apiInstance.getOrderBook(apiVersion, (error, data, response) => {
                if (error) {
                    resolve({
                        status: 400,
                        data: error?.response?.text || "Cancel order failed",
                    });
                } else {
                    resolve({
                        status: 200,
                        data: data,
                    });
                }
            });

        })


    },
    getOrderDetails: async (email: string, orderId: string) => {
        const getOrderDetailsUpstoxURL = `https://api.upstox.com/v2/order/details?order_id=${orderId}`
        const accesstokenURL = `http://localhost:9000/api/accesstoken?email=kumarsk12072000@gmail.com`

        let res: any = await fetch(accesstokenURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        const { access_token, message } = await res.json()

        if (!access_token) {
            return { status: 401, data: message }
        }

        let response = await fetch(getOrderDetailsUpstoxURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${access_token}`
            }
        })

        response = await response.json()
        return { status: 200, data: response }
    },
    placeOrder: async (place_order: PlaceOrder) => {
        const accesstokenURL = `http://localhost:9000/api/accesstoken?email=kumarsk12072000@gmail.com`
        let res: any = await fetch(accesstokenURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        const { access_token, message } = await res.json()
        if (!access_token) {
            return { status: 401, data: message }
        }
        let defaultClient = UpstoxClient?.ApiClient?.instance;
        var OAUTH2 = defaultClient?.authentications['OAUTH2'];
        OAUTH2.accessToken = access_token as string;
        let apiInstance = new UpstoxClient.OrderApiV3();
        let body = new UpstoxClient.PlaceOrderV3Request(1,
            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
            0, "NSE_EQ|INE669E01016",
            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
            0, 0, true);
        let opt = { "slice": true }
        apiInstance.placeOrder(body, opt, (error, data, response) => {
            if (error) {
                console.error(error?.response?.text);
                return { status: (error?.response?.status || error?.status || 400), message: "placeorder failed", error: error.response.text }

            } else {
                console.log('API called successfully. Returned data: ' + data);
                return { status: 200, data: data }
            }

        });


    },
    cancelOrder: async (orderId: string) => {
        //cancel order
        const accesstokenURL = `http://localhost:9000/api/accesstoken?email=kumarsk12072000@gmail.com`
        let res: any = await fetch(accesstokenURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        const { access_token, message } = await res.json()
        if (!access_token) {
            return { status: 401, data: message }
        }
        let defaultClient = UpstoxClient.ApiClient.instance;
        var OAUTH2 = defaultClient.authentications['OAUTH2'];
        OAUTH2.accessToken = access_token;
        let apiInstance = new UpstoxClient.OrderApiV3();
        return await new Promise((resolve, reject) => {
            apiInstance.cancelOrder(orderId, (error, data, response) => {
                if (error) {
                    resolve({
                        status: 400,
                        data: error?.response?.text || "Cancel order failed",
                    });
                }
                else {
                    resolve({
                        status: 200,
                        data: data,
                    });
                }

            });

        })



    }

}