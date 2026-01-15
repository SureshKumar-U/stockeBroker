export interface CreatWatchList {
  name: string;
}

export interface AddStockToWatchList {
    watchListName: string,
    symbol:string,
    exchange:string
}