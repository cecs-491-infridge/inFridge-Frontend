const defaultState = []
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'ADD_TRANSACTION':
      return [
        ...state,
        action.transaction
      ];
      break;

    case 'REMOVE_TRANSACTION':
      return state.filter(({ _id }) => _id !== action.id);
      break;

    case 'UPDATE_TRANSACTION':
      return state.map((transaction) => transaction.id === action.id ? { ...transaction, ...action.updates } : transaction);
      break;

    case 'SET_TRANSACTIONS':
      return action.transactions;
      break;

    default:
      return state;
      break;
  }
}
