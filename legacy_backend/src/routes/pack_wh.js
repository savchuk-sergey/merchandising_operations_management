const express = require('express')
const router = express.Router()

const packWhController = require('../controllers/pack_wh')
const path = '/api/pack_whs'

router.post(path, packWhController.postPackWh)
router.get(path, packWhController.getPackWh)

module.exports = router
