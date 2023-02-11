const express = require('express')
const router = express.Router()

const orderController = require('../controllers/order')
const path = '/api/orders'

router.post(path, orderController.postOrder)
router.get(path, orderController.getOrders)
router.patch(path, orderController.receiveOrder)

module.exports = router
