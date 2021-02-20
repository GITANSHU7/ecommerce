const express = require("express");

const router = express.Router();

// middlewares 
const { authCheck } = require("../middlewares/auth");

//controllers

const { userCart } = require("../controllers/user") ;


router.post("/cart" , authCheck, userCart)// save to cart



module.exports = router;
