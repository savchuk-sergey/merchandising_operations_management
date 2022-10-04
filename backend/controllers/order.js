const Order = require('../models/order');

exports.postOrder = async (req, res, next) => {
    console.log(req.body)
    const {
        supplier_id,
        wh_id,
        order_date
    } = req.body;
    try {
        const _order = new Order({
            supplier_id,
            wh_id,
            order_date
        });

        const result = await _order.createOrder();
        res.status(201).send({message:`Order was integrated`});
        res.send(result);
    } catch (error) {
        next(error);
    }
};

exports.getOrders = async (req, res, next) => {
    const {
        supplier_id,
        wh_id,
        status,
        order_date,
        receive_date,
        pack_qty,
        order_details
    } = req.body;
    try {
        const _order = new Order({
            supplier_id,
            wh_id,
            status,
            order_date,
            receive_date,
            pack_qty,
            order_details
        });
        const result = await _order.getOrder();
        res.send(result);
    } catch (error) {
        next(error)
    }
};
