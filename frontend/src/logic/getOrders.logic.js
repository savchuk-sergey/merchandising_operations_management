import getData from './utils/getData'

const getOrders = () => {
  return getData('http://localhost:3000/get_orders')
    .then((r) => {
      return r
    })
    .catch((e) => {
      alert(e.message)
    })
}

export default getOrders
