import { Request, Response } from "express";
import { orderServices } from "../services/order.services";

export  const OrderController = {
    placeOrder:(req:Request,res:Response)=>{


    },
    cancelOrder:()=>{

    },
    getOrderDetails:async(req:Request,response:Response)=>{
        const email = req?.query.email as string
        const orderId = req.params.order_id as string
       const res=  await orderServices.getOrderDetails(email,orderId)
       return response.status(200).json({res:res})
    }
}