const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");
const Coupon = require("../models/coupon");
const Order = require("../models/order");
const uniqueid = require("uniqueid");


exports.userCart = async (req, res) => {
  // console.log(req.body); // {cart: []}
  const { cart } = req.body;

  let products = [];

  const user = await User.findOne({ email: req.user.email }).exec();

  // check if cart with logged in user id already exist
  let cartExistByThisUser = await Cart.findOne({ orderdBy: user._id }).exec();

  if (cartExistByThisUser) {
    cartExistByThisUser.remove();
    console.log("removed old cart");
  }

  for (let i = 0; i < cart.length; i++) {
    let object = {};

    object.product = cart[i]._id;
    object.count = cart[i].count;
    //object.type = cart[i].type;
    //object.manufacturer = cart[i].manufacturer;
    //object.year = cart[i].year;
    // get price for creating total
    let productFromDb = await Product.findById(cart[i]._id).select("price").exec();
    object.price = productFromDb.price;

    products.push(object);
  }
  

  // console.log('products', products)

  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal = cartTotal + products[i].price * products[i].count;
  }

  // console.log("cartTotal", cartTotal);

  let newCart = await new Cart({
    products,
    cartTotal,
    orderdBy: user._id,
  }).save();

  console.log("new cart ----> ", newCart);
  res.json({ ok: true });
};

exports.getUserCart = async (req, res) => {
    const user = await User.findOne({ email: req.user.email }).exec();
  
    let cart = await Cart.findOne({ orderdBy: user._id })
      .populate("products.product", "_id title price totalAfterDiscount")
      .exec();
  
    const { products, cartTotal, totalAfterDiscount } = cart;
    res.json({ products, cartTotal, totalAfterDiscount });
  };
  

exports.getcontact = async(req,res) => {
  const user = await User.findOne({ email: req.user.email }).exec();
  let detail = await User.findOne({user : user._id})
  .populate("address").exec();

  const {address} = detail;
  res.json({address})
}



  //empty cart

  exports.emptyCart = async (req, res) => {
    console.log("empty cart");
    const user = await User.findOne({ email: req.user.email }).exec();
  
    const cart = await Cart.findOneAndRemove({ orderdBy: user._id }).exec();
    res.json(cart);
  };
  

 

  exports.savePincode = async (req,res) => {
    const userPincode = await User.findOneAndUpdate(
        { email : req.user.email},
        {pincode : req.body.pincode}
    ).exec();
    res.json({ok:true});
};

exports.contactNo = async (req,res) => {
  const userContact = await User.findOneAndUpdate(
      { email : req.user.email},
      {contact : req.body.contact}
  ).exec();
  res.json({ok:true});
};

exports.saveLocality = async (req,res) => {
  const userLocality = await User.findOneAndUpdate(
      { email : req.user.email},
      {locality : req.body.locality}
  ).exec();
  res.json({ok:true});
};



exports.userName = async (req,res) => {
  const saveName = await User.findOneAndUpdate(
      { email : req.user.email},
      {Customer_name : req.body.Customer_name}
  ).exec();
  res.json({ok:true});
};




exports.saveAddress = async (req,res) => {
  const userAddress = await User.findOneAndUpdate(
      { email : req.user.email},
      {address : req.body.address}
  ).exec();
  res.json({ok:true});
};

exports.applyCouponToUserCart = async (req, res) => {
  const { coupon } = req.body;
  console.log("COUPON", coupon);

  const validCoupon = await Coupon.findOne({ name: coupon }).exec();
  if (validCoupon === null) {
    return res.json({
      err: "Invalid coupon",
    });
  }
  console.log("VALID COUPON", validCoupon);

  const user = await User.findOne({ email: req.user.email }).exec();

  let { products, cartTotal } =  await Cart.findOne({ orderdBy: user._id }) .populate("products.product", "_id title price").exec();

  console.log("cartTotal", cartTotal, "discount%", validCoupon.discount);

  // calculate the total after discount
  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validCoupon.discount) / 100
  ).toFixed(2); // 99.99

  Cart.findOneAndUpdate(
    { orderdBy: user._id },
    { totalAfterDiscount },
    { new: true }
  ).exec();

  res.json(totalAfterDiscount);
  };



exports.createOrder = async (req,res) => {
  const {paymentIntent} = req.body.stripeResponse;
  const user = await User.findOne({ email: req.user.email }).exec();

  let {products} = await Cart.findOne({orderdBy : user._id}).exec();

  let newOrder = await new Order({
    products,
    paymentIntent,
    orderdBy : user._id ,
  }).save();

// decrement quantity , increment sold

let bulkOption = products.map((item) => {
  return {
    updateOne:{
      filter : { _id : item.product._id}, // IMPORTANT item.product
      update : { $inc : { quantity : -item.count , sold: +item.count}},
    },
  }
});

  let updated = await Product.bulkWrite(bulkOption , {});
  console.log("PRODUCT QUANTITY DEC-- AND SOLD++" , updated);



  console.log("new order saved" ,  newOrder);
  res.json({ok:true})
};

//get all orders

exports.orders = async (req,res) => {
  let user = await User.findOne({email : req.user.email}).exec();
let userOrders =  await Order.find({orderdBy : user._id }).sort([["createdAt" , "desc"]])
.populate("products.product")
.exec();

res.json(userOrders)

};


