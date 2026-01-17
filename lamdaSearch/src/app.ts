import express from "express"
import dotenv from "dotenv"
dotenv.config()
import router from "./routes"

const app = express()

app.use("/api", router)
app.get("/",(req,res)=>res.send("app is working , no issues"))


export default app