let mongoose=require("mongoose")


//men Schema
let menSchema=mongoose.Schema({
   title:String,
   price1:String,
   image:String,
   userID: String
  
},{
    versionKey:false
})

//women Model 
let MenModel=mongoose.model("men_data",menSchema)

module.exports={
    MenModel
}