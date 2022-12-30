const db = require('../db')
const os = require('os')

function Shipment({
  shipment_id = '',
  from = '',
  to = '',
  status = '',
  out_date = '',
  in_date = '',
  pack = '',
  qty = '',
}) {
  this.shipment_id = shipment_id
  this.from = from
  this.to = to
  this.status = status
  this.out_date = out_date
  this.in_date = in_date
  this.pack = pack
  this.qty = qty
}

Shipment.prototype.createShipment = async function () {
  try {
    const { rows } = await db.query(
      `CALL main.create_shipment($1, $2, $3, $4, $5)`,
      [
        this.from,
        this.to,
        this.out_date,
        [this.pack],
        [this.qty],
      ]
    )
    return rows
  } catch (error) {
    throw error
  }
}

Shipment.prototype.getShipment = async function () {
  try {
    const { rows } = await db.query(
      `SELECT s.*, sd.pack, sd.qty FROM main.shipment s
                  join main.shipment_details sd on s.id = sd.shipment_id
            `
    )
    return rows
  } catch (error) {
    throw error
  }
}

Shipment.prototype.getShipment = async function () {
  try {
    if (this.in_date === '') {
      const { rows } = await db.query(
        `SELECT s.*, sd.pack, sd.qty FROM main.shipment s
                  join main.shipment_details sd on s.id = sd.shipment_id
                  where s.id::varchar(255) like $1 and
                  s.from::varchar(255) like $2 and
                  s.to::varchar(255) like $3 and
                  s.status::varchar(255) like $4 and 
                  date_trunc('day', s.out_date)::varchar(255) like $5 and
                  sd.pack::varchar(255) like $6 and
                  sd.qty::varchar(255) like $7`,
        [
          `%${this.shipment_id}%`,
          `%${this.from}%`,
          `%${this.to}%`,
          `%${this.status}%`,
          `%${this.out_date}%`,
          `%${this.pack}%`,
          `%${this.qty}%`,
        ]
      )
      return rows
    } else {
      const { rows } = await db.query(
        `SELECT s.*, sd.pack, sd.qty FROM main.shipment s
                  join main.shipment_details sd on s.id = sd.shipment_id
                  where s.id::varchar(255) like $1 and
                  s.from::varchar(255) like $2 and
                  s.to::varchar(255) like $3 and
                  s.status::varchar(255) like $4 and 
                  date_trunc('day', s.out_date)::varchar(255) like $5 and
                  date_trunc('day', s.in_date)::varchar(255) like $6 and
                  sd.pack::varchar(255) like $7 and
                  sd.qty::varchar(255) like $8`,
        [
          `%${this.shipment_id}%`,
          `%${this.from}%`,
          `%${this.to}%`,
          `%${this.status}%`,
          `%${this.out_date}%`,
          `%${this.in_date}%`,
          `%${this.pack}%`,
          `%${this.qty}%`,
        ]
      )
    }
  } catch (error) {
    throw error
  }
}

Shipment.prototype.receiveShipment = async function () {
  try {
    const { rows } = await db.query(
      `update main.shipment
                set status = 'Received',
                in_date = CURRENT_DATE
                where id = $1
            `,
      [this.shipment_id]
    )
    return rows
  } catch (error) {
    throw error
  }
}

module.exports = Shipment
