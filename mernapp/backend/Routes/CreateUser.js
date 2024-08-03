const express= require('express')
const router =express.Router()

const user= require('../models/User')

router.post("/createuser",async(req,res)=>{
    try {
        await user.create({
            name: "ramdas",
            password:"125445",
            email:"anjkc@gmail.com",
            location:"scahkjh"
        })
        res.json({sucees:true})
    }catch(error){
        console.log(error)
        res.json({"succce":false});
    }
})

module.exports=router;