import express from 'express';
import { AppDataSource } from './config/db.config';
import router from './routes';
import { errorHandler, notFound } from './middleware/errorHanlder';
const app = express()


AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
}).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
app.use(express.json());

app.use("/api", router)
app.use(notFound)
app.use(errorHandler)

app.listen("8080", () => {
    console.log("Server is running on port 8080");
});