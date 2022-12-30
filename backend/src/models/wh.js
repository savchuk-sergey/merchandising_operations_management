//Pack data models
const db = require('../db')

function Wh({ wh_name, wh_manager, wh_address }) {
  this.wh_name = wh_name
  this.wh_manager = wh_manager
  this.wh_address = wh_address
}

// add a createStore method to the prototype
Wh.prototype.createWh = async function () {
  try {
    const { rows } = await db.query(
      `INSERT INTO main.wh(wh_name,
                wh_manager,
                wh_address
            )
            VALUES ($1, $2, $3)`,
      [this.wh_name, this.wh_manager, this.wh_address]
    )
    return rows
  } catch (error) {
    throw error
  }
}

Wh.prototype.getWh = async function () {
  try {
    const { rows } = await db.query(`SELECT * FROM main.wh`)
    return rows
  } catch (error) {
    throw error
  }
}

module.exports = Wh
