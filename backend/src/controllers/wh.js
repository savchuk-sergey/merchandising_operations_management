const Wh = require('../models/wh')

exports.postWh = async (req, res, next) => {
  const { wh_name, wh_manager, wh_address } = req.body
  try {
    const _wh = new Wh({
      wh_name,
      wh_manager,
      wh_address,
    })
    const result = await _wh.createWh()
    res
      .status(201)
      .send({
        message: `Wh: ${wh_name} has been integrated`,
      })
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}

exports.getWh = async (req, res, next) => {
  const { wh_name, wh_manager, wh_address } = req.body
  try {
    const _wh = new Wh({
      wh_name,
      wh_manager,
      wh_address,
    })
    const result = await _wh.getWh()
    res.send(result)
  } catch (error) {
    res.status(500).send({ message: error.message })
    next(error)
  }
}
