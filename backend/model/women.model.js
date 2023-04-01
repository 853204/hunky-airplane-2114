let mongoose=require("mongoose")


//women Schema
let womenSchema=mongoose.Schema({
   title:String,
   price:String,
   image:String,
   userID: String
  
},{
    versionKey:false
})

//women Model 
let WomenModel=mongoose.model("women_data",womenSchema)

module.exports={
    WomenModel
}