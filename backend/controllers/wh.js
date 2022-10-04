const Wh = require('../models/wh')

exports.postWh = async (req, res, next) => {
    const {
        wh_name,
        wh_manager,
        wh_address
    } = req.body
    try {
        const _wh = new Wh({
            wh_name,
            wh_manager,
            wh_address
        })
        const result = await _wh.createWh()
        res.send(_wh)
    } catch (error) {
        next(error)
    }
}

exports.getWh = async (req, res, next) => {
    const {
        wh_name,
        wh_manager,
        wh_address
    } = req.body
    try {
        const _wh = new Wh({
            wh_name,
            wh_manager,
            wh_address
        })
        const result = await _wh.getWh()
        res.send(result)
    } catch (error) {
        next(error)
    }
}
