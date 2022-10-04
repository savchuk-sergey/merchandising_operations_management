const SET_STORES = 'SET_STORES'

const initialState = {
  stores: []
}

const storesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORES:
      return {
        ...state,
        stores: action.payload.stores
      }
    default:
      return state
  }
}

export const setStores = (stores) => (
  {
    type: SET_STORES,
    payload: {stores}
  }
)
export default storesReducer;
