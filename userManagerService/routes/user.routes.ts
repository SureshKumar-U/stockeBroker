import {Router} from "express"
import { getUserProfile } from "../controller/user.controller"

const router = Router()

router.get("/userprofile",getUserProfile)

export default router