const SET_PROMOTIONS = 'SET_PROMOTIONS'

const initialState = {
  promotions: [],
}

const promotionsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_PROMOTIONS:
      return {
        ...state,
        promotions: action.payload.promotions,
      }
    default:
      return state
  }
}

export const setPromotions = (promotions) => ({
  type: SET_PROMOTIONS,
  payload: { promotions },
})
export default promotionsReducer
