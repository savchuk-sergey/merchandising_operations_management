const express = require('express')
const router = express.Router()

const supplierController = require('../controllers/supplier')
router.post(
  '/post_supplier',
  supplierController.postSupplier
)
router.get(
  '/get_suppliers',
  supplierController.getSuppliers
)
module.exports = router
