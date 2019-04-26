const defaultState = []
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'ADD_TRANSACTION':
      return [
        ...state,
        action.transaction
      ];
      break;

    case 'DELETE_TRANSACTION':
      return state.filter(({ _id }) => _id !== action.id);
      break;

    case 'UPDATE_TRANSACTION':
      return state.map((transaction) => transaction.id === action.id ? { ...transaction, ...action.updates } : transaction);
      break;

    case 'LIKE_TRANSACTION':
      return state.map((transaction) => transaction.id === action.postId ? { ...transaction, ...action.updates } : transaction);

    case 'SET_TRANSACTIONS':
      console.log('TRANSACTION REDUCER SET TRANSACTIONS---------------------------------')
      console.log(action.transactions);
      return action.transactions ? action.transactions : defaultState;
      break;

    default:
      return state;
      break;
  }
}
