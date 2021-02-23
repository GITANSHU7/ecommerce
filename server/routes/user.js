const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");
// controllers
const { userCart , getUserCart , emptyCart} = require("../controllers/user");

router.post("/all/cart", authCheck, userCart); // save cart
router.get("/all/cart", authCheck, getUserCart); // save cart
router.put("/all/cart", authCheck, emptyCart); // delete cart

module.exports = router;
