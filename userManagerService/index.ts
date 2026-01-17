import app from "./src/app"

app.listen(process.env.PORT,()=>{
    console.log(`server started on ${process.env.PORT}`)
})