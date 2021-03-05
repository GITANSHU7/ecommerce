const User = require("../models/user");
const Cart = require("../models/cart");
const Product = require("../models/product");
const Coupon = require("../models/coupon");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
  // later apply coupon
  // later calculate price
const {couponApplied} = req.body
    // 1 find user
    const user = await User.findOne({ email: req.user.email }).exec();
    // 2 get user cart total
    const { cartTotal  , totalAfterDiscount} = await Cart.findOne({ orderdBy: user._id }).exec();

      let finalAmount = 0 ;

      if(couponApplied && totalAfterDiscount) {
        finalAmount = Math.round(totalAfterDiscount * 100);
      } else {
        finalAmount = Math.round(cartTotal * 100)
      }

    
  const paymentIntent = await stripe.paymentIntents.create({
    amount: finalAmount,
    currency: "inr",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    cartTotal,
    totalAfterDiscount,
    payable : finalAmount,
  });
};
