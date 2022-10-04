const express = require('express');
const router = express.Router();

const whController = require('../controllers/wh');
router.post('/post_whs', whController.postWh);
router.get('/get_whs', whController.getWh);
module.exports = router;
