import { Request, Response } from "express";
import { orderServices } from "../services/order.services";

export const OrderController = {
    placeOrder: async (req: Request, res: Response) => {

        try {
            const data: any = await orderServices.placeOrder(req.body)
            if (data.status != 200) return res.status(data.status).json({ message: data.message, error: data.error })
            return res.status(200).json({
                message: "Order placed successfully",
                data: data
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                message: "Internal or External error",
                error: err
            })
        }


    },
    cancelOrder: async (req: Request, res: Response) => {
        try {
            const resul:any = await orderServices.cancelOrder(req.query.order_id as string)
            console.log("result",resul)
            const { status, data } = resul
            return res.status(status).json({ data })
        } catch (err) {
            console.log(String(err))
            return res.status(500).json({
                error: String(err)
            })
        }
        

    },
    getOrderDetails: async (req: Request, response: Response) => {
        const email = req?.query.email as string
        const orderId = req.params.order_id as string
        const res = await orderServices.getOrderDetails(email, orderId)
        return response.status(200).json({ res: res })
    },
    getOrders: async (req: Request, res: Response) => {
        try{
        const result= await orderServices.getOrders()
        return res.json(result)
        }catch(err){
            return res.status(500).json(err)
        }

    }
}