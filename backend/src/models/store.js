//Store data models
const db = require('../db')

function Store({
  store = '',
  store_name = '',
  store_manager = '',
  phone_number = '',
  store_type = '',
  default_wh = '',
  open_date = '',
  close_date = '',
}) {
  this.store = store
  this.store_name = store_name
  this.store_manager = store_manager
  this.phone_number = phone_number
  this.store_type = store_type
  this.default_wh = default_wh
  this.open_date = open_date
  this.close_date = close_date
}

// add a createStore method to the prototype
Store.prototype.createStore = async function () {
  try {
    console.log(new Date(this.open_date))
    console.log(this.open_date)
    const { rows } = await db.query(
      `INSERT INTO main.store(store,
                   store_name,
                   store_manager,
                   open_date,
                   phone_number,
                   store_type,
                   default_wh)
            VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        this.store,
        this.store_name,
        this.store_manager,
        new Date(this.open_date),
        this.phone_number,
        this.store_type,
        this.default_wh,
      ]
    )

    return rows
  } catch (error) {
    throw error
  }
}

// Store.prototype.getStores = async function () {
//   try {
//     const { rows } = await db.query(
//       `SELECT * FROM main.store`
//     )
//     return rows
//   } catch (error) {
//     throw error
//   }
// }

Store.prototype.getStores = async function () {
  try {
    if (this.close_date === '') {
      const { rows } = await db.query(
        `select * from main.store
                where store::varchar(255) like $1 and
                store_name::varchar(255) like $2 and 
                store_manager::varchar(255) like $3 and
                phone_number::varchar(255) like $4 and
                store_type::varchar(255) like $5 and
                default_wh::varchar(255) like $6 and
                date_trunc('day', open_date)::varchar(255) like $7`,
        [
          `%${this.store}%`,
          `%${this.store_name}%`,
          `%${this.store_manager}%`,
          `%${this.phone_number}%`,
          `%${this.store_type}%`,
          `%${this.default_wh}%`,
          `%${this.open_date}%`,
        ]
      )
      return rows
    } else {
      const { rows } = await db.query(
        `select * from main.store
                where store::varchar(255) like $1 and
                store_name::varchar(255) like $2 and 
                store_manager::varchar(255) like $3 and
                phone_number::varchar(255) like $4 and
                store_type::varchar(255) like $5 and
                default_wh::varchar(255) like $6 and
                date_trunc('day', open_date)::varchar(255) like $7 and
                close_date::varchar(255) like $8`,
        [
          `%${this.store}%`,
          `%${this.store_name}%`,
          `%${this.store_manager}%`,
          `%${this.phone_number}%`,
          `%${this.store_type}%`,
          `%${this.default_wh}%`,
          `%${this.open_date}%`,
          `%${this.close_date}%`,
        ]
      )
      return rows
    }
  } catch (error) {
    throw error
  }
}

module.exports = Store
