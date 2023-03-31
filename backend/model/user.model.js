let mongoose=require("mongoose")

//user Schema
let userSchema=mongoose.Schema({
   email:String,
   pass:String,
   location:String,
   Number:Number
   
},{
    versionKey:false
})

//user Model 
let UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}