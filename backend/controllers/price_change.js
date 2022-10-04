const PriceChange = require('../models/price_change');

exports.postPriceChange = async (req, res, next) => {
    console.log(req.body)
    const {
        item,
        store,
        change_amount
    } = req.body;
    try {
        const _priceChange = new PriceChange({
            item,
            store,
            change_amount
        });
        const result = await _priceChange.createPriceChange();
        res.status(201).send({message:`Price change for ${item}/${store} has been integrated`});
    } catch (error) {
        next(error);
    }
};
