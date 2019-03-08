// import axios from 'axios';

// const addTransaction = (food) => ({
//   type: 'ADD_FOOD',
//   food
// });
// export const startAddTransaction = (data = {}) => {
//     console.log('in')
//   return (dispatch) => {
//     const {
//       fridgeId,
//       name
//     } = data;
//     const food = { name };

//     // Need user id to do this
//     // WAIT FOR VICTORIA TO GET USER ID

//     // axios.post(`localhost:3000/add-food`, {
//     //     fridgeId,
//     //     ...food
//     // });

//     dispatch(addFood(food));
//   }
// }

// const removeFood = (fridgeId, foodId) => ({
//   type: 'REMOVE_FOOD',
//   id
// })
// export const startRemoveTransaction = (id) => {
//   return (dispatch) => {
//     dbRef.child(id).remove()
//       .then(() => {
//         dispatch(removeTransaction(id))
//       })
//   }
// }

// const updateTransaction = (id, updates) => ({
//   type: 'UPDATE_TRANSACTION',
//   id,
//   updates
// })

// export const startUpdateTransaction = (id, updates) => {
//   return (dispatch) => {
//     dbRef.child(id).update(updates)
//       .then(dispatch(updateTransaction(id, updates)))
//   }
// }

// const setTransactions = (transactions) => ({
//   type: 'SET_TRANSACTIONS',
//   transactions
// })
// export const startSetTransactions = () => {
//   return (dispatch) => {
//         return axios.get('http://school.corg.network:3000/all-posts')
//             .then(transactions => {
//               console.log('--------------------------------------')
//               console.log(transactions.data.data)
//               dispatch(setTransactions(transactions.data.data));
//             })
//             .catch(err => {
//                 console.log(err);
//             })

//     // return dbRef.once('value')
//     //   .then((snapshot) => {
//     //     const transactions = [];

//     //     snapshot.forEach((childSnapshot) => {
//     //       transactions.push({
//     //         id: childSnapshot.key,
//     //         ...childSnapshot.val()
//     //       })
//     //     })
//     //     dispatch(setTransactions(transactions))
//     //   })
//     //   .catch((e) => {
//     //     console.log('Error: ', e);
//     //   })
//   }
// }
