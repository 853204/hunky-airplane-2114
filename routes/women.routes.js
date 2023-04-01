const express=require("express")
const womenRouter=express.Router()
const {WomenModel}=require("../model/women.model")
const jwt=require("jsonwebtoken")

womenRouter.get("/",async(req,res)=>{
    const token=req.headers.authorization
    const decoded=jwt.verify(token,"masai")
    try{
        if(decoded){
            const women=await WomenModel.find()
            res.status(200).send(women)
            console.log(women)
        }
    } catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})

womenRouter.post("/add",async(req,res)=>{
    try{
        const women=new WomenModel(req.body)
        await women.save()
        res.status(200).send({"msg":"A new women data has been added"}) 
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})


module.exports={
    womenRouter
}

