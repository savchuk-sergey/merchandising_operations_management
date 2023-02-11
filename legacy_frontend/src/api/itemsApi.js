import axios from 'axios'

const apiUrl = 'http://localhost:3000/api/'

const axiosInstance = axios.create({
  baseURL: apiUrl,
})

const itemsApi = {
  createItem(item) {
    return axiosInstance
      .post('items', item)
      .then((r) => r.data)
  },

  getItems() {
    return axiosInstance.get('items').then((r) => {
      return r.data
    })
  },

  deleteItem(itemId) {
    return axiosInstance
      .delete(`items/${itemId}`)
      .then((r) => r.data)
  },

  getItemStores() {
    return axiosInstance
      .get('item_stores')
      .then((r) => r.data)
  },

  createItemStore(itemStore) {
    return axiosInstance
      .post('item_stores', { itemStore })
      .then((r) => r.data)
  },
}

export default itemsApi
