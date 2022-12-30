//Pack/warehouse link data model
const db = require('../db')

function PackWh({ pack = '', wh = '', qty = '' }) {
  this.pack = pack
  this.wh = wh
  this.qty = qty
}

// add a createItem method to the prototype
PackWh.prototype.createPackWh = async function () {
  try {
    const { rows } = await db.query(
      `INSERT INTO main.pack_wh(
                  pack,
                  wh)
            VALUES ($1, $2)`,
      [this.pack, this.wh]
    )
    return rows
  } catch (error) {
    throw error
  }
}

// PackWh.prototype.getPackWh = async function () {
//   try {
//     const { rows } = await db.query(
//       `SELECT * FROM main.pack_wh`
//     )
//     return rows
//   } catch (error) {
//     throw error
//   }
// }

PackWh.prototype.getPackWh = async function () {
  try {
    const { rows } = await db.query(
      `select * from main.pack_wh
              where pack::varchar(255) like $1 and 
              wh::varchar(255) like $2 and
              qty::varchar(255) like $3`,
      [`%${this.pack}%`, `%${this.wh}%`, `%${this.qty}%`]
    )
    return rows
  } catch (error) {
    throw error
  }
}

PackWh.prototype.deletePackWh = async function () {
  try {
    const { rows } = await db.query(
      `DELETE FROM main.pack_wh
            WHERE pack = $1 and wh = $2`,
      [this.pack, this.wh]
    )
    return rows
  } catch (error) {
    throw error
  }
}

module.exports = PackWh
