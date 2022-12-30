const ShipmentDetails = require('../models/shipment_details')

exports.postShipmentDetails = async (req, res, next) => {
  const { shipment_id, pack, qty } = req.body
  try {
    const _shipment = new ShipmentDetails({
      shipment_id,
      pack,
      qty,
    })
    const result = await _shipment.createShipmentDetail()
    res.send(result)
  } catch (error) {
    next(error)
  }
}

exports.getShipments = async (req, res, next) => {
  const { shipment_id, pack, qty } = req.body

  try {
    const _shipment = new ShipmentDetails({
      shipment_id,
      pack,
      qty,
    })
    const result = await _shipment.getShipmentDetail()
    res.send(result)
  } catch (error) {
    next(error)
  }
}
