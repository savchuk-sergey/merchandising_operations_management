const Promotion = require('../models/promotion');

exports.postPromotion = async (req, res, next) => {
    const {item, store, discount_type, discount_amount, start_date, end_date} = req.body;
    try {
        const _promotion = new Promotion({item, store, discount_type, discount_amount, start_date, end_date});
        const result = await _promotion.createPromotion();
        res.send(_promotion);
    } catch (error) {
        next(error);
    }
};

exports.getPromotions = async (req, res, next) => {
    const {item, store, discount_type, discount_amount, start_date, end_date} = req.body;
    try {
        const _promotion = new Promotion({item, store, discount_type, discount_amount, start_date, end_date});
        const result = await _promotion.getPromotions();
        res.send(result);
    } catch (error) {
        next(error);
    }
};
