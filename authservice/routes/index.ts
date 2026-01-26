import {Router} from "express"
import { redirectToupstoxLogin,callbackController, getAccessToken } from "../controllers/auth.controller"


const router = Router()
router.get("/login", redirectToupstoxLogin)
router.get("/callback",callbackController)
router.get("/accesstoken",getAccessToken)
export default router