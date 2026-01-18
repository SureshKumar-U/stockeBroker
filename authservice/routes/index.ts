import {Router} from "express"
import { redirectToupstoxLogin,callbackController } from "../controllers/login.controller"


const router = Router()
router.get("/login", redirectToupstoxLogin)
router.get("/callback",callbackController)
export default router