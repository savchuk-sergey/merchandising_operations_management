const SET_SHIPMENT_DETAILS = 'SET_SHIPMENT_DETAILS'
const SET_SHIPMENT_DETAIL = 'SET_SHIPMENT_DETAIL'
const POST_SHIPMENT_DETAIL = 'POST_SHIPMENT_DETAIL'

const initialState = {
  shipmentDetails: [],
  shipmentDetail: {
    shipment_id: '',
    pack: '',
    qty: '',
  },
}

const shipmentDetailsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_SHIPMENT_DETAILS:
      return {
        ...state,
        shipmentDetails: action.payload.shipmentDetails,
      }
    case SET_SHIPMENT_DETAIL:
      return {
        ...state,
        shipmentDetail: action.shipmentDetail.orderDetail,
      }
    case POST_SHIPMENT_DETAIL:
      return {
        ...state,
        shipmentDetail: {
          ...initialState.shipmentDetail,
        },
      }
    default:
      return state
  }
}

export const setShipmentDetails = (shipmentDetails) => ({
  type: SET_SHIPMENT_DETAILS,
  payload: { shipmentDetails },
})

export const setShipmentDetail = (shipmentDetail) => ({
  type: SET_SHIPMENT_DETAIL,
  payload: { shipmentDetail },
})

export const postShipmentsDetail = () => ({
  type: POST_SHIPMENT_DETAIL,
})

export default shipmentDetailsReducer
