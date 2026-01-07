import express from 'express';
import { AppDataSource } from './config/db.config';
const app = express()

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
}).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});

app.listen("8080", () => {
    console.log("Server is running on port 8080");
});