import getData from "./utils/getData";

const getItems = (params = {}) => {
  return getData('http://localhost:3000/get_items')
    .then(r => {
      return r
    })
    .catch(e => {
      alert(e.message)
    })

}

export default getItems
