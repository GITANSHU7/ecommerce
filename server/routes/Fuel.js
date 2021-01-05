const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  read,
  update,
  remove,
  list,
} = require("../controllers/fuel");

// routes
router.post("/fuel", authCheck, adminCheck, create);
router.get("/fuel-types", list);
router.get("/fuel/:slug", read);
router.put("/fuel/:slug", authCheck, adminCheck, update);
router.delete("/fuel/:slug", authCheck, adminCheck, remove);

module.exports = router;
