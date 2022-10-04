const Supplier = require('../models/supplier')

exports.postSupplier = async (req, res, next) => {
    const {
        name,
        address,
        phone_number
    } = req.body
    try {
        const _supplier = new Supplier({
            name,
            address,
            phone_number
        })
        const result = await _supplier.createSupplier()
        res.status(201).send({message:`Supplier: ${name} has been integrated`});
    } catch (error) {
        res.status(500).send({message: error.message})
        next(error);
    }
}

exports.getSuppliers = async (req, res, next) => {
    const {
        name,
        address,
        phone_number
    } = req.body
    try {
        const _supplier = new Supplier({
            name,
            address,
            phone_number
        })
        const result = await _supplier.getSupplier()
        res.send(result)
    } catch (error) {
        res.status(500).send({message: error.message})
        next(error);
    }
}
