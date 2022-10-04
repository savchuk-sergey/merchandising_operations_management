const express = require('express');
const router = express.Router();

const createPromotionController = require('../controllers/promotions');
router.post('/post_promotion', createPromotionController.postPromotion);
router.get('/get_promotions', createPromotionController.getPromotions);
module.exports = router;
