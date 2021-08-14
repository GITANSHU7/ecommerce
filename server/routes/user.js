const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");
// controllers
const { userCart , getUserCart , emptyCart , saveAddress , savePincode, contactNo, userName, saveLocality ,
    applyCouponToUserCart , createOrder , orders , 
    addToWishlist , removeFromWishlist , wishlist , createCashOrder, create , getUserProfile} = require("../controllers/user");

router.post("/all/cart", authCheck, userCart); // save cart
router.get("/all/cart", authCheck, getUserCart); // save cart
router.put("/all/cart", authCheck, emptyCart); // delete cart

router.post("/user/pincode", authCheck , savePincode);
router.post("/user/contact", authCheck, contactNo);
router.post("/user/locality", authCheck, saveLocality);
router.post("/user/name", authCheck, userName);
router.post("/user/address" , authCheck , saveAddress);
//coupon 
router.post("/user/cart/coupon" , authCheck,applyCouponToUserCart);

//order

router.post("/user/order" , authCheck , createOrder); //stripe
router.post("/user/cash-order" , authCheck , createCashOrder); //cod

//GET ALL ORDER IN USER END
router.get("/user/orders" , authCheck, orders)

//wishlist 
router.post("/user/wishlist" , authCheck , addToWishlist);
router.get("/user/wishlist" , authCheck , wishlist);
router.put("/user/wishlist/:productId" , authCheck , removeFromWishlist)


//router.post("/address", authCheck , create);


// get user details

router.get("/user/profile" , authCheck ,getUserProfile)

module.exports = router;
