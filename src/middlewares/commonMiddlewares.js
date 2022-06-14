// ASSIGNMENT

const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const mid1 = function(req, res, next){
    let header = req.headers["isFreeAppUser"]
    if(!header){
        header = req.headers["isfreeappuser"]
        next()
    }
    if(!header){
        res.send({msg: "The request is missing a mandatory header"})
    }
}
const mid2 = async function(req, res, next){
    
}



// const mid3 = async function(req,res,next){
//     let productId = req.body.product_id
//     let userId = req.body.user_id
//     let bal = await userModel.findById({userId}).select({})
//     if(bal.balance >= 100){
//         let checkPrice = await productModel.findById({productId}).select({price:1, _id:0})
//         let newBalance = bal.price.updateOne({_id:userId},{$inc:{price:-checkPrice.price}})
//     }
//     next()
// }

module.exports.mid1 = mid1
