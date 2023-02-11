const SET_STORES = 'SET_STORES'
const SET_STORE = 'SET_STORE'
const POST_STORE = 'POST_STORE'

const initialState = {
  stores: [],
  store: {
    store: '',
    store_name: '',
    store_manager: '',
    phone_number: '',
    store_type: '',
    default_wh: '',
    open_date: '',
    close_date: '',
  },
}

const storesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORES:
      return {
        ...state,
        stores: action.payload.stores,
      }
    case SET_STORE:
      return {
        ...state,
        store: action.payload.store,
      }
    case POST_STORE:
      return {
        ...state,
        store: {
          ...initialState.store,
        },
      }
    default:
      return state
  }
}

export const setStores = (stores) => ({
  type: SET_STORES,
  payload: { stores },
})

export const setStore = (store) => ({
  type: SET_STORE,
  payload: { store },
})

export const postStore = () => ({
  type: POST_STORE,
})

export default storesReducer
