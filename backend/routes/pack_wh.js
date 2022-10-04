const express = require('express');
const router = express.Router();

const packWhController = require('../controllers/pack_wh');
router.post('/post_pack_wh', packWhController.postPackWh);
router.get('/get_packWh', packWhController.getPackWh);
module.exports = router;
