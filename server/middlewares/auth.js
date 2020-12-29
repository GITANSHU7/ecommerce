


const admin = require("../firebase");



// to check whether the admin is valid
exports.authCheck = (req, res, next) => {
  console.log(req.headers); // token
  next();
};
