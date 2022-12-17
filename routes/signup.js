const express=require("express");
const bcrypt=require("bcrypt");
const signupModel=require("../model/signup");
var jwt=require('jsonwebtoken');

let router=express.Router();

router.post("/signup",async(req,res)=>{
    const user=req.body;
    const isemailexist=await signupModel.findOne({email:user.email})
    const isphonenumberexist=await signupModel.findOne({phoneNumber:user.phoneNumber})
    if(isemailexist||isphonenumberexist){
        return res.status(201).json({data:"data exists..."});

    }
    const userOne=new signupModel({
            firstName:user.firstName,
            email:user.email,
            password:user.password,
            phoneNumber:user.phoneNumber,
            age:user.age,
            gender:user.gender,
            address:user.address
        });

        userOne
        .save()
        .then((data)=>{
            return res.status(200).json({data:"data saved successfuly..."});

        })
        .catch((e)=>{
            return res.status(201).json({data:"error:",e});

        });
        
    })

module.exports = router;