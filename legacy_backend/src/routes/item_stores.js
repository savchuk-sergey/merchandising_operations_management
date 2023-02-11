const express = require('express')
const router = express.Router()

const createItemStoreController = require('../controllers/item_stores')
const path = '/api/item_stores'

router.post(path, createItemStoreController.postItemStore)
router.get(path, createItemStoreController.getItemStores)

module.exports = router
