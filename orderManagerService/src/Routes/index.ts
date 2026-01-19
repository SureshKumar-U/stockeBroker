import {Router} from "express"
import {OrderController}  from "../controllers"

const router = Router()

router.post("/place_order",OrderController.placeOrder)
router.post("/cancel_order",OrderController.cancelOrder)
router.get("/:id",OrderController.getOrderDetails)

export default router;