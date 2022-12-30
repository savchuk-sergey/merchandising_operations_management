const SET_ORDERS = 'SET_ORDERS'
const SET_ORDER = 'SET_ORDER'
const POST_ORDER = 'POST_ORDER'
const SER_PACKS_COUNT = 'SER_PACKS_COUNT'

const initialState = {
  orders: [],
  order: {
    supplier_id: '',
    wh_id: '',
    pack: '',
    qty: '',
  },
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
      }
    case SET_ORDER:
      return {
        ...state,
        order: action.payload.order,
      }
    case POST_ORDER:
      return {
        ...state,
        order: { ...initialState.order },
      }
    case SER_PACKS_COUNT:
      return {
        ...state,
        packsCount: action.payload.packsCount,
      }
    default:
      return state
  }
}

export const setOrders = (orders) => ({
  type: SET_ORDERS,
  payload: { orders },
})

export const setOrder = (order) => ({
  type: SET_ORDER,
  payload: { order },
})

export const postOrder = () => ({
  type: POST_ORDER,
})

// export const setPacksCount = (packsCount) => (
//   {
//     type: SER_PACKS_COUNT,
//     payload: {packsCount}
//   }
// )

export default ordersReducer
