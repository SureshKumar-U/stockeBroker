import express from "express"
import dotenv from "dotenv"
dotenv.config()
import stockRoutes from  "./routes/index"
const app = express()

app.use("/api",stockRoutes )

app.listen(process.env.PORT,()=>{
    console.log(`app running on ${process.env.PORT}`)
})