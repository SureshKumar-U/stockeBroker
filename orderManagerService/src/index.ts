import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()

app.listen(process.env.PORT || 8001,()=>{
    console.log("server started on ", process.env.PORT)
})