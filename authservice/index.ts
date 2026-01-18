import express from "express"
import router from "./routes/index"
import { connectToDb } from "./config/dbconnnect"
const app = express()

app.use("/api", router)




app.listen(9000, async()=>{
    connectToDb()
    console.log("app listened at 8010 port")
}
)