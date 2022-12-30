//Supplier data model
const db = require('../db')

function Supplier({ name, address, phone_number }) {
  this.name = name
  this.address = address
  this.phone_number = phone_number
}

// add a createStore method to the prototype
Supplier.prototype.createSupplier = async function () {
  try {
    const { rows } = await db.query(
      `INSERT INTO main.supplier(name,
                address,
                phone_number
            )
            VALUES ($1, $2, $3)`,
      [this.name, this.address, this.phone_number]
    )
    return rows
  } catch (error) {
    throw error
  }
}

Supplier.prototype.getSupplier = async function () {
  try {
    const { rows } = await db.query(
      `SELECT * FROM main.supplier`
    )
    return rows
  } catch (error) {
    throw error
  }
}

module.exports = Supplier
