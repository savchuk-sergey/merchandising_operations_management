const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order');
router.post('/post_order', orderController.postOrder);
router.get('/get_order', orderController.getOrders);
module.exports = router;
