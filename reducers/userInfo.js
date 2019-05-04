const defaultState = { userId: '', token: '' };

export default (state=defaultState, action) => {

  switch(action.type) {

      case 'UPDATE_USER':
       return {
         ...state,
         userId: action.userId,
         username: action.username
       };

      case 'UPDATE_TOKEN':
       return {
         ...state,
         token: action.token
       };

       case 'RESET_USER':
       return defaultState;

    default:
      return state;
  }
}
