const PackWh = require('../models/pack_wh')

exports.postPackWh = async (req, res, next) => {
  console.log(req.body)
  const { pack, wh } = req.body
  try {
    const _packWh = new PackWh({
      pack,
      wh,
    })
    const result = await _packWh.createPackWh()
    res
      .status(201)
      .send({
        message: `Pack Wh link: ${pack}/${wh} has been integrated`,
      })
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}

exports.getPackWh = async (req, res, next) => {
  const { pack, wh, qty } = req.body
  try {
    const _packWh = new PackWh({
      pack,
      wh,
      qty,
    })
    const result = await _packWh.getPackWh()
    res.status(201).send(result)
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}
