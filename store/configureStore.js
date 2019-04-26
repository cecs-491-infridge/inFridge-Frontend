import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import feedReducer from '../reducers/feed'
import fridgeReducer from '../reducers/fridge'
import friendsReducer from '../reducers/friends'
import sortByReducer from '../reducers/sortBy'
import transactionsReducer from '../reducers/transactions'
import userReducer from '../reducers/userInfo'
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import persistedReducer from '../reducers';

export const store = createStore(
    persistedReducer,
    {},
    compose(
      applyMiddleware(thunk)
    )
);
export const persistor = persistStore(store);