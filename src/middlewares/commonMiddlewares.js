// ASSIGNMENT

const userModel = require("../models/userModel")

const mid1 = function(req, res, next){
    if(req.headers.isfreeappuser){
        next()
    }else{
        res.send({msg: "The request is missing a mandatory header"})
    }
}

const mid2 = async function(req,res,next){
    let data = req.body
    let idOfUser = data.user_id
    // let finalId = await userModel.find({_id})
    if(idOfUser){
        let Id = await userModel.find({_id:authorId})
    }
    if(finalId.length==0){
        res.send({msg:"user id is not valid "})
    }else{
        next()
    }
}
module.exports.mid1 = mid1
module.exports.mid2 = mid2