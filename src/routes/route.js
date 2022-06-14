const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMW = require("./middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/getUser/:userId" ,commonMW.mid1 , userController.getUserData)

router.put("/updateUser/:userId" ,commonMW.mid1 , userController.updateUser)

router.delete("/deleteUser/:userId" , commonMW.mid1 , userController.deleteUser)

module.exports = router;