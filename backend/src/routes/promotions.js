const express = require('express')
const router = express.Router()

const createPromotionController = require('../controllers/promotions')
const path = '/api/promotions'

router.post(path, createPromotionController.postPromotion)
router.get(path, createPromotionController.getPromotions)

module.exports = router
