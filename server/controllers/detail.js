const Coupon = require("../models/detail");

// create, remove, list

exports.create = async (req, res) => {
  try {
    const { name, } = req.body.coupon;
    res.json(await new Coupon({ name, expiry, discount }).save());
  } catch (err) {
    console.log(err);
  }
};