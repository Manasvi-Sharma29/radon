const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData

// ASSIGNMENT

const createBook = async function(req, res){
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({msg: savedData})
}

const getBook = async function(req, res){
    let allBooks = await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook = createBook
module.exports.getBook = getBook