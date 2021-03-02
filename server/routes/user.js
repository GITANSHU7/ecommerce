const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");
// controllers
const { userCart , getUserCart , emptyCart , saveAddress , savePincode, contactNo ,applyCouponToUserCart} = require("../controllers/user");

router.post("/all/cart", authCheck, userCart); // save cart
router.get("/all/cart", authCheck, getUserCart); // save cart
router.put("/all/cart", authCheck, emptyCart); // delete cart
router.post("/user/address" , authCheck , saveAddress);
router.post("/user/pincode", authCheck , savePincode);
router.post("/addresscontact", authCheck, contactNo);

//coupon 
router.post("/user/cart/coupon" , authCheck,applyCouponToUserCart);


module.exports = router;
