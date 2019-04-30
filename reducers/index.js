// MODULE TO CONFIURE REDUX-PERSIST
// AND EXPORT COMBINED REDUCERS
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import user from './userInfo';
import transactions from './transactions';
import fridge from './fridge';
import friends from './friends';
import sortBy from './sortBy';

// CONFIGS
const rootPersistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel1,
    blacklist: []
}

const createConfig = (key, blacklist) => ({
    key,
    storage,
    blacklist
});

const userPersistConfig = createConfig('user', []);
const transactionsPersistConfig = createConfig('transactions', []);
const fridgePersistConfig = createConfig('fridge', []);
const friendsPersistConfig = createConfig('friends', []);
const sortByPersistConfig = createConfig('sortBy', []);

// COMBINE REDUCERS
const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, user),
    transactions: persistReducer(transactionsPersistConfig, transactions),
    fridge: persistReducer(fridgePersistConfig, fridge),
    friends: persistReducer(friendsPersistConfig, friends),
    sortBy: persistReducer(sortByPersistConfig, sortBy)
});

export default persistReducer(rootPersistConfig, rootReducer);