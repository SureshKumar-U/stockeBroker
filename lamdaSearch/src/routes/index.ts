import {Router} from "express"
import { getStockData } from "../controller"
const router = Router()

router.get("/search",getStockData)

export default router