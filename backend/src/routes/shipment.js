const express = require('express')
const router = express.Router()

const shipmentController = require('../controllers/shipment')
router.post(
  '/post_shipment',
  shipmentController.postShipment
)
router.get(
  '/get_shipments',
  shipmentController.getShipments
)
router.post(
  '/receive_shipment',
  shipmentController.receiveShipment
)
module.exports = router
