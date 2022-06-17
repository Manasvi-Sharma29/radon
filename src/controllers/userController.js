const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try{
      let data = req.body;
      if(Object.keys(data).length != 0){
          let savedData = await userModel.create(data);
          console.log(req.newAttribute);
          res.status(200).send({ msg: savedData });
      }else{
        res.status(400).send({msg:"BAD REQUEST"})
      }
  }
  catch(error){
    console.log("this is error:", error.message)
    res.status(500).send({msg:Error, error: error.message})
  }
};

const loginUser = async function (req, res) {
  try{
      let userName = req.body.emailId;
      let password = req.body.password;

      let user = await userModel.findOne({ emailId: userName, password: password });
      if (!user)
        return res.status(400).send({
          status: false,
          msg: "(BAD REQUEST)username or the password is not correct",
        });

      // Once the login is successful, create the jwt token with sign function
      // Sign function has 2 inputs:
      // Input 1 is the payload or the object containing data to be set in token
      // The decision about what data to put in token depends on the business requirement
      // Input 2 is the secret
      // The same secret will be used to decode tokens
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "thorium",
          organisation: "FunctionUp",
        },
        "functionup-radon"
      );
      res.setHeader("x-auth-token", token);
      res.status(200).send({ status: true, token: token });
      }
      catch(error){
        console.log("this is error:", error.message)
        res.status(500).send({msg:Error, error: error.message})
      }
};



const getUserData = async function (req, res) {
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  try{
      let userId = req.params.userId;
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.Status(400).send({ status: false, msg: "No such user exists(BAD REQUEST)" });

      res.status(200).send({ status: true, data: userDetails });
    }
    catch(error){
      console.log("this is error:", error.message)
      res.status(500).send({msg:Error, error: error.message})
    }
};



const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases
try{
      let userId = req.params.userId;
      let user = await userModel.findById(userId);
      //Return an error if no user with the given id exists in the db
      if (!user) {
        return res.status(400).send("(BAD REQUEST)No such user exists");
      }
      let data = req.body
      if(Object.keys(data).length != 0){
          let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, data, {new: true});
          res.status(200).send({ status: "updatedUser", data: updatedUser });
      }else{
        res.status(400).send({error: "BAD REQUEST"})
      }
    }
    catch(error){
      console.log("this is error:", error.message)
      res.status(500).send({msg:Error, error: error.message})
    }
};



const deleteUser = async function(req, res){
  try{
      let userId = req.params.userId
      let user = await userModel.findById(userId)
      if(!user){
        res.status(400).send({msg: "(BAD REQUEST)no user with this id"})
      }

      let deleteUser = await userModel.updateOne({ _id:userId },{$set:{isDeleted:true}}, {new:true})
      res.status(200).send({status:"deleted" , data: deleteUser })
    }
    catch(error){
      console.log("this is error:", error.message)
      res.status(500).send({msg:Error, error: error.message})
    }
}

const writePostMessage = async function( req, res){
  try{
      let message = req.body.message
      let userId = req.params.userId
      let user = await userModel.findById(userId)
      if(!user){

        res.status(400).send({status: false, msg: "(BAD REQUEST)this user does not exist"})
      }
      let postToBeUpdated = user.posts
      postToBeUpdated.push(message)
      let updatedPost = await userModel.findOneAndUpdate({ _id:userId },{posts: postToBeUpdated},{new:true})
      res.status(200).send({status:true, msg: updatedPost}) 
    }
    catch(error){
      console.log("this is error:", error.message)
      res.status(500).send({msg:Error, error: error.message})
    }
}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
module.exports.writePostMessage = writePostMessage
