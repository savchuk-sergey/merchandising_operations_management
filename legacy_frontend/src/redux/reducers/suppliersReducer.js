const SET_SUPPLIERS = 'SET_SUPPLIERS'
const SET_SUPPLIER = 'SET_SUPPLIER'
const POST_SUPPLIER = 'POST_SUPPLIER'

const initialState = {
  suppliers: [],
  supplier: {
    name: '',
    address: '',
    phone_number: '',
  },
}

const suppliersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUPPLIERS:
      return {
        ...state,
        suppliers: action.payload.suppliers,
      }
    case SET_SUPPLIER:
      return {
        ...state,
        supplier: action.payload.supplier,
      }
    case POST_SUPPLIER:
      return {
        ...state,
        supplier: {
          ...initialState.supplier,
        },
      }
    default:
      return state
  }
}

export const setSuppliers = (suppliers) => ({
  type: SET_SUPPLIERS,
  payload: { suppliers },
})

export const setSupplier = (supplier) => ({
  type: SET_SUPPLIER,
  payload: { supplier },
})

export const postSupplier = () => ({
  type: POST_SUPPLIER,
})

export default suppliersReducer
