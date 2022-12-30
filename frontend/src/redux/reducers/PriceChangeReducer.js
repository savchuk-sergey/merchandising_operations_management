const SET_PRICE_CHANGE = 'SET_PRICE_CHANGE'

const initialState = {
  priceChange: {
    item: '',
    store: '',
    change_amount: '',
  },
}

const priceChangeReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_PRICE_CHANGE:
      return {
        ...state,
        priceChange: action.payload.priceChange,
      }
    default:
      return state
  }
}

export const setPriceChange = (priceChange) => ({
  type: SET_PRICE_CHANGE,
  payload: { priceChange },
})
export default priceChangeReducer
