import express from "express"
import router from "./routes/index"
import { connectToDb } from "./config/dbconnnect"
import dotenv from "dotenv"
dotenv.config()
const app = express()

app.use("/api", router)




app.listen(process.env.PORT, async () => {
    connectToDb()
    console.log(`app listened at ${process.env.PORT}`)
}
)