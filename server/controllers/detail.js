const Detail = require("../models/detail");
const User = require("../models/user");
// create, remove, list

exports.create = async (req, res) => {
    try {
      const { name, address, contact,pincode, locality } = req.body.detail;
   res.json(await new Detail({ name, address, contact,pincode, locality }).save());
    } catch (err) {
      console.log(err);
    }
  };