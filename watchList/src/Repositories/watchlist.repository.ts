import { AddStockToWatchList, CreatWatchList } from "../types/watchList.types"
import { WatchList } from "../models/watchlist.model"
import { AppError } from "../utils/customError"
import { WatchListItems } from "../models/watchlistitems.model"
const watchListRepository = {
    getAll: async () => {
        return WatchList.find({
            relations:{
                items:true
            }
        })

    },
    create: async (data: CreatWatchList) => {
        const { name } = data
        const existedWatchList = await WatchList.findOne({
            where: { name: name },
        })
        if (existedWatchList) {
            throw new AppError("WatchList already exists", 400);
        }

        return WatchList.create({ name: name }).save()
    },
    addStock: async (addStock: AddStockToWatchList) => {
        
        const { watchListName, symbol,exchange } = addStock
        const existedWatchList = await WatchList.findOne({ where: { name: watchListName } })
        if(!existedWatchList){
            throw new AppError(`${watchListName} watchlist not avaialble`,200)
        }
        const {id:watchListId} = existedWatchList
        return await WatchListItems.create({ watchListId:watchListId, symbol:symbol,exchange:exchange}).save()
       
      
    }
}

export default watchListRepository