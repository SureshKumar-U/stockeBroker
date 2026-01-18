import express from "express"
import dotenv from "dotenv"
dotenv.config()
import userRouter from "../routes/user.routes"


const app = express()

app.get("/",(req,res)=>res.send("app is working , no issues"))
app.use("/api",userRouter)


export default app