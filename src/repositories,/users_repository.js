   const  User = require("../models/Users");
   const bcrypt = require("bcrypt")
const {validationResult} = require('express-validator');
import dotenv from "dotenv";
dotenv.config();
const jwt = require("jsonwebtoken");
let secret = process.env.JWT_SECRET;
export default class UserRepository{ 
   static async register( req,res, next){
    try{
     const errors = validationResult(req);
  if(!errors.isEmpty()) {
    const error = new Error('Signup validation failed');
    error.statusCode = 422;
    error.data = errors.array();
    return res.status(error.statusCode).json({error});
  }


  const {email, password, username} = req.body;

  const hashedPassword = await bcrypt.hash(password,12);
  const data = {email: email, password: hashedPassword, username: username};

  const userModel = new User(data);
  const savedData = await userModel.save()
  


  if(savedData){
//   const generateJwTokens = await generateJwTokens({data});
   const token = await jwt.sign(data, secret, { expiresIn: "1d" });

  return res.status(201).json({
     success: true,
     data: savedData,
     token: token,
  })
  }
return;
    } catch(error){
       return error;
    }
 }

 static async login(req, res, next){

   try{
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
         const error = new Error('login validation failed');
         error.statusCode = 422;
         error.data = errors.array();
         throw error;
      }
      const {email, password} = req.body;
      let user = await User.findOne({email: email});
      if(!user){
         const error = new Error('Email not found');
        error.statusCode = 401;
        throw error;
      }
     let  userCompare = await bcrypt.compare(password, user.password);
      if(!userCompare){
         const error = new Error("Password Incorrect");
         error.statusCode = 401;
         throw error;
      }
      const token = jwt.sign({email: email, userId: user._id.toString()},process.env.JWT_SECRET,{expiresIn:"2h"} );
      return res.status(200).json({success: true, user, token, userId: user._id.toString()});
      }
      catch(error){
         if(!error.statusCode) error.statusCode = 500;
         throw error
         // return res.status(error/statusCode).json({error});
      }
 }
}