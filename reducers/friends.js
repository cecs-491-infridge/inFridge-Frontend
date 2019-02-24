const defaultState = []
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'ADD_FRIEND':
      return [
        ...state,
        action.friend
      ];
      break;

    case 'REMOVE_FRIEND':
      return state.filter(({ id }) => id !== action.id);
      break;

    case 'UPDATE_FRIEND':
      return state.map((friend) => friend.id === action.id ? { ...friend, ...action.updates } : friend);
      break;

    case 'SET_FRIENDS':
      return action.friends;
      break;

    default:
      return state;
      break;
  }
}
