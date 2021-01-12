const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;
const modelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
      minlength: [2, "Too short"],
      maxlength: [320, "Too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    parent: {type: ObjectId , ref: "Brand" , required:true},
  },
  { timestamps: true }          
);

module.exports = mongoose.model("Model", modelSchema);
