
import dotenv from "dotenv"
dotenv.config()
import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import accessTokenModel from "../model/accesstoken"
export const redirectToupstoxLogin = (req: Request, res: Response) => {
    const Upstoxurl = process.env.UPSTOX_LOGIN_URL
    const client_id = process.env.API_KEY
    const secret = process.env.API_SECRET
    const redirect_uri = process.env.REDIRECT_URL
    const response_type = 'code'
    res.redirect(`${Upstoxurl}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`)
}

export const callbackController = async (req: Request, res: Response) => {
    try {
        const code = req.query.code as string
        if (!code) return res.json({ code: "params not contains code || invalid login credentials" })
        const accessTokenURL = process.env.ACCESS_TOKEN_URL
        const client_id = process.env.API_KEY
        const secret = process.env.API_SECRET
        const redirect_uri = process.env.REDIRECT_URL
        let response: any = await fetch(accessTokenURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: new URLSearchParams({
                code: code,
                redirect_uri: redirect_uri,
                grant_type: "authorization_code",
                client_id: client_id,
                client_secret: secret
            })

        })
        response = await response.json()
        if (response.status) {
            console.log(process.env.JWT_SECRET)
            return res.status(400).json({
                error: response["errors"]
            })
        }
        const { access_token, email } = response
        //save accesstoken in db
        await accessTokenModel.create({ accesstoken: access_token, email: email })
        const token = jwt.sign(email, process.env.JWT_SECRET)
        return res.redirect(`http://localhost:3000/${token}`)



    } catch (err) {
        return res.json({ error: err })
    }


}