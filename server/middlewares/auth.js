const admin = require("../firebase");

// to check whether the admin is valid
exports.authCheck = (req, res, next) => {
  //console.log(req.headers); // token
  try{
    const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken)
    console.log('Firebase user in authcheck', firebaseUser)
    req.user = firebaseUser;
  }catch (err){
    console.log(err);
    res.status(401).json({
      err:"Invalid or expired token"
    })
  }
  
};
