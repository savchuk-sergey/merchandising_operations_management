const express = require('express')
const router = express.Router()

const createStoreController = require('../controllers/stores')
const path = '/api/stores'

router.post(path, createStoreController.postStore)
router.get(path, createStoreController.getStores)

module.exports = router
