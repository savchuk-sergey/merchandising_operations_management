const db = require('../db')
const os = require('os')

function Shipment({
                   from,
                   to,
                   out_date
               }) {
    this.from = from
    this.to = to
    this.out_date = out_date
    this.in_date = undefined
}

Shipment.prototype.createShipment = async function () {
    try {
        const {rows} = await db.query(
            `CALL main.create_shipment($1, $2, $3, $4, $5)`,
            [this.from, this.to, new Date(this.out_date), ['1'], [1]]
        );
        return rows
    } catch (error) {
        throw error
    }
};

Shipment.prototype.getShipment = async function () {
    try {
        const {rows} = await db.query(
            `SELECT * FROM main.shipment`
        );
        return rows
    } catch (error) {
        throw error
    }
};

// function populateOrderDetails(pack_qty) {
//     pack_qty.map(pq => {
//         try {
//             console.log(pq.pack, pq.qty)
//             // const {rows} = db.query(
//             //     `INSERT INTO main.order_details(order_id
//             //     pack
//             //     qty
//             // )
//             // VALUES ($1, $2, $3)`,
//             //     [order_id, pq.pack, pq.qty]
//             // );
//             // return rows
//         } catch (error) {
//             throw error
//         }
//     })
// }

module.exports = Shipment
