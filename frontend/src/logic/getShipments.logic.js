import getData from './utils/getData'

const getShipments = () => {
  return getData('http://localhost:3000/get_shipments')
    .then((r) => {
      return r
    })
    .catch((e) => {
      alert(e.message)
    })
}

export default getShipments
