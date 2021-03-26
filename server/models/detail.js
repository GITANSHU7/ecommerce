const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const detailSchema = new mongoose.Schema({
    name: {
        type:String,
        unique : "false",
       sparse: "true",
        minlength: [2,"Too short"],
        maxlength: [15,"Too long"],
    },
 address:{
    unique : "false",
    sparse: "true",
    type:String,
    require: true,
},
contact:{
    unique : "false",
    sparse: "true",
    type: Number,
    require: true,
    
    
},
pincode:{
    unique : "false",
    sparse: "true",
    require: true,
    type:String,
   
},

locality: {
    unique : "false",
    sparse: "true",
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
