const express = require('express');
const router = express.Router();

const supplierController = require('../controllers/supplier');
router.post('/post_pack', supplierController.postSupplier);
router.get('/get_packs', supplierController.getSuppliers);
module.exports = router;
