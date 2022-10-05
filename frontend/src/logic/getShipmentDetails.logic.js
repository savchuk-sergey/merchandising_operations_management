import getData from "./utils/getData";

const getShipmentDetails = (params = {}) => {
  return getData('http://localhost:3000/get_shipment_details')
    .then(r => {
      return r
    })
    .catch(e => {
      alert(e.message)
    })

}

export default getShipmentDetails
