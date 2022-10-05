const db = require('../db')

function Order({
                   supplier_id,
                   wh_id,
                   order_date
               }) {
    this.order_id = ''
    this.supplier_id = supplier_id
    this.wh_id = wh_id
    this.order_date = order_date
    // this.status = status
    // this.receive_date = receive_date
    // this.pack_qty = pack_qty
    // this.order_details = order_details
}

Order.prototype.createOrder = async function () {
    try {
        const {rows} = await db.query(
            `CALL main.create_order($1, $2, $3, $4, $5)`,
            [this.supplier_id, this.wh_id, new Date(this.order_date), ['1', '1', '1'], [1, 2, 3]]
        );
        return rows
    } catch (error) {
        throw error
    }
};

Order.prototype.getOrder = async function () {
    try {
        const {rows} = await db.query(
            `select * from main.order`
        );
        return rows
    } catch (error) {
        throw error
    }
};

module.exports = Order
