const express = require('express')
const router = express.Router()
const ProductController = require("../controller/ProductController")
const {authMiddleware} = require("../middleware/authMiddleWare")

router.post('/create',ProductController.createProduct)
router.put('/update/:id',authMiddleware , ProductController.updateProduct)
router.get('/get-details/:id' , ProductController.getDetailProduct)
router.get('/get-all' , ProductController.getAllProduct)
router.delete('/delete/:id' , ProductController.deleteProduct)
router.delete('/delete-all', ProductController.deleteAllProduct)
module.exports = router