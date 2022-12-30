const express = require('express')
const router = express.Router()

const itemsController = require('../controllers/items')
router.post('/post_item', itemsController.postItem)
router.get('/get_items', itemsController.getItems)
router.post('/remove_item', itemsController.removeItem)
// router.post('/post_item', (req, res) => {
//     console.log(req)
//     res.send(req.body)
// })
module.exports = router
