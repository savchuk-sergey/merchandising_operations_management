//Store data models
const db = require('../db')

function Store({
                   store,
                   store_name,
                   store_manager,
                   open_date,
                   close_date,
                   phone_number,
                   store_type,
                   default_wh
              }) {
        this.store = store
        this.store_name = store_name
        this.store_manager = store_manager
        this.open_date = open_date
        this.phone_number = phone_number
        this.store_type = store_type
        this.default_wh = default_wh
        close_date = undefined
}

// add a createStore method to the prototype
Store.prototype.createStore = async function() {
    try {
        const { rows } = await db.query(
            `INSERT INTO main.store(store,
                   store_name,
                   store_manager,
                   open_date,
                   phone_number,
                   store_type,
                   default_wh)
            VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [this.store, this.store_name, this.store_manager, new Date(this.open_date), this.phone_number, this.store_type, this.default_wh]
        );
        console.log(new Date(this.open_date))
        return rows
    } catch (error) {
        throw error
    }
};

Store.prototype.getStores = async function() {
    try {
        const { rows } = await db.query(
            `SELECT * FROM main.store`
        );
        return rows
    } catch (error) {
        throw error
    }
};

module.exports = Store
