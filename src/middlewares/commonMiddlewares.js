// ASSIGNMENT

const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
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
    let idNew = data.user_id
    let idNew2 = data.product_id
    if(idNew){
        let userId = await userModel.find({ _id:idNew })
        if(userId.length>0){
            if(idNew2){
                let productId = await productModel.find({ _id:idNew2 })
                if(productId.length > 0){
                    next()                   
                }else{
                    res.send({msg: "product id is not valid"}) 
                }
           }
        }else{
            res.send({msg: "user id is not valid"})   
        }
    }
}

// const mid3 = async function(req, res, next){
//    if(req.header['isfreeappuser'] = true){
//     req.body.amount = 0
//     req.body.isFreeAppUser = true
//    }else{
//         let productId = req.body.product_id
//         let userId = req.body.user_id
//         let checkPrice = await productModel.findById({productId}).select({price:1, _id:0})
//         if(checkPrice.price>100){
//             let newBal = await productModel.updateOne({_id:userId},{$inc: {balance: -checkPrice.price}})
//             let amt = req.body.amount
//             amt = checkprice.price
//             let app = req.body.isFreeAppUser
//             app = false
//             next()
//         }
        
//    }
// }

const mid3 = async function(req,res,next){
    let productId = req.body.product_id
    let userId = req.body.user_id
    let bal = await userModel.findById({userId})
    if(bal.balance >= 100){
        let checkPrice = await productModel.findById({productId}).select({price:1, _id:0})
        let newBalance = bal.price.updateOne({_id:userId},{$inc:{price:-checkPrice.price}})
    }
}

module.exports.mid1 = mid1
module.exports.mid2 = mid2
module.exports.mid3 = mid3