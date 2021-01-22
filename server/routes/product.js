const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { create , listAll , remove , read , update} = require("../controllers/product");

// routes
router.post("/product/product-create", authCheck, adminCheck, create);
router.get("/products/:count",  listAll );
router.delete("/product/:slug",  authCheck , adminCheck , remove);
router.get("/product/:slug" , read);
router.put("/product/:slug", authCheck, adminCheck, update);

module.exports = router;
