const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const detailSchema = new mongoose.Schema({
    name: String,
email:{
    type:String,
    require: true,
    trim:true,
    
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

locality: {
    type:String,
      trim:true,
      required: "Name is required",
      minlength: [2,"Too short"],
      maxlength: [20,"Too long"],
},
orderdBy: { type: ObjectId, ref: "User" },
},
{ timestamps: true }
);

module.exports = mongoose.model("Detail", detailSchema);
