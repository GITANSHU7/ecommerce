const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const { createOrUpdateUser , currentUser } = require("../controllers/auth");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);

//after reload in page we lost the data like name, role & we donot have to query data base to update the user thats use less
// so we create  a new end point that will gives us currently logged in user 

router.post("/current-user", authCheck, currentUser);


module.exports = router;
