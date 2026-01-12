import express from 'express';
import { AppDataSource } from './config/db.config';
import router from './routes';
const app = express()


AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
}).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});

app.use("/api", router)


app.listen("8080", () => {
    console.log("Server is running on port 8080");
});