const defaultState = []
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'ADD_TOKEN':
      return [
        ...state,
        action.token
      ];
      break;

    case 'UPDATE_TOKEN':
      return state.map((token) => token.id === action.id ? { ...token, ...action.updates } : token);
      break;

    case 'SET_TOKENS':
      return [action.token];
      break;

    default:
      return state;
      break;
  }
}
