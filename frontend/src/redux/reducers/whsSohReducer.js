const SET_WHS_SOH = 'SET_WHS_SOH'

const initialState = {
  whsSoh: [],
}

const whsSohReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WHS_SOH:
      return {
        ...state,
        stores: action.payload.whsSoh,
      }
    default:
      return state
  }
}

export const setWhsSoh = (whsSoh) => ({
  type: SET_WHS_SOH,
  payload: { whsSoh },
})
export default whsSohReducer