// addToWishlist wishlist removeFromWishlist
exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;

  const user = await User.findOneAndUpdate(
    { email: req.user.email },
    { $addToSet: { wishlist: productId } }
  ).exec();

  res.json({ ok: true });
};

exports.wishlist = async (req, res) => {
  const list = await User.findOne({ email: req.user.email })
    .select("wishlist")
    .populate("wishlist")
    .exec();

  res.json(list);
};


exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.params;
  const user = await User.findOneAndUpdate(
    { email: req.user.email },
    { $pull: { wishlist: productId } }
  ).exec();

  res.json({ ok: true });
};



// cod


exports.createCashOrder = async (req, res) => {
  const { COD, couponApplied } = req.body;
  // if COD is true, create order with status of Cash On Delivery

  if (!COD) return res.status(400).send("Create cash order failed");

  const user = await User.findOne({ email: req.user.email }).exec();

  let userCart = await Cart.findOne({ orderdBy: user._id }).exec();

  let finalAmount = 0;

  if (couponApplied && userCart.totalAfterDiscount) {
    finalAmount = userCart.totalAfterDiscount * 100;
  } else {
    finalAmount = userCart.cartTotal * 100;
  }

  let newOrder = await new Order({
    products: userCart.products,
    paymentIntent: {
      id: uniqueid(),
      amount: finalAmount,
      currency: "inr",
      status: "Cash On Delivery",
      created: Date.now(),
      payment_method_types: ["cash"],
    },
    orderdBy: user._id,
    
  }).save();

  // decrement quantity, increment sold
  let bulkOption = userCart.products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product._id }, // IMPORTANT item.product
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });

  let updated = await Product.bulkWrite(bulkOption, {});
  console.log("PRODUCT QUANTITY-- AND SOLD++", updated);

  console.log("NEW ORDER SAVED", newOrder);
  res.json({ ok: true });
};


// testing
{/*
exports.personalDetails = async (req, res) => {

  const {address, pincode, locality,contact} = req.body;
 const user = await User.create({address, pincode, locality,contact});
  
res.json({ success : true , user});

}
*/}

//get user profile

exports.getUserProfile = async (req,res) => {
  const user = await User.findOne({email: req.user.email}) ;
  res.status(200).json({
    success : true , user
  })
}


// update user

exports.updateProfile = async(req,res) => {
  const newUserData = {name : req.body.name 
    , address : req.body.address, 
    contact : req.body.contact  ,
  pincode : req.body.pincode,

  }

  const user = await User.findOneAndUpdate({email: req.user.email} , newUserData , {
    new: true,

  })
  res.json({ok : true})
}

// add shipping

exports.newShip = async(req,res) => {
 
  const {shipper_name,shipper_address , shipper_contact ,shipper_pincode } = req.body

  const shipping = await User.create({shipper_name,shipper_address , 
      shipper_contact ,shipper_pincode });

  res.json(shipping);
}



exports.saveName = async (req,res) => {
  const userLocality = await User.findOneAndUpdate(
      { email : req.user.email},
      {shipper_name : req.body.shipper_name}
  ).exec();
  res.json({ok:true});
};



exports.shipPincode = async (req,res) => {
  const userPincode = await User.findOneAndUpdate(
      { email : req.user.email},
      {shipper_pincode : req.body.shipper_pincode}
  ).exec();
  res.json({ok:true});
};

exports.shipContact = async (req,res) => {
const userContact = await User.findOneAndUpdate(
    { email : req.user.email},
    {shipper_contact : req.body.shipper_contact}
).exec();
res.json({ok:true});
};

exports.shipLocality = async (req,res) => {
const userLocality = await User.findOneAndUpdate(
    { email : req.user.email},
    {shipper_locality : req.body.shipper_locality}
).exec();
res.json({ok:true});
};


exports.shipAddress = async (req,res) => {
const userAddress = await User.findOneAndUpdate(
    { email : req.user.email},
    {shipper_address : req.body.shipper_address}
).exec();
res.json({ok:true});
};



//update shipping details

exports.updateShipper_name = async(req,res) => {
  const updateName = {shipper_name : req.body.shipper_name 
    

  }

  const user = await User.findOneAndUpdate({email: req.user.email} , updateName , {
    new: true,

  })
  res.json({ok : true})
};


exports.updateShipper_address = async(req,res) => {
  const updateAddress = {shipper_address : req.body.shipper_address 
    

  }

  const user = await User.findOneAndUpdate({email: req.user.email} , updateAddress , {
    new: true,

  })
  res.json({ok : true})
};


exports.updateShipper_pincode = async(req,res) => {
  const updatePincode = {shipper_pincode : req.body.shipper_pincode
    

  }

  const user = await User.findOneAndUpdate({email: req.user.email} , updatePincode , {
    new: true,

  })
  res.json({ok : true})
};


exports.updateShipper_contact = async(req,res) => {
  const updateContact = {shipper_contact : req.body.shipper_contact
    }
const user = await User.findOneAndUpdate({email: req.user.email} , updateContact , {
    new: true,

  })
  res.json({ok : true})
};



exports.updateShipper_locality = async(req,res) => {
  const updateLocality = {shipper_locality : req.body.shipper_locality
    

  }

  const user = await User.findOneAndUpdate({email: req.user.email} , updateLocality , {
    new: true,

  })
  res.json({ok : true})
};

