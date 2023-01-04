const bp = require('body-parser')
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

const itemsRoute = require('./routes/items')
const storesRoute = require('./routes/stores')
const itemStoresRoute = require('./routes/item_stores')
const promotionsRoute = require('./routes/promotions')
const packRoute = require('./routes/pack')
const packWhRoute = require('./routes/pack_wh')
const supplierRoute = require('./routes/supplier')
const whRoute = require('./routes/wh')
const orderRoute = require('./routes/order')
const shipmentRoute = require('./routes/shipment')
const priceChangeRoute = require('./routes/price_change')

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(itemsRoute)
app.use(storesRoute)
app.use(itemStoresRoute)
app.use(promotionsRoute)
app.use(packRoute)
app.use(packWhRoute)
// app.use(storeSohRoute)
app.use(supplierRoute)
app.use(whRoute)
app.use(orderRoute)
app.use(shipmentRoute)
app.use(priceChangeRoute)
require('./routes/auth')(app)
require('./routes/user')(app)

const db = require('./models')

db.sequelize.sync()

app.get('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  Promise.resolve()
    .then(function () {
      throw new Error('BROKEN')
    })
    .catch(next)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
