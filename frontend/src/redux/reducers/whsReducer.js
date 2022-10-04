const SET_WHS = 'SET_WHS'

const initialState = {
  whs: []
}

const whsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WHS:
      return {
        ...state,
        whs: action.payload.whs
      }
    default:
      return state
  }
}

export const setWhs = (whs) => (
  {
    type: SET_WHS,
    payload: {whs}
  }
)
export default whsReducer;
