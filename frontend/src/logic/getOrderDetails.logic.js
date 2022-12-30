import getData from './utils/getData'

const getOrderDetails = (params = {}) => {
  return getData('http://localhost:3000/get_order_details')
    .then((r) => {
      return r
    })
    .catch((e) => {
      alert(e.message)
    })
}

export default getOrderDetails
