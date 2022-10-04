const SET_PACKS = 'SET_PACKS'
const SET_PACK = 'SET_PACK'
const POST_PACK = 'POST_PACK'

const initialState = {
  packs: [],
  pack: {
    pack: '',
    supplier_id: '',
    pack_qty: '',
    item_id: '',
    description: '',
    cost: ''
  }
}

const packsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PACKS:
      return {
        ...state,
        packs: action.payload.packs
      }
    case SET_PACK:
      return {
        ...state,
        pack: action.payload.pack
      }
    case POST_PACK:
      return {
        ...state,
        pack: {...initialState.pack}
      }
    default:
      return state
  }
}

export const setPacks = (packs) => (
  {
    type: SET_PACKS,
    payload: {packs}
  }
)
export const setPack = (pack) => (
  {
    type: SET_PACK,
    payload: {pack}
  }
)

export const postPack = () => (
  {
    type: POST_PACK
  }
)

export default packsReducer;
