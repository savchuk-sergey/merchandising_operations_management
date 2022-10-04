const SET_ITEMS = 'SET_ITEMS'
const SET_ITEM = 'SET_ITEM'
const POST_ITEM = 'POST_ITEM'

const initialState = {
  items: [],
  item: {
    item: '',
    item_type: '',
    description: '',
    start_retail: '',
    uom: ''
  }
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload.items
      }
    case SET_ITEM:
      return {
        ...state,
        item: action.payload.item
      }
    case POST_ITEM:
      return {
        ...state,
        item: {
          ...initialState.item
        }
      }
    default:
      return state
  }
}

export const setItems = (items) => (
  {
    type: SET_ITEMS,
    payload: {items}
  }
)

export const setItem = (item) => (
  {
    type: SET_ITEM,
    payload: {item}
  }
)

export const postItem = () => (
  {
    type: POST_ITEM
  }
)

export default itemsReducer;
