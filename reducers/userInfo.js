const defaultState = { userId: '', token: '' };

export default (state=defaultState, action) => {

  switch(action.type) {

      case 'UPDATE_USERID':
       return {
         ...state,
         userId: action.userId
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
