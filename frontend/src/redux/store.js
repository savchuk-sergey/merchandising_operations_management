import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import userReducer from './reducers/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import itemsReducer from './reducers/itemsReducer'
import storesReducer from './reducers/storesReducer'
import promotionsReducer from './reducers/promotionReducer'
import itemStoresReducer from './reducers/itemStoresReducer'
import packsReducer from './reducers/PacksReducer'
import whsReducer from './reducers/whsReducer'
import packWhsReducer from './reducers/PackWhsReducer'
import priceChangeReducer from './reducers/PriceChangeReducer'
import suppliersReducer from './reducers/suppliersReducer'
import ordersReducer from './reducers/OrdersReducer'
import orderDetailsReducer from './reducers/orderDetailsReducer'
import shipmentsReducer from './reducers/shipmentsReducer'
import shipmentDetailsReducer from './reducers/shipmentDetailsReducer'

let reducers = combineReducers({
  items: itemsReducer,
  itemStores: itemStoresReducer,
  stores: storesReducer,
  user: userReducer,
  promotions: promotionsReducer,
  packs: packsReducer,
  whs: whsReducer,
  packWhs: packWhsReducer,
  priceChange: priceChangeReducer,
  suppliers: suppliersReducer,
  orders: ordersReducer,
  orderDetails: orderDetailsReducer,
  shipments: shipmentsReducer,
  shipmentDetails: shipmentDetailsReducer,
})

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
