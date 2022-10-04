const SET_PACK_WHS = 'SET_PACK_WHS'

const initialState = {
  packWhs: []
}

const packWhsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PACK_WHS:
      return {
        ...state,
        packWhs: action.payload.packWhs
      }
    default:
      return state
  }
}

export const setPackWhs = (packWhs) => (
  {
    type: SET_PACK_WHS,
    payload: {packWhs}
  }
)
export default packWhsReducer;
