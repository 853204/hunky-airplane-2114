const express=require("express")
const menRouter=express.Router()
const {MenModel}=require("../model/men.model")
const jwt=require("jsonwebtoken")

menRouter.get("/",async(req,res)=>{
    const token=req.headers.authorization
    const decoded=jwt.verify(token,"masai")
    try{
        if(decoded){
            const men=await MenModel.find()
            res.status(200).send(men)
            console.log(men)
        }
    } catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})

menRouter.post("/add",async(req,res)=>{
    try{
        const men=new MenModel(req.body)
        await men.save()
        res.status(200).send({"msg":"A new men data has been added"}) 
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})


module.exports={
    menRouter
}

