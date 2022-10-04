//Warehouse data models
const db = require('../db')

function Pack({
                  pack,
                  supplier_id,
                  pack_qty,
                  item_id,
                  description,
                  cost
              }) {
    this.pack = pack
    this.supplier_id = supplier_id
    this.pack_qty = pack_qty
    this.item_id = item_id
    this.description = description
    this.cost = cost
}

// add a createStore method to the prototype
Pack.prototype.createPack = async function () {
    try {
        const {rows} = await db.query(
            `INSERT INTO main.pack(pack,
                supplier_id,
                pack_qty,
                item_id,
                description,
                cost
            )
            VALUES ($1, $2, $3, $4, $5, $6)`,
            [this.pack, this.supplier_id, this.pack_qty, this.item_id, this.description, this.cost]
        );
        return rows
    } catch (error) {
        throw error
    }
};

Pack.prototype.getPack = async function () {
    try {
        const {rows} = await db.query(
            `SELECT * FROM main.pack`
        );
        return rows
    } catch (error) {
        throw error
    }
};

module.exports = Pack
