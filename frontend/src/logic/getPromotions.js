import getData from './utils/getData'

const getPromotions = (id = '') => {
  return getData('http://localhost:3000/get_promotions')
    .then((r) => {
      return r
    })
    .catch((e) => {
      alert(e.message)
    })
}

export default getPromotions
