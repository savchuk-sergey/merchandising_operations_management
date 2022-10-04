const SET_PACK_WHS = 'SET_PACK_WHS'
const SET_PACK_WH = 'SET_PACK_WH'
const POST_PACK_WH = 'POST_PACK_WH'

const initialState = {
  packWhs: [],
  packWh: {
    pack: '',
    wh: ''
  }
}

const packWhsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PACK_WHS:
      return {
        ...state,
        packWhs: action.payload.packWhs
      }
    case SET_PACK_WH:
      return {
        ...state,
        packWh: action.payload.packWh
      }
    case POST_PACK_WH:
      return {
        ...state,
        packWh: {...initialState.packWh}
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

export const setPackWh = (packWh) => (
  {
    type: SET_PACK_WH,
    payload: {packWh}
  }
)

export const postPackWh = () => (
  {
    type: POST_PACK_WH
  }
)

export default packWhsReducer;
