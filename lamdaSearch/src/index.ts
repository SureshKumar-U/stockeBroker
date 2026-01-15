import express from "express"
import dotenv from "dotenv"
dotenv.config()
import router from "./routes"
const app = express()

app.use("/api", router)

app.listen(process.env.PORT,()=>console.log("app running on 8002"))