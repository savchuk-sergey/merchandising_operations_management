const db = require('../db')
const os = require('os')

function Item({
                  item,
                  item_type,
                  description,
                  start_retail,
                  uom
              }) {
    this.item = item
    this.item_type = item_type
    this.description = description
    this.start_retail = start_retail
    this.uom = uom
}

Item.prototype.createItem = async function() {
    try {
        const { rows } = await db.query(
            `call main.create_item($1, $2, $3, $4, $5, $6)`,
            [this.item, this.item_type, this.description, this.start_retail, this.uom, os.userInfo().username]
        );
        return rows
    } catch (error) {
        throw error
    }
};

Item.prototype.getItems = async function() {
    try {
        const { rows } = await db.query(
            `SELECT * FROM main.item`
        );
        return rows
    } catch (error) {
        throw error
    }
};

module.exports = Item
