const {
  createItem,
  getItems,
  deleteItem,
} = require('../models/Item')

exports.getItems = async (req, res, next) => {
  //const {item, item_type, description, start_retail, uom} = req.body;

  try {
    const result = await getItems()
    res.status(201).send(result)
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}

exports.postItem = async (req, res, next) => {
  const {
    item,
    item_type,
    description,
    start_retail,
    uom,
  } = req.body
  try {
    await createItem(
      item,
      item_type,
      description,
      start_retail,
      uom
    )
    res.status(201).send({
      message: `Item: ${item} has been integrated`,
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}

exports.removeItem = async (req, res, next) => {
  const itemId = req.params.itemId

  console.log(req.body)
  try {
    const result = await deleteItem(itemId)
    res.status(201).send({
      message: `Item: ${result.item} has been deleted`,
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}
