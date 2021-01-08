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
} = require("../controllers/model");

// routes
router.post("/model", authCheck, adminCheck, create);
router.get("/models", list);
router.get("/model/:slug", read);
router.put("/model/model-update/:slug", authCheck, adminCheck, update);
router.delete("/model/:slug", authCheck, adminCheck, remove);

module.exports = router;
