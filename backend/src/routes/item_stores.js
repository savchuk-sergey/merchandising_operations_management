const express = require('express')
const router = express.Router()

const createItemStoreController = require('../controllers/item_stores')
router.post(
  '/post_item_store',
  createItemStoreController.postItemStore
)
router.get(
  '/get_item_stores',
  createItemStoreController.getItemStores
)
module.exports = router

