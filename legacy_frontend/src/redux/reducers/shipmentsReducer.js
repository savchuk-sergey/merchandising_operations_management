const SET_SHIPMENTS = 'SET_SHIPMENTS'
const SET_SHIPMENT = 'SET_SHIPMENT'
const POST_SHIPMENT = 'POST_SHIPMENT'

const initialState = {
  shipments: [],
  shipment: {
    from: '',
    to: '',
    pack: '',
    qty: '',
  },
}

const shipmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHIPMENTS:
      return {
        ...state,
        shipments: action.payload.shipments,
      }
    case SET_SHIPMENT:
      return {
        ...state,
        shipment: action.payload.shipment,
      }
    case POST_SHIPMENT:
      return {
        ...state,
        shipment: { ...initialState.shipment },
      }
    default:
      return state
  }
}

export const setShipments = (shipments) => ({
  type: SET_SHIPMENTS,
  payload: { shipments },
})

export const setShipment = (shipment) => ({
  type: SET_SHIPMENT,
  payload: { shipment },
})

export const postShipment = () => ({
  type: POST_SHIPMENT,
})

export default shipmentsReducer
