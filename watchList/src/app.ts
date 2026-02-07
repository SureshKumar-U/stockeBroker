import express, { type Application } from "express"
import router from "./routes";
import { errorHandler, notFound } from "./middleware/errorHanlder";

export const createApp = (): Application => {
    const app = express()
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", router)
    app.use(notFound)
    app.use(errorHandler)
    return app
}

