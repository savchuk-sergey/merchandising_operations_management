const Store = require('../models/store')

exports.postStore = async (req, res, next) => {
    const {store, store_name, store_manager, open_date, close_date, phone_number, store_type, default_wh} = req.body
    try {
        const _store = new Store({store, store_name, store_manager, open_date, close_date, phone_number, store_type, default_wh})
        const result = await _store.createStore()
        res.send(_store)
    } catch (error) {
        next(error)
    }
}

exports.getStores = async (req, res, next) => {
    const {store, store_name, store_manager, open_date, close_date, phone_number, store_type, default_wh} = req.body
    try {
        const _store = new Store({store, store_name, store_manager, open_date, close_date, phone_number, store_type, default_wh})
        const result = await _store.getStores()
        res.send(result)
    } catch (error) {
        next(error)
    }
}
