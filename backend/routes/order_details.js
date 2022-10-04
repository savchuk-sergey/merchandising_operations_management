const express = require('express');
const router = express.Router();

const orderDetailsController = require('../controllers/order_details');
router.post('/post_orderDetails', orderDetailsController.postOrderDetails);
router.get('/get_orderDetails', orderDetailsController.getOrderDetails);
module.exports = router;
