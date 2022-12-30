import getData from './utils/getData'

const getStores = (id = '') => {
  return getData('http://localhost:3000/get_stores')
    .then((r) => {
      return r
    })
    .catch((e) => {
      alert(e.message)
    })
}

export default getStores
