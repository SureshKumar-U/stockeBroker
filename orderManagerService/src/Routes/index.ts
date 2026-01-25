import {Router} from "express"
import {OrderController}  from "../controllers"

const router = Router()
router.get("/", OrderController.getOrders)
router.post("/place",OrderController.placeOrder)
router.delete("/cancel",OrderController.cancelOrder)
router.get("/:id",OrderController.getOrderDetails)


export default router;