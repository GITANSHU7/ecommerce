const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    contact : {
        type: Number,
        required: true,
        text:true,
        maxlength: 10,
    },
    address : {
        type: String,
        required: true,
        text:true,
        maxlength: 100,
    },
    varient: {
        type: String,
        enum: ["Petrol", "Diesal", "Electric" , "CNG"],
      },
    
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },
    brand: {
      type: ObjectId,
      ref: "Brand",
    },
    models: [
      {
        type: ObjectId,
        ref: "Model",
      },
    ],
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
