const express = require('express')
const router = express.Router()

const orderDetailsController = require('../controllers/order_details')
router.post(
  '/post_order_details',
  orderDetailsController.postOrderDetails
)
router.get(
  '/get_order_details',
  orderDetailsController.getOrderDetails
)
module.exports = router
