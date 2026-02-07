import express,{ type Express} from "express"
import router from "./routes/index"
import { connectToDb } from "./config/dbconnnect"
import dotenv from "dotenv"
dotenv.config()
const app: Express = express()

app.use("/api", router)




app.listen(process.env.PORT, async () => {
    connectToDb()
    console.log(`app listened at ${process.env.PORT}`)
}
)