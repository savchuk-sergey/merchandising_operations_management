const Promotion = require('../models/promotion')

exports.postPromotion = async (req, res, next) => {
  const {
    item,
    store,
    discount_type,
    discount_amount,
    start_date,
    end_date,
  } = req.body
  try {
    const _promotion = new Promotion({
      item,
      store,
      discount_type,
      discount_amount,
      start_date,
      end_date,
    })
    const result = await _promotion.createPromotion()
    res.send(_promotion)
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}

exports.getPromotions = async (req, res, next) => {
  // const {
  //   item,
  //   store,
  //   discount_type,
  //   discount_amount,
  //   start_date,
  //   end_date,
  // } = req.body
  try {
    const _promotion = new Promotion(req.body)
    console.log(req.body)
    const result = await _promotion.getPromotions()
    res.send(result)
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}
