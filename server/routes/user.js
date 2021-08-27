const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");
// controllers
const { userCart , getUserCart , emptyCart , saveAddress , savePincode, contactNo, userName, saveLocality ,
    applyCouponToUserCart , createOrder , orders , 
    addToWishlist , removeFromWishlist , wishlist , 
    createCashOrder, updateProfile, getUserProfile, newShip, saveName, shipAddress, shipContact, shipPincode, updateShipper_name, updateShipper_address, updateShipper_contact, updateShipper_pincode, getcontact, personalDetails, updateShipper_locality} = require("../controllers/user");
const { update } = require("../models/user");

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


// update user details

router.put("/user/update-profile" , authCheck , updateProfile)

//add shipping details
router.post("/user/user-shipping" , authCheck , newShip)

router.post("/user/shipper/name", authCheck, saveName);
router.post("/user/shipper/pincode", authCheck, shipPincode);
router.post("/user/shipper/address", authCheck, shipAddress);
router.post("/user/shipper/contact", authCheck, shipContact);

router.put("/user/update/name", authCheck, updateShipper_name);
router.put("/user/update/address", authCheck, updateShipper_address);
router.put("/user/update/contact", authCheck, updateShipper_contact);
router.put("/user/update/pincode", authCheck, updateShipper_pincode);
router.put("/user/update/locality", authCheck, updateShipper_locality);

router.get("/user/get-contact" , authCheck,getcontact);



module.exports = router;
