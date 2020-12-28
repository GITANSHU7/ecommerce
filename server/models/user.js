const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuod/v1");
const { timeStamp } = require("console");
const {ObjectId} =mongoose.Schema;

  const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        maxlength:32,
        trim: true
    },
    email:{
        type:String,
        require: true,
        trim:true,
        unique:true,
    },
    address:{
        type:String,
        require: true,
    },
    contact:{
        type: Number,
        require: true,
        length:10,
    },
    pincode:{
        require: true,
        type:Number,
        length:6
    },
    role:{
        type:String, 
        default:"subscriber"

    },
    cart:{
        type:Array,
        dafault:[]
    }
  },{timestamps : true}); 

  module.exports= mongoose.model("User", userSchema)