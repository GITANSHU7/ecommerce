const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    name: String,
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
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        count: Number,
        color: String,
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Cash On Delivery" ,
        "processing",
        "Dispatched",
        "Cancelled",
        "Completed",
      ],
    },
    orderdBy: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
