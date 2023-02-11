const Shipment = require('../models/shipment')

exports.postShipment = async (req, res, next) => {
  console.log(req.body)
  const { from, to, pack, qty } = req.body
  try {
    const _shipment = new Shipment({
      from,
      to,
      pack,
      qty,
    })
    const result = await _shipment.createShipment()
    res
      .status(201)
      .send({ message: `Shipment was integrated` })
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}

exports.getShipments = async (req, res, next) => {
  const { from, to, out_date } = req.body

  try {
    const _shipment = new Shipment({
      from,
      to,
      out_date,
    })
    const result = await _shipment.getShipment()
    res.send(result)
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}

exports.receiveShipment = async (req, res, next) => {
  const { shipment_id } = req.body
  console.log(req.body)
  try {
    const _shipment = new Shipment({ shipment_id })
    const result = await _shipment.receiveShipment()
    res
      .status(201)
      .send({
        message: `Shipment: ${shipment_id} has been received`,
      })
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}
