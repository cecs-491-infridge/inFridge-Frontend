import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import feedReducer from '../reducers/feed'
import friendsReducer from '../reducers/friends'
import transactionsReducer from '../reducers/transactions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export default () => {
  const store = createStore(
    combineReducers({
      feed: feedReducer,
      friends: friendsReducer,
      transactions: transactionsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store;
}
