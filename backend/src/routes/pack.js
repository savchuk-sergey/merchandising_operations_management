const express = require('express')
const router = express.Router()

const packController = require('../controllers/pack')
router.post('/post_pack', packController.postPacks)
router.get('/get_packs', packController.getPacks)
module.exports = router
