const userService = {
    getUserProfile: async (accessToken: string) => {
        const upstoxProfileUrl = process.env.UPSTOX_USERPROFILE_URL
        if (!upstoxProfileUrl) {
            return "env not loaded"
        }

        let response :any= await fetch(upstoxProfileUrl, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        response = await response.json()
        if(response?.errors){
            return {status:401,data:response?.errors}

        }
        return {status:200, data:response.data}
    }
}

export default userService