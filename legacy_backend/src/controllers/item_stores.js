const {
  createItemStore,
  getItemStores,
} = require('../models/Item_store')

exports.postItemStore = async (req, res, next) => {
  const { item, store, retail_price } = req.body
  // console.log(req.body)
  try {
    const result = await createItemStore(
      item,
      store,
      retail_price
    )
    res.status(201).send({
      message: `Item Store Link: ${result.item}/${result.store} was integrated`,
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}

exports.getItemStores = async (req, res, next) => {
  // const { item, store, retail_price } = req.body
  try {
    const result = await getItemStores()
    res.send(result)
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}
