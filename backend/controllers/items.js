const Item = require('../models/Item');

exports.getItems = async (req, res, next) => {
    //getting item data from request body
    const {item, item_type, description, start_retail, uom} = req.body;
    try {
        const _item = new Item({item, item_type, description, start_retail, uom});
        const result = await _item.getItems();
        res.send(result);
    } catch (error) {
        res.status(500).send({message: error.message})
        next(error);
    }
};

exports.postItem = async (req, res, next) => {
    const {item, item_type, description, start_retail, uom} = req.body;
    try {
        const _item = new Item({item, item_type, description, start_retail, uom});
        const result = await _item.createItem();
        res.status(201).send({message:`Item: ${item} has been integrated`});
    } catch (error) {
        res.status(500).send({message: error.message})
        next(error);
    }
};
