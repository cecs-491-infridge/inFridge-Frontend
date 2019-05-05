// MODULE TO CONFIURE REDUX-PERSIST
// AND EXPORT COMBINED REDUCERS
import { combineReducers } from 'redux';
import { createTransform, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

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


const createConfig = (key, blacklist) => {
    return {
        key,
        storage,
        blacklist
    };
}

const userPersistConfig = createConfig('user', []);
const transactionsPersistConfig = createConfig('transactions', []);
const fridgePersistConfig = createConfig('fridge', []);
const friendsPersistConfig = createConfig('friends', []);
const sortByPersistConfig = createConfig('sortBy', []);

// COMBINE REDUCERS
const appReducer = combineReducers({
    user: persistReducer(userPersistConfig, user),
    transactions: persistReducer(transactionsPersistConfig, transactions),
    fridge: persistReducer(fridgePersistConfig, fridge),
    friends: persistReducer(friendsPersistConfig, friends),
    sortBy: persistReducer(sortByPersistConfig, sortBy)
});


// RESET ROOT REDUCER
const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        storage.removeItem('persist:root');
        storage.removeItem('persist:user');
        storage.removeItem('persist:transactions');
        storage.removeItem('persist:fridge');
        storage.removeItem('persist:friends');
        storage.removeItem('persist:sortBy');

        state = undefined;
        console.log(state)
    }
  
    return appReducer(state, action)
}

export default persistReducer(rootPersistConfig, rootReducer);