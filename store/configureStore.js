import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import feedReducer from '../reducers/feed'
import fridgeReducer from '../reducers/fridge'
import friendsReducer from '../reducers/friends'
import sortByReducer from '../reducers/sortBy'
import transactionsReducer from '../reducers/transactions'
import userReducer from '../reducers/userInfo'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export default () => {
  const store = createStore(
    combineReducers({
      feed: feedReducer,
      fridge: fridgeReducer,
      friends: friendsReducer,
      sortBy: sortByReducer,
      transactions: transactionsReducer,
	  userInfo: userReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store;
}
