const SET_ORDERS = 'SET_ORDERS'

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

export const setOrder = (orders) => (
  {
    type: SET_ORDERS,
    payload: {orders}
  }
)
export default ordersReducer;
