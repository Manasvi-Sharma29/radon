const orderModel = require('../models/orderModel')

const createOrder = async function(req, res,){
    let order = req.body
    let savedOrder = await orderModel.create(order)
    res.send({msg: savedOrder})
}

module.exports.createOrder = createOrder