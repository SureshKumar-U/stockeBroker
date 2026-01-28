import app from "./src/app"

const PORT = process.env.PORT || 9000

app.listen(process.env.PORT || 9000, ()=>console.log("server started on 9000 port"))