const SET_ITEM_STORES = 'SET_ITEM_STORES'

const initialState = {
  itemStores: [],
}

const itemStoresReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_ITEM_STORES:
      return {
        ...state,
        itemStores: action.payload.itemStores,
      }
    default:
      return state
  }
}

export const setItemStores = (itemStores) => ({
  type: SET_ITEM_STORES,
  payload: { itemStores },
})
export default itemStoresReducer
