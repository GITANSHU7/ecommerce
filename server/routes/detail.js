const express = require("express");
const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const {  create  } = require("../controllers/detail");

//router

router.post("/address", authCheck , create);
//router.post("/contact", authCheck, contactNo);
//router.post("/locality", authCheck, saveLocality);
//router.post("/name", authCheck, userName);
//router.post("/address" , authCheck , saveAddress);

module.exports = router;
