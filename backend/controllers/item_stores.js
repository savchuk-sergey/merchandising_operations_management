const ItemStore = require('../models/Item_store');

exports.postItemStore = async (req, res, next) => {
    const {item, store, retail_price} = req.body;
    // console.log(req.body)
    try {
        const _itemStore = new ItemStore({item, store, retail_price});
        const result = await _itemStore.createItemStore();
        res.status(201).send({message:`Item Store Link: ${item}/${store} was integrated`});
    } catch (error) {
        res.status(500).send({message: error.message})
        next(error);
    }
};

exports.getItemStores = async (req, res, next) => {
    const {item, store, retail_price} = req.body;
    try {
        const _item_stores = new ItemStore({item, store, retail_price});
        const result = await _item_stores.getItemStores();
        res.send(result);
    } catch (error) {
        res.status(500).send({message: error.message})
        next(error);
    }
};
