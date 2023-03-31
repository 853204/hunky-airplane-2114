let express=require("express")
let {connection}=require("./db")
let {userRouter}=require("./routes/user.routes")

let cors=require("cors")
require("dotenv")


let app=express()
app.use(cors())
app.use(express.json())



app.use("/users",userRouter)



app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Cannot connect to DB")
        console.log(err)
    }
    console.log("Server isss running at port 8585")
})
