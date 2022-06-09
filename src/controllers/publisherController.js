const publisherModel = require('../models/publisherModel')

const createPublisher = async function(req,res){
    let publisher = req.body
    let publisherData = await publisherModel.create(publisher)
    res.send({data:publisherData})
}

module.exports.createPublisher = createPublisher