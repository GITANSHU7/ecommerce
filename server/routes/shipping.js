const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller

const { create } = require("../controllers/shipping");


//routes

router.post("/add-shipping" , authCheck ,create);

module.exports = router;