import express from "express"
import dotenv from "dotenv"
dotenv.config()
import router from "./routes"
import cors from "cors";
const app = express()
app.use(cors())

app.use("/api", router)
app.get("/",(_req,res)=>res.send("app is working , no issues"))


export default app