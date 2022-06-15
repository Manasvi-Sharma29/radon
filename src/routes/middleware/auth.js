const jwt = require("jsonwebtoken")


const mid1 = async function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({ status: false, msg: "token must be present" });

    console.log(token);

    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    else{
        next()
    }
}


const mid2 = async function(req,res,next){
    let token = req.headers['x-auth-token'];
    let decodedToken = jwt.verify(token, "functionup-radon");
    let userToBeModified = req.params.userId;
    let userLoggedIn = decodedToken.userId;
    if(userToBeModified !== userLoggedIn){
        res.send({status: false, msg: "the loggedin user is not authorised to make the changes in requested user data"})
    }
    next()
}
module.exports.mid1 = mid1
module.exports.mid2 = mid2