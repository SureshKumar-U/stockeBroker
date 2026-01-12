import { Router } from "express";
import watchListController from "../controllers/watchlist.controller";

const router = Router()

router.get("/watchlists", watchListController.getAll)
router.post("/watchlists", watchListController.create)
router.post("/watchlists/stocks",watchListController.addStock)

export default router