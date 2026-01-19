import {Router} from "express"
import { getUserFunds, getUserProfile } from "../controller/user.controller"

const router = Router()

router.get("/userprofile",getUserProfile)
router.get("/userfunds",getUserFunds)

export default router