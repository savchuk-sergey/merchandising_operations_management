const express = require('express');
const router = express.Router();

const shipmentDetailsController = require('../controllers/shipment_details');
router.post('/post_orderDetails', shipmentDetailsController.postShipmentDetails);
router.get('/get_orderDetails', shipmentDetailsController.getShipments);
module.exports = router;
