const express = require('express')
const router = express.Router()

const shipmentDetailsController = require('../controllers/shipment_details')
router.post(
  '/post_shipment_detail',
  shipmentDetailsController.postShipmentDetails
)
router.get(
  '/get_shipment_details',
  shipmentDetailsController.getShipments
)
module.exports = router
