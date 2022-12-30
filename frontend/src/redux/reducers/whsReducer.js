const SET_WHS = 'SET_WHS'
const SET_WH = 'SET_WH'
const POST_WH = 'POST_WH'

const initialState = {
  whs: [],
  wh: {
    wh_name: '',
    wh_manager: '',
    wh_address: '',
  },
}

const whsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WHS:
      return {
        ...state,
        whs: action.payload.whs,
      }
    case SET_WH:
      return {
        ...state,
        wh: action.payload.wh,
      }
    case POST_WH:
      return {
        ...state,
        wh: {
          ...initialState.wh,
        },
      }
    default:
      return state
  }
}

export const setWhs = (whs) => ({
  type: SET_WHS,
  payload: { whs },
})

export const setWh = (wh) => ({
  type: SET_WH,
  payload: { wh },
})

export const postWh = () => ({
  type: POST_WH,
})

export default whsReducer
