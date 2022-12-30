const db = require('../db')

function OrderDetail({ order_id, pack, qty }) {
  this.order_id = order_id
  this.pack = pack
  this.qty = qty
}

OrderDetail.prototype.createOrderDetails =
  async function () {
    try {
      const { rows } = await db.query(
        `INSERT INTO main.order_details(
                    order_id,
                    pack,
                    qty
            )
            VALUES ((SELECT last_value FROM order_id_seq), $2, $3)`,
        [this.order_id, this.pack, this.qty]
      )
      return rows
    } catch (error) {
      throw error
    }
  }

OrderDetail.prototype.getOrderDetails = async function () {
  try {
    const { rows } = await db.query(
      `SELECT * FROM main.order_details`
    )
    return rows
  } catch (error) {
    throw error
  }
}

module.exports = OrderDetail
