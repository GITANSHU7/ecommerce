const { response } = require("express");
const express = require("express");

const router = express.Router()

router.get("/user",  (req,res) => {
    res.send({
        data:"hey this is user portal"
    })})

    module.exports = router;