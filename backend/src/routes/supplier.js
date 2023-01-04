const express = require('express')
const router = express.Router()

const supplierController = require('../controllers/supplier')
const path = '/api/suppliers'

router.post(path, supplierController.postSupplier)
router.get(path, supplierController.getSuppliers)

module.exports = router
