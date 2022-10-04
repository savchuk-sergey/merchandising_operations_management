const Shipment = require('../models/shipment');

exports.postShipment = async (req, res, next) => {
    console.log(req.body)
    const {
        from,
        to,
        out_date
    } = req.body;
    try {
        const _shipment = new Shipment({
            from,
            to,
            out_date
        });
        const result = await _shipment.createShipment();
        res.send(result);
    } catch (error) {
        next(error);
    }
};

exports.getShipments = async (req, res, next) => {
    const {
        from,
        to,
        out_date
    } = req.body;

    try {
        const _shipment = new Shipment({
            from,
            to,
            out_date
        });
        const result = await _shipment.getShipment();
        res.send(result);
    } catch (error) {
        next(error)
    }
};
