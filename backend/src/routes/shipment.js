const express = require('express')
const router = express.Router()

const shipmentController = require('../controllers/shipment')
const path = '/api/shipments'

router.post(path, shipmentController.postShipment)
router.get(path, shipmentController.getShipments)
router.patch(path, shipmentController.receiveShipment)

module.exports = router
