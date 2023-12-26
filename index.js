const express=require("express")

require("dotenv").config()
const app=express();
app.get("/",(req, res)=>{
    res.send({msg: "API working"})
})

app.get("/ping",(req, res)=>{
    res.send({msg: "pong"})
})
const PORT= process.env.PORT
app.listen(PORT, ()=>{
console.log(`listening on port ${PORT}`)
})
