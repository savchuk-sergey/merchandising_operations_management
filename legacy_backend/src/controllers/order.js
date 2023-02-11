const {
  createOrder,
  getOrder,
  receiveOrder,
} = require('../models/order')

exports.postOrder = async (req, res, next) => {
  console.log(req.body)
  const { supplier_id, wh_id, pack, qty } = req.body
  try {
    const result = await createOrder(
      parseInt(supplier_id),
      parseInt(wh_id),
      new Date(),
      pack,
      qty
    )
    res.status(201).send({
      message: `Order ${result.id} was integrated`,
    })
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
    const result = await getOrder()
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
    const result = await receiveOrder(parseInt(order_id))
    res.status(201).send({
      message: `Order: ${result.id} has been received`,
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}
