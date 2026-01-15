import { Router } from "express";
import watchListController from "../controllers/watchlist.controller";
import { validator } from "../middleware/validate";
import { addStockToWatchListSchema, createWatchListSchema } from "../validations/wachlist.validations";

const router = Router()

router.get("/watchlists", watchListController.getAll)
router.post("/watchlists", validator(createWatchListSchema), watchListController.create)
router.post("/watchlists/stocks",validator(addStockToWatchListSchema),watchListController.addStock)

export default router