import getData from './utils/getData'

const getItemStoreLinks = (params = {}) => {
  return getData('http://localhost:3000/get_item_stores')
    .then((r) => {
      return r
    })
    .catch((e) => {
      alert(e.message)
    })
}

export default getItemStoreLinks
