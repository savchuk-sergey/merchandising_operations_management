const SET_STORES_SOH = 'SET_STORES_SOH'

const initialState = {
  storesSoh: [],
}

const storesSohReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORES_SOH:
      return {
        ...state,
        stores: action.payload.storesSoh,
      }
    default:
      return state
  }
}

export const setStoresSoh = (storesSoh) => ({
  type: SET_STORES_SOH,
  payload: { storesSoh },
})
export default storesSohReducer
