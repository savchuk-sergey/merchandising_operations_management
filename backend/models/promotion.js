//Promotion data models
const db = require('../db')

function Promotion({
                       item,
                       store,
                       discount_type,
                       discount_amount,
                       start_date,
                       end_date
                   }) {
    this.item = item
    this.store = store
    this.discount_type = discount_type
    this.discount_amount = discount_amount
    this.start_date = start_date
    this.end_date = end_date
}

// add a createStore method to the prototype
Promotion.prototype.createPromotion = async function () {
    try {
        const {rows} = await db.query(
            `INSERT INTO main.promotion(item,
                       store,
                       discount_type,
                       discount_amount,
                       start_date,
                       end_date)
            VALUES ($1, $2, $3, $4, $5, $6)`,
            [this.item, this.store, this.discount_type, this.discount_amount, new Date(this.start_date), new Date(this.end_date)]
        );
        return rows
    } catch (error) {
        throw error
    }
};

Promotion.prototype.getPromotions = async function() {
    try {
        const { rows } = await db.query(
            `SELECT * FROM main.promotion`
        );
        return rows
    } catch (error) {
        throw error
    }
};


module.exports = Promotion
