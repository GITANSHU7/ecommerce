const Order = require("../models/order");
//const User = require("../models/user");

//orders, orderStatus

exports.orders = async (req, res) => {
  let allOrders = await orders
    .find({})
    .sort("-createdAt")
    .populate("products.product")
    .exec();

  res.json(allOrders);
};

exports.orderStatus = async (req, res) => {
  const { orderId, orderStatus } = req.body;

  let updated = await order
    .findByIdAndUpdate(orderId, { orderStatus }, { new: true })
    .exec();

  res.json(updated);
};
