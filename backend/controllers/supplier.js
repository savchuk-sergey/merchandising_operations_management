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
        res.send(_supplier)
    } catch (error) {
        next(error)
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
        next(error)
    }
}
