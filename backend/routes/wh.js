const express = require('express');
const router = express.Router();

const whController = require('../controllers/wh');
router.post('/post_wh', whController.postWh);
router.get('/get_whs', whController.getWh);
module.exports = router;
