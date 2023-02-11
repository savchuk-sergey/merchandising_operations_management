const express = require('express')
const router = express.Router()

const priceChangeController = require('../controllers/price_change')
const path = '/api/price_change'

router.post(path, priceChangeController.postPriceChange)

module.exports = router
