const SET_ORDERS = 'SET_ORDERS'
const SET_ORDER = 'SET_ORDER'
const POST_ORDER = 'POST_ORDER'

const initialState = {
  orders: [],
  order: {
    item: '',
    item_type: '',
    description: '',
    start_retail: '',
    uom: ''
  }
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders
      }
    case SET_ORDER:
      return {
        ...state,
        order: action.payload.order
      }
    case POST_ORDER:
      return {
        ...state,
        order: {...initialState.order}
      }
    default:
      return state
  }
}

export const setOrders = (orders) => (
  {
    type: SET_ORDERS,
    payload: {orders}
  }
)

export const setOrder = (order) => (
  {
    type: SET_ORDER,
    payload: {order}
  }
)

export const postOrder = () => (
  {
    type: POST_ORDER
  }
)

export default ordersReducer;
