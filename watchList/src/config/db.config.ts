import "reflect-metadata";
import { DataSource } from "typeorm"
import { WatchList } from "../models/watchlist.model";
import { WatchListItems } from "../models/watchlistitems.model";
import {env} from "./env.config"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: env.DBHOST,
    port: parseInt(env.DBPORT),
    username: env.DBUSER,
    password: env.DBPASSWORD,
    database: env.DBNAME,
    synchronize: true,
    logging: false,
    entities: [WatchList, WatchListItems],
    subscribers: [],
    migrations: [],
})

export const initDatabase = () => {
    AppDataSource.initialize().then(() => {
        console.log("Data Source has been initialized!");
    }).catch((err :any) => {
        console.error("Error during Data Source initialization:", err);
    });
}