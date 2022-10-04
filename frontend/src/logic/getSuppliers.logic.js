import getData from "./utils/getData";

const getSuppliers = () => {
  return getData('http://localhost:3000/get_suppliers')
    .then(r => {
      return r
    })
    .catch(e => {
      alert(e.message)
    })

}

export default getSuppliers
