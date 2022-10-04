const OrderDetail = require('../models/order_details');

exports.postOrderDetails = async (req, res, next) => {
    console.log(req.body)
    const {
        order_id,
        pack,
        qty
    } = req.body;
    try {
        const _order = new OrderDetail({
            order_id,
            pack,
            qty
        });
        const result = await _order.createOrderDetails();
        console.log(result)
        res.send(result);
    } catch (error) {
        next(error);
    }
};

exports.getOrderDetails = async (req, res, next) => {
    const {
        order_id,
        pack,
        qty
    } = req.body;
    try {
        const _order = new OrderDetail({
            order_id,
            pack,
            qty
        });
        const result = await _order.getOrderDetails();
        res.send(result);
    } catch (error) {
        next(error)
    }
};
