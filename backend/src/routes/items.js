const express = require('express')
const router = express.Router()

const itemsController = require('../controllers/items')
const path = '/api/items'

router.post(path, itemsController.postItem)
router.get(path, itemsController.getItems)
router.delete(path + ':itemId', itemsController.removeItem)

module.exports = router
