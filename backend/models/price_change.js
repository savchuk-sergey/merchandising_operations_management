//Pack/warehouse link data model
const db = require('../db')

function PriceChange({
                    item,
                    store,
                    change_amount
                }) {
    this.item = item
    this.store = store
    this.change_amount = change_amount
}

// add a createItem method to the prototype
PriceChange.prototype.createPriceChange = async function () {
    try {
        const { rows } = await db.query(
            `UPDATE main.item_store
             set retail_price = $1
             where item_id = $2 and store_id = $3`,
            [this.change_amount, this.item, this.store]
        );
        return rows
    } catch (error) {
        throw error;
    }
};

module.exports = PriceChange;
