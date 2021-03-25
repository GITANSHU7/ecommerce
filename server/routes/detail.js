const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {create} = require("../controllers/detail");

//router

router.post("/detail", authCheck, create);

module.exports = router;
