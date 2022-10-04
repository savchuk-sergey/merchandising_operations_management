//returns all items
const Pack = require('../models/pack');

exports.postPacks = async (req, res, next) => {
    //getting item data from request body
    console.log(req.body)
    const {
        pack,
        supplier_id,
        pack_qty,
        item_id,
        description,
        cost
    } = req.body;
    try {
        const _pack = new Pack({
            pack,
            supplier_id,
            pack_qty,
            item_id,
            description,
            cost
        });
        const result = await _pack.createPack();
        res.status(201).send({message:`Pack: ${pack} has been integrated`});
    } catch (error) {
        res.status(500).send({message: error.message})
        next(error);
    }
};

exports.getPacks = async (req, res, next) => {
    //getting item data from request body
    const {
        pack,
        supplier_id,
        pack_qty,
        item_id,
        description,
        cost
    } = req.body;
    try {
        const _pack = new Pack({
            pack,
            supplier_id,
            pack_qty,
            item_id,
            description,
            cost
        });
        const result = await _pack.getPack();
        res.send(result);
    } catch (error) {
        next(error)
    }
};
