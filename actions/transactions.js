import axios from 'axios';

const addTransaction = (transaction) => ({
  type: 'ADD_TRANSACTION',
  transaction
});
export const startAddTransaction = (data = {}) => {
    console.log('in')
  return (dispatch) => {
    const {
      author,
      body,
      location,
      tradeType
    } = data;
    const transaction = { author, body, location, tradeType };

    // axios.post(`localhost:3000/create-transaction`, {
    //     ...transaction
    // });

    dispatch(addTransaction(transaction));
  }
}

const removeTransaction = (id) => ({
  type: 'REMOVE_TRANSACTION',
  id
})
export const startRemoveTransaction = (id) => {
  return (dispatch) => {
    dbRef.child(id).remove()
      .then(() => {
        dispatch(removeTransaction(id))
      })
  }
}

const updateTransaction = (id, updates) => ({
  type: 'UPDATE_TRANSACTION',
  id,
  updates
})

export const startUpdateTransaction = (id, updates) => {
  return (dispatch) => {
    dbRef.child(id).update(updates)
      .then(dispatch(updateTransaction(id, updates)))
  }
}

const setTransactions = (transactions) => ({
  type: 'SET_TRANSACTION',
  transactions
})
export const startSetTransactions = () => {
  return (dispatch) => {

        return axios.get('localhost:3000/5c5caf54ebc96e80e8c4dd2a/all-posts')
            .then(transactions => {
                dispatch(setTransactions(transactions));
            })
            .catch(err => {
                console.log(err);
            })

    // return dbRef.once('value')
    //   .then((snapshot) => {
    //     const transactions = [];

    //     snapshot.forEach((childSnapshot) => {
    //       transactions.push({
    //         id: childSnapshot.key,
    //         ...childSnapshot.val()
    //       })
    //     })
    //     dispatch(setTransactions(transactions))
    //   })
    //   .catch((e) => {
    //     console.log('Error: ', e);
    //   })
  }
}
