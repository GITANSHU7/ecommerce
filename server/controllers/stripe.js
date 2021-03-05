const User = require("../models/user");
const Cart = require("../models/cart");
const Product = require("../models/product");
const Coupon = require("../models/coupon");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
  // later apply coupon
  // later calculate price

    // 1 find user
    const user = await User.findOne({ email: req.user.email }).exec();
    // 2 get user cart total
    const { cartTotal } = await Cart.findOne({ orderdBy: user._id }).exec();
  
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: cartTotal * 100,
    currency: "inr",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};