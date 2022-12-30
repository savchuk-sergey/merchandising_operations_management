const db = require('../db')

function Order({
  order_id = '',
  supplier_id = '',
  wh_id = '',
  status = '',
  order_date = '',
  receive_date = '',
  pack = '',
  qty = '',
}) {
  this.order_id = order_id
  this.supplier_id = supplier_id
  this.wh_id = wh_id
  this.order_date = order_date
  this.status = status
  this.receive_date = receive_date
  //this.pack_qty = pack_qty
  this.pack = pack
  this.qty = qty
}

Order.prototype.createOrder = async function () {
  try {
    const { rows } = await db.query(
      `CALL main.create_order($1, $2, $3, $4, $5)`,
      [
        this.supplier_id,
        this.wh_id,
        this.order_date,
        [this.pack],
        [this.qty],
      ]
    )
    return rows
  } catch (error) {
    throw error
  }
}

// Order.prototype.getOrder = async function () {
//   try {
//     const { rows } = await db.query(
//       `select o.*, od.pack, od.qty from main."order" o
//                   join main.order_details od
//                   on o.id = od.order_id`
//     )
//     return rows
//   } catch (error) {
//     throw error
//   }
// }

Order.prototype.getOrder = async function () {
  try {
    if (this.receive_date === '') {
      const { rows } = await db.query(
        `select o.*, od.pack, od.qty from main."order" o
                  join main.order_details od 
                  on o.id = od.order_id
                  where o.id::varchar(255) like $1 and
                  o.supplier_id::varchar(255) like $2 and
                  o.wh_id::varchar(255) like $3 and
                  o.status::varchar(255) like $4 and 
                  date_trunc('day', o.order_date)::varchar(255) like $5 and
                  od.pack::varchar(255) like $6 and
                  od.qty::varchar(255) like $7`,
        [
          `%${this.order_id}%`,
          `%${this.supplier_id}%`,
          `%${this.wh_id}%`,
          `%${this.status}%`,
          `%${this.order_date}%`,
          `%${this.pack}%`,
          `%${this.qty}%`,
        ]
      )
      console.log(this)
      return rows
    } else {
      const { rows } = await db.query(
        `select o.*, od.pack, od.qty from main."order" o
                  join main.order_details od 
                  on o.id = od.order_id
                  where o.id::varchar(255) like $1 and
                  o.supplier_id::varchar(255) like $2 and
                  o.wh_id::varchar(255) like $3 and
                  o.status::varchar(255) like $4 and 
                  date_trunc('day', o.order_date)::varchar(255) like $5 and
                  date_trunc('day', o.receive_date)::varchar(255) like $6 and
                  od.pack::varchar(255) like $7 and
                  od.qty::varchar(255) like $8`,
        [
          `%${this.order_id}%`,
          `%${this.supplier_id}%`,
          `%${this.wh_id}%`,
          `%${this.status}%`,
          `%${this.order_date}%`,
          `%${this.receive_date}%`,
          `%${this.pack}%`,
          `%${this.qty}%`,
        ]
      )
      return rows
    }
  } catch (error) {
    throw error
  }
}

Order.prototype.receiveOrder = async function () {
  try {
    const { rows } = await db.query(
      `update main."order"
                set status = 'Received',
                receive_date = CURRENT_DATE
                where id = $1
            `,
      [this.order_id]
    )
    return rows
  } catch (error) {
    throw error
  }
}

module.exports = Order
