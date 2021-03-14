const mongoose = require("mongoose");

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
    
    
},
pincode:{
    require: true,
    type:String,
   
},
role:{
    type:String, 
    default:"subscriber"

},

locality: {
    type:String,
      trim:true,
      required: "Name is required",
      minlength: [2,"Too short"],
      maxlength: [20,"Too long"],
},
cart:{
    type:Array,
    dafault:[]
},
wishlist : [{type : ObjectId , ref: "Product"}],
},{timestamps : true}); 

module.exports= mongoose.model("User", userSchema)