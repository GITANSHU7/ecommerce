const Shipping = require("../models/shipping");


//create new shipping

exports.create = async(req,res) => {
 try{
  const newShipping  = await new Shipping(req.body).save();
  res.json(newShipping);
} catch (err) {
    console.log(err);
    //res.status(400).send("Create product failed");
  
    res.status(400).json({
      err:err.message,
    })
  }
};