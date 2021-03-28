const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const couponSchema = new mongoose.Schema(
  {
  name: {
      type:String,
      trim:true,
      unique:true,
      uppercase:true,
      required: "Name is required",
      minlength: [2,"Too short"],
      maxlength: [15,"Too long"],
  },
  expiry:{
      type:Date,
      required:true,
  },
  discount:{
      type:Number,
      required:true,
  },
  orderdBy: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", couponSchema);
