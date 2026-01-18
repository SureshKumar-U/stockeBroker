import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()
export const connectToDb = ()=>{
   const uri =  `mongodb+srv://kumarsk12072000_db_user:${process.env.DB_USER_PASSWORD}@cluster0.mwxml4v.mongodb.net/?appName=Cluster0`
mongoose.connect(uri)
.then(() => console.log("db connected successfully"))
.catch(err => console.error("error occured while connecting to db", err));
}



