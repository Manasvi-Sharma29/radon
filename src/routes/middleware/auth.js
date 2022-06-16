const jwt = require("jsonwebtoken")


const mid1 = async function(req,res,next){
    try{
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];

        if (!token) return res.status(400).send({ status: false, msg: "token must be present(BAD REQUEST)" });

        console.log(token);

        let decodedToken = jwt.verify(token, "functionup-radon");
        if (!decodedToken)
        return res.status(400).send({ status: false, msg: "token is invalid(BAD REQUEST)" });
        else{
            next()
        }
    }
    catch(error){
        console.log("this is error:", error.message)
        res.status(500).send({msg:Error, error: error.message})
    }
}



const mid2 = async function(req,res,next){
    try{
        let token = req.headers['x-auth-token'];
        let decodedToken = jwt.verify(token, "functionup-radon");
        let userToBeModified = req.params.userId;
        let userLoggedIn = decodedToken.userId;
        if(userToBeModified !== userLoggedIn){
            res.status(400).send({status: false, msg: "(BAD REQUEST) the logged in user is not authorised to make the changes in requested user data"})
        }
        next()
    }
    catch(error){
        console.log("this is error:", error.message)
        res.status(500).send({msg:Error, error: error.message})
    }
}
module.exports.mid1 = mid1
module.exports.mid2 = mid2