// Bug with Redux-Persist
// Requires Map as initial State
const defaultState = {
  list: []
}
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'ADD_FOOD':
      return {
        ...state,
        list: [
          action.food,
          ...state.list
        ]
      };
      break;

    case 'DELETE_FOOD':
    console.log("DELTE FOODDDODDODODOO")
    console.log(state);
      return state.filter(({ _id }) => {
        console.log(`${_id} !== ${action.id}`)
        return _id !== action.id
      });
      break;

    case 'UPDATE_FOOD':
      const list = state.list.map((item) => item._id === action.id ? { ...item, ...action.updates } : item);
      return {
        ...state,
        list
      }

    case 'SET_FOOD':
      console.log('FRIDGE REDUCER SET FOOD---------------------------------')
      console.log(action.food);
      return {
        ...state,
        list: action.food ? action.food : []
      }

    default:
      return state;
      break;
  }
}