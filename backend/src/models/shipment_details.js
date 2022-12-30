const db = require('../db')

function ShipmentDetail({ shipment_id, pack, qty }) {
  this.shipment_id = shipment_id
  this.pack = pack
  this.qty = qty
}

ShipmentDetail.prototype.createShipmentDetail =
  async function () {
    try {
      const { rows } = await db.query(
        `INSERT INTO main.shipment_details(
                    shipment_id,
                    pack,
                    qty
                )
            VALUES ($1, $2, $3)`,
        [this.shipment_id, this.pack, this.qty]
      )
      return rows
    } catch (error) {
      throw error
    }
  }

ShipmentDetail.prototype.getShipmentDetail =
  async function () {
    try {
      const { rows } = await db.query(
        `SELECT * FROM main.shipment_details`
      )
      return rows
    } catch (error) {
      throw error
    }
  }

module.exports = ShipmentDetail
