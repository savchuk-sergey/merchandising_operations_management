import getData from './utils/getData'

const getPackWhLinks = () => {
  return getData('http://localhost:3000/get_pack_whs')
    .then((r) => {
      return r
    })
    .catch((e) => {
      alert(e.message)
    })
}

export default getPackWhLinks
