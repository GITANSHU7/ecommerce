const admin = require("../firebase");

// to check whether the admin is valid
exports.authCheck = (req, res, next) => {
  //console.log(req.headers); // token
  try{

  }catch (err){
    res.status(401).json({
      err:"Invalid or expired token"
    })
  }
  
};
