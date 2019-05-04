const defaultState = {
  list: []
};
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'ADD_TRANSACTION':
    console.log(state)
    console.log(action)
      return {
        ...state,
        list: [
          action.transaction,
          ...state.list
        ]
      };
      break;

    case 'DELETE_TRANSACTION':
      return state.filter(({ _id }) => _id !== action.id);
      break;

    case 'UPDATE_TRANSACTION':
      const list = state.list.map((item) => item._id === action.id ? { ...item, ...action.updates } : item);
      return {
        ...state,
        list
      }

    case 'SET_TRANSACTIONS':
      console.log('TRANSACTION REDUCER SET TRANSACTIONS---------------------------------')
      console.log(state);
      return {
        ...state,
        list: action.transactions ? action.transactions : []
      }

    default:
      return state;
      break;
  }
}
