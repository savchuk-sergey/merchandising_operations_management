const Order = require('../models/order')

exports.postOrder = async (req, res, next) => {
  console.log(req.body)
  const { supplier_id, wh_id, pack, qty } = req.body
  try {
    const _order = new Order({
      supplier_id,
      wh_id,
      pack,
      qty,
    })

    const result = await _order.createOrder()
    res
      .status(201)
      .send({ message: `Order was integrated` })
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}

exports.getOrders = async (req, res, next) => {
  // const {
  //     supplier_id,
  //     wh_id,
  //     status,
  //     order_date,
  //     receive_date,
  // } = req.body;
  try {
    const _order = new Order(req.body)
    const result = await _order.getOrder()
    res.send(result)
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}

exports.receiveOrder = async (req, res, next) => {
  const { order_id } = req.body
  console.log(order_id)
  try {
    const _order = new Order({ order_id })
    const result = await _order.receiveOrder()
    res
      .status(201)
      .send({
        message: `Order: ${order_id} has been received`,
      })
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}
