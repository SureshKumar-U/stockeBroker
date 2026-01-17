import {Router} from "express"
import stockController from "../controllers/stock.controller"

const router = Router()

router.get("/loadStockData",stockController.loadStockData)
router.get("/",()=>console.log("app running "))
export default router