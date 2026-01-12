import "reflect-metadata";
import { DataSource } from "typeorm"
import dotenv from 'dotenv';
import { WatchList } from "../models/watchlist.model";
import { WatchListItems } from "../models/watchlistitems.model";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DBHOST,
    port: parseInt(process.env.DBPORT || "5432"),
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    synchronize: true,
    logging: true,
    entities: [WatchList,WatchListItems],
    subscribers: [],
    migrations: [],
})