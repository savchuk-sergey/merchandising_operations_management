const SET_ORDER_DETAILS = 'SET_ORDER_DETAILS'
const SET_ORDER_DETAIL = 'SET_ORDER_DETAIL'
const POST_ORDER_DETAIL = 'POST_ORDER_DETAIL'

const initialState = {
  orderDetails: [],
  orderDetail: {
    order_id: '',
    pack: '',
    qty: '',
  }
}

const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.payload.orderDetails
      }
    case SET_ORDER_DETAIL:
      return {
        ...state,
        orderDetail: action.payload.orderDetail
      }
    case POST_ORDER_DETAIL:
      return {
        ...state,
        orderDetail: {
          ...initialState.orderDetail
        }
      }
    default:
      return state
  }
}

export const setOrderDetails = (orderDetails) => (
  {
    type: SET_ORDER_DETAILS,
    payload: {orderDetails}
  }
)

export const setOrderDetail = (orderDetail) => (
  {
    type: SET_ORDER_DETAIL,
    payload: {orderDetail}
  }
)

export const postOrderDetail = () => (
  {
    type: POST_ORDER_DETAIL
  }
)

export default orderDetailsReducer;
