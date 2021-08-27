const mongoose = require("mongoose");
const validator = require("validator");

const {ObjectId} =mongoose.Schema;

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        require: [true, 'Please enter your name' ] ,
        trim:true,
        maxlength:[30 , 'Your name cannot exceed 30 character']
        
    },


email:{
    type:String,
    require: [true, 'Please entre your email id' ],
    trim:true,
    unique:true,
    validate: [validator.isEmail , 'Please enter valid email address']
},

role:{  
    type:String, 
    default:"subscriber"

},
address : String,

contact:{
    type: Number,
    require: true,
    
    
},
pincode:{
    require: true,
    type:Number,
   
},
cart:{
    type:Array,
    dafault:[]
},



shipper_name : {
    type:String,
        require: [true, 'Please enter your name' ] ,
        trim:true,
        maxlength:[30 , 'Your name cannot exceed 30 character'],
        default : null
        
},

shipper_address : {
    type : String,
    require: [true, 'Please enter your shipping address' ] ,
    trim:true,
    maxlength:[100 , 'Your name cannot exceed 100 character'],
    default : null
},

shipper_locality : {
    type : String,
    require: [true, 'Please enter your shipping locality' ] ,
    trim:true,
    maxlength:[100 , 'Your name cannot exceed 100 character'],
    default : null
},

shipper_contact : {
    type : Number,
    require: [true, 'Please enter your contact No.' ] ,
    trim:true,
    maxlength:[10 , 'Your name cannot exceed 10 character'],
    default : null
},

shipper_pincode : {
    type : Number ,
    require: [true, 'Please enter your pincode' ] ,
    trim:true,
    maxlength:[6 , 'Your name cannot exceed 6 character'],
    default : null


},

wishlist : [{type : ObjectId , ref: "Product"}],
},{timestamps : true}); 

module.exports= mongoose.model("User", userSchema)