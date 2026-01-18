import { Request, Response } from "express";
import userService from "../services/user.service";

export const getUserProfile = async(req:Request,res:Response)=>{

    //get accesstoken from db
    try{
        const email = req.query.email
        if(!email){
            return res.status(401).json({message:"email is required"})
        }
        let response:any = await fetch(`http://localhost:9000/api/accesstoken?email=${email}`)
        response = await response.json()
        if(!response.access_token){
         return res.status(200).json({message:"no accesstoke found with these email",email})
        }
        const {status,data}:any= await userService.getUserProfile(response.access_token)

        return res.status(status).json({data})

    }catch(err){
        return res.status(500).json({
            message:"Internal or External error",
            error:err
        })
    }


}