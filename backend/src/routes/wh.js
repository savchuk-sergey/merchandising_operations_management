const express = require('express')
const router = express.Router()

const whController = require('../controllers/wh')
const path = '/api/whs'

router.post(path, whController.postWh)
router.get(path, whController.getWh)

module.exports = router
