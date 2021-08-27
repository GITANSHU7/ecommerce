const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;
const shippingSchema = mongoose.Schema({
    


shipper_name : {
    type:String,
        require: [true, 'Please enter your name' ] ,
        trim:true,
        maxlength:[30 , 'Your name cannot exceed 30 character']
        
},

shipper_address : {
    type : String,
    require: [true, 'Please enter your shipping address' ] ,
    trim:true,
    maxlength:[100 , 'Your name cannot exceed 100 character']
},

shipper_contact : {
    type : Number,
    require: [true, 'Please enter your contact No.' ] ,
    trim:true,
    maxlength:[10 , 'Your name cannot exceed 10 character']
},

shipper_pincode : {
    type : Number ,
    require: [true, 'Please enter your pincode' ] ,
    trim:true,
    maxlength:[6 , 'Your name cannot exceed 6 character']

},


orderdBy: { type: ObjectId, ref: "User" },

createdAt: {
    type: Date,
    default: Date.now
},

})


module.exports= mongoose.model("Shipping", shippingSchema);