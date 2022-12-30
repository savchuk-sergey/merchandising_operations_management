import getData from './utils/getData'
import searchData from './utils/searchData'

const getItems = () => {
  return getData('http://localhost:3000/get_items')
    .then((r) => {
      return r
    })
    .catch((e) => {
      alert(e.message)
    })
}

export const searchItems = (data) => {
  return searchData('http://localhost:3000/get_items', data)
}

export default getItems
