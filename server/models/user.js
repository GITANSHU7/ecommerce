const mongoose = require("mongoose");

const {ObjectId} =mongoose.Schema;

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        require: true,
        trim:true,
        
    },


email:{
    type:String,
    require: true,
    trim:true,
    unique:true,
},


role:{
    type:String, 
    default:"subscriber"

},
cart:{
    type:Array,
    dafault:[]
},
wishlist : [{type : ObjectId , ref: "Product"}],
},{timestamps : true}); 

module.exports= mongoose.model("User", userSchema)