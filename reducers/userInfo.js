const defaultState = {};

export default (state=defaultState, action) => {

  switch(action.type) {

     case 'ADD_USERID':
       return {
         ...state,
         action.userId
       };
       break;

    default:
      return state;
      break;
  }
}
