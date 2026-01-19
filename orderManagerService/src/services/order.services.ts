export const orderServices = {
    getOrderDetails: async (email: string, orderId: string) => {
        const getOrderDetailsUpstoxURL = `https://api.upstox.com/v2/order/details?order_id=${orderId}`
        const accesstokenURL = `http://localhost:9000/api/accesstoken?email=kumarsk12072000@gmail.com`

        let res :any= await fetch(accesstokenURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        const {access_token,message} =await res.json()

        if(!access_token){
            return {status:401,data:message}
        }

        let response = await fetch(getOrderDetailsUpstoxURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${access_token}`
            }
        })

        response = await response.json()
        return {status:200 ,data: response }
    }

}