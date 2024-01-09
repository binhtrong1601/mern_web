const express = require('express')
const router = express.Router()
const UserController = require("../controller/UserController")
const { authMiddleware, authUserMiddleware } = require('../middleware/authMiddleware')

router.post('/signup',UserController.createUser)
router.post('/login',UserController.loginUser)
router.post('/logout',UserController.logoutUser)
router.put('/update-user/:id',UserController.updateUser)
router.delete('/delete-user/:id',authMiddleware ,UserController.deleteUserUser)
router.get("/getAll",authMiddleware,UserController.getAllUser)
router.get("/get-details/:id",authUserMiddleware , UserController.getDetailUser)
router.post("/refresh-token", UserController.refreshToken)

module.exports = router