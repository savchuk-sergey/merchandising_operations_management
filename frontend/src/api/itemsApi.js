import axios from 'axios'

const apiUrl = 'http://localhost:3000/api/'

const itemsApi = axios.create({
  baseURL: apiUrl + 'items',
})

const itemStoresApi = axios.create({
  baseURL: apiUrl + 'item_stores',
})

export const createItem = async (item) => {
  return itemsApi.post('', { item }).then((r) => r.data)
}

export const getItems = async () => {
  return itemsApi.get('').then((r) => r.data)
}

export const deleteItem = async (itemId) => {
  return itemsApi.delete(`/${itemId}`).then((r) => r.data)
}

export const getItemStores = async () => {
  return itemStoresApi.get('').then((r) => r.data)
}

export const createItemStore = async () => {
  return itemStoresApi.post('').then((r) => r.data)
}
