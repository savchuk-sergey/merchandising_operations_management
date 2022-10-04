const express = require('express');
const router = express.Router();

const createStoreController = require('../controllers/stores');
router.post('/post_store', createStoreController.postStore);
router.get('/get_stores', createStoreController.getStores);

module.exports = router;
