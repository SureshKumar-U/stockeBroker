import express from "express"
import dotenv from "dotenv"
dotenv.config()
import router from "./Routes"
const app = express()


app.use("/api/orders/",router)

app.listen(process.env.PORT || 8001,()=>{
    console.log("server started on ", process.env.PORT)
})