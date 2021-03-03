const  User  = require("../models/user");
const  Cart  = require("../models/cart");
const   Product = require("../models/product");
const   Coupon = require("../models/coupon");

const Razorpay = require('razorpay');



exports.createPaymentIntent = async(req,res) => {
    //coupons

    const paymentIntent = await Stripe.createPaymentIntents.create({
        amount : 500,
        currency : "inr",
    })
res.send({
    clientSecret : paymentIntent.client_secret,
})
}