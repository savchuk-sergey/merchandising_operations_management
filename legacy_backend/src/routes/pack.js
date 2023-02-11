const express = require('express')
const router = express.Router()

const packController = require('../controllers/pack')
const path = '/api/packs'

router.post(path, packController.postPacks)
router.get(path, packController.getPacks)

module.exports = router
