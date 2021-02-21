const express = require("express");

const router = express.Router();

// middlewares 
const { authCheck } = require("../middlewares/auth");

//controllers

const { userCart } = require("../controllers/user") ;
const { getUserCart } = require("../controllers/user") ;


router.post("/user/cart" , authCheck, userCart)// save to cart
router.get("/user/cart" , authCheck, getUserCart)// get cart



module.exports = router;
