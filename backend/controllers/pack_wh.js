const PackWh = require('../models/pack_wh');

exports.postPackWh = async (req, res, next) => {
    console.log(req.body)
    const {
        pack,
        wh
    } = req.body;
    try {
        const _packWh = new PackWh({
            pack,
            wh
        });
        const result = await _packWh.createPackWh();
        res.send(_packWh);
    } catch (error) {
        next(error);
    }
};

exports.getPackWh = async (req, res, next) => {
    const {
        pack,
        wh,
        qty
    } = req.body;
    try {
        const _packWh = new PackWh({
            pack,
            wh,
            qty
        });
        const result = await _packWh.getPackWh();
        res.send(result);
    } catch (error) {
        res.status(500).send({message: error.message})
        next(error);
    }
};

// exports.postItemStore = async (req, res, next) => {
//     const {item, store, retail_price} = req.body;
//     try {
//         const _itemStore = new ItemStore({item, store, retail_price});
//         const result = await _itemStore.createItemStore();
//         res.status(201).send({message:`Item Store Link: ${item}/${store} was integrated`});
//     } catch (error) {
//         res.status(500).send({message: error.message})
//         next(error);
//     }
// };
//
// exports.getItemStores = async (req, res, next) => {
//     const {item, store, retail_price} = req.body;
//     try {
//         const _item_stores = new ItemStore({item, store, retail_price});
//         const result = await _item_stores.getItemStores();
//         res.send(result);
//     } catch (error) {
//         res.status(500).send({message: error.message})
//         next(error);
//     }
// };
