import itemsApi from '../../api/itemsApi'

const SET_ITEMS = 'SET_ITEMS'
const SET_ITEM = 'SET_ITEM'
const CREATE_ITEM = 'CREATE_ITEM'

const initialState = {
  items: [],
  item: {
    item: '',
    item_type: '',
    description: '',
    start_retail: '',
    uom: '',
    created_at: '',
    created_by: '',
    updated_at: '',
    updated_by: '',
    selling_currency: '',
  },
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload.items,
      }
    case SET_ITEM:
      return {
        ...state,
        item: action.payload.item,
      }
    case CREATE_ITEM:
      return {
        ...state,
        item: {
          ...initialState.item,
        },
      }
    default:
      return state
  }
}

export const setItems = (items) => ({
  type: SET_ITEMS,
  payload: { items },
})

export const setItem = (item) => ({
  type: SET_ITEM,
  payload: { item },
})

const createItemAction = () => ({
  type: CREATE_ITEM,
})

export const createItem = (item) => (dispatch) => {
  itemsApi.createItem(item).then((r) => {
    dispatch(createItemAction())
    M.toast({ html: r.message })
  })
}

export const getItems = () => (dispatch) => {
  itemsApi
    .getItems()
    .then((items) => dispatch(setItems(items)))
}

export const deleteItem = (itemId) => (dispatch) => {
  itemsApi
    .deleteItem(itemId)
    .then((r) => {
      dispatch(getItems())
      M.toast({ html: r.message })
    })
    .catch((r) => {
      M.toast({ html: r.message })
    })
}

export default itemsReducer
