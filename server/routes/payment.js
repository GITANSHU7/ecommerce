const express = require("express");
const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

//controllers

const { hello } =  require("../controllers/payment");

//routes

router.post("/order" , authCheck , hello);

module.exports = router;
