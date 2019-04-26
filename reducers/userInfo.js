const defaultState = { userId: '' };

export default (state=defaultState, action) => {

  switch(action.type) {

     case 'ADD_USERID':
       return {
         ...state,
         userId: action.userId
       };
       break;

    default:
      return state;
      break;
  }
}
