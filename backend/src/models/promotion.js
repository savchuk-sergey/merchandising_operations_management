//Promotion data models
const db = require('../db')

function Promotion({
  id = '',
  item = '',
  store = '',
  discount_type = '',
  discount_amount = '',
  start_date = '',
  end_date = '',
}) {
  this.id = id
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
    const { rows } = await db.query(
      `INSERT INTO main.promotion(item,
                       store,
                       discount_type,
                       discount_amount,
                       start_date,
                       end_date)
            VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        this.item,
        this.store,
        this.discount_type,
        this.discount_amount,
        new Date(this.start_date),
        new Date(this.end_date),
      ]
    )
    return rows
  } catch (error) {
    throw error
  }
}

// Promotion.prototype.getPromotions = async function () {
//   try {
//     const { rows } = await db.query(
//       `SELECT * FROM main.promotion`
//     )
//     return rows
//   } catch (error) {
//     throw error
//   }
// }

Promotion.prototype.getPromotions = async function () {
  try {
    const { rows } = await db.query(
      `select * from main.promotion
              where id::varchar(255) like $1 and
              item::varchar(255) like $2 and 
              store::varchar(255) like $3 and
              discount_type::varchar(255) like $4 and
              discount_amount::varchar(255) like $5 and
              date_trunc('day', start_date)::varchar(255) like $6 and
              date_trunc('day', end_date)::varchar(255) like $7`,
      [
        `%${this.id}%`,
        `%${this.item}%`,
        `%${this.store}%`,
        `%${this.discount_type}%`,
        `%${this.discount_amount}%`,
        `%${this.start_date}%`,
        `%${this.end_date}%`,
      ]
    )
    return rows
  } catch (error) {
    throw error
  }
}

module.exports = Promotion
