import watchListRepository from "../Repositories/watchlist.repository"

const watchListService = {
    getAll:async()=>{
        watchListRepository.getAll()

    },
    create:async()=>{
        watchListRepository.create() 

    },
    addStock:async()=>{
        watchListRepository.addStock()

    }
}


export default watchListService