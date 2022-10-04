//item/store link data models
const db = require('../db')

function ItemStore({
                       item,
                       store,
                       retail_price
                   }) {
    this.item = item
    this.store = store
    this.retail_price = retail_price
}

// add a createItem method to the prototype
ItemStore.prototype.createItemStore = async function () {
    try {
        console.log(this.item, this.store, this.retail_price)
        const {rows} = await db.query(
            `call main.create_item_store($1, $2, $3, $4)`,
            [this.item, this.store, this.retail_price, 'admin']
        );
        return rows
    } catch (error) {
        throw error
    }
};

ItemStore.prototype.getItemStores = async function() {
    try {
        const { rows } = await db.query(
            `SELECT * FROM main.item_store`
        );
        return rows
    } catch (error) {
        throw error
    }
};

module.exports = ItemStore;
