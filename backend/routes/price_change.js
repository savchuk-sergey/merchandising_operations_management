const express = require('express');
const router = express.Router();

const priceChangeController = require('../controllers/price_change');
router.post('/post_price_change', priceChangeController.postPriceChange);
module.exports = router;
