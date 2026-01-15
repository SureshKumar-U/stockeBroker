import watchListRepository from "../Repositories/watchlist.repository"
import { AddStockToWatchList, CreatWatchList } from "../types/watchList.types"

const watchListService = {
    getAll:async()=>{
       return watchListRepository.getAll()

    },
    create:async(WatchList:CreatWatchList)=>{
     return await watchListRepository.create(WatchList) 

    },
    addStock:async(addStock:AddStockToWatchList)=>{
        return await watchListRepository.addStock(addStock)
    }
}


export default watchListService