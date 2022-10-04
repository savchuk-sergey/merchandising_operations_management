//Pack/warehouse link data model
const db = require('../db')

function PackWh({
                    pack,
                    wh
                }) {
    this.pack = pack
    this.wh = wh
}

// add a createItem method to the prototype
PackWh.prototype.createPackWh = async function () {
    try {
        const {rows} = await db.query(
            `INSERT INTO main.pack_wh(
                  pack,
                  wh)
            VALUES ($1, $2)`,
            [this.pack, this.wh]
        );
        return rows
    } catch (error) {
        throw error
    }
};

PackWh.prototype.getPackWh = async function () {
    try {
        const {rows} = await db.query(
            `SELECT * FROM main.pack_wh`
        );
        return rows
    } catch (error) {
        throw error
    }
};

module.exports = PackWh;
